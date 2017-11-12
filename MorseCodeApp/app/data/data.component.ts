import { Component } from "@angular/core";

import { MorseService } from "../shared/morse.service";

@Component({
    moduleId: module.id,
    selector: "ns-data",
    templateUrl: "./data.component.html"
})
export class DataComponent {
    constructor(private morse: MorseService) {
    }
}
