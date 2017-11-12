import { Component } from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

import { MorseService } from "../shared/morse.service";
import { FlashlightService } from "../shared/flashlight.service";

const GAP_TIME = 300;
const SYMBOL_TIME_MAP = {
    ".": 400,
    "_": 1000,
};
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

@Component({
    moduleId: module.id,
    selector: "ns-home",
    templateUrl: "./home.component.html",
    animations: [
        trigger("jump", [
            transition("down => up", [
                animate(100, style({ transform: "translateY(-30)" }))],
            ),
            transition("up => down", [
                animate(100, style({ transform: "translateY(0)" }))],
            ),
        ])
    ]
})
export class HomeComponent {
    code: Array<string>;
    current: number = -1;

    update(msg: string) {
        this.code = this.morse.translate(msg).split("");
    }

    constructor(private morse: MorseService, private flash: FlashlightService) {
    }

    async send() {
        for (let i = 0; i < this.code.length; i += 1) {
            this.current = i;
            await this.playSingle(this.code[i]);
            this.current = -1;            
            await sleep(GAP_TIME);
        }
    }

    private async playSingle(symbol: string) {
        console.log("Playing: " + symbol);
        const time = SYMBOL_TIME_MAP[symbol];
        if (time) {
            this.flash.turnOn();
            await sleep(time);
            this.flash.turnOff();
        }
    }
}
