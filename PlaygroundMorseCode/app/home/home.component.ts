import { Component } from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";
import { MorseService } from "../morse.service";
// import { FlashlightService } from "../flashlight.service";

const GAP_TIME = 300;
const SYMBOL_TIME_MAP = {
    ".": 400,
    "_": 1000,
};
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    animations: [
        trigger("flyIn", [
            transition("* => *",
                query(":enter", [
                    style({ opacity: 0, transform: "translateX(100)" }),
                    stagger(100, [
                        animate(300, style({ opacity: 1, transform: "translateX(0)" }))
                    ])
                ]),
            )
        ]),
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
    public code: Array<string>;
    public currentIndex = -1;
    public message: string;

    constructor(private morseService: MorseService) { }

    update(value: string) {
        this.message = value;
        this.code = this.morseService.translate(value).split("");
    }

    async sendMessage() {
        for (let i = 0; i < this.code.length; i += 1) {
            this.currentIndex = i;
            await sleep(GAP_TIME);
        }

        this.currentIndex = -1;
    }

}












    // private async playSingle(symbol: string) {
    //     const time = SYMBOL_TIME_MAP[symbol];
    //     if (time) {
    //         await this.shine(time);
    //     }
    // }


    // private async shine(ms: number) {
    //     this.flash.turnOn();
    //     await sleep(ms);
    //     this.flash.turnOff();
    // }
