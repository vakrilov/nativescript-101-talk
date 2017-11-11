import { Component } from "@angular/core";
// import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

import { MorseService } from "../shared/morse.service";
import { FlashlightService } from "../shared/flashlight.service";

@Component({
    moduleId: module.id,
    selector: "ns-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    code: string;

    update(msg: string) {
        this.code = this.morse.translate(msg);
    }

    constructor(private morse: MorseService, private flash: FlashlightService) {
    }

    light(){
        this.flash.turnOn();
    }

    dark(){
        this.flash.turnOff();
    }
}
