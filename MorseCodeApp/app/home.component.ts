import { Component } from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";
import { MorseService } from "./morse.service";

@Component({
    selector: "ns-home",
    templateUrl: "home.component.html",
    animations: [
        trigger("flyIn", [
            transition("* => *", [
                // this hides everything right away
                query(":enter",
                    style({ opacity: 0, transform: "translateX(100)" })),

                // starts to animate things with a stagger in between
                query(":enter",
                    stagger(100, [
                        animate(300,
                            style({ opacity: 1, transform: "translateX(0)" }))
                    ]), { delay: 100 }),
            ])
        ]),
        trigger("jump", [
            transition("down => up", [
                animate(100, style({ transform: "translateY(-30)" })) ],
            ),
            transition("up => down", [
                animate(100, style({ transform: "translateY(0)" })) ],
            ),
        ])
    ]
})
export class HomeComponent {
    msg: string;
    code: Array<string>;
    light: boolean = false;
    currentIndex: number = -1;
    pieSource: Array<{ name: string, amount: number }> = [];

    constructor(private morse: MorseService) { }

    update(value) {
        this.msg = value;
        this.code = this.morse.translate(value).split("")
    }

    sendMessage() {
        const code = this.code;
        let i = 0;

        let len: number;
        const next = () => {
            if (i < code.length) {
                if (code[ i ] === "." || code[ i ] === "_") {
                    len = code[ i ] === "." ? 300 : 600;
                    this.lightOn(i);
                    setTimeout(() => this.lightOff(), len);
                    setTimeout(next, len + 300);
                } else {
                    setTimeout(next, 600);
                }
            } else {
                console.log("FINISHED")
            }
            i++;
        }
        next();
    }

    lightOn(index: number) {
        // TODO: Use nativescript-flashlight plugin
        this.light = true;
        this.currentIndex = index;
    }

    lightOff() {
        // TODO: Use nativescript-flashlight plugin        
        this.light = false;
        this.currentIndex = -1;
    }
}