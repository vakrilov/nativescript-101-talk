import { Component } from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    animations: [
        trigger("codeCharAnimation", [
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
        ])
    ]
})
export class AppComponent {
    msg: string = "";
}


