import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { MorseService, BigData } from "../shared/morse.service";

@Component({
    moduleId: module.id,
    selector: "ns-data",
    templateUrl: "./data.component.html"
})
export class DataComponent {
    data: BigData;
    constructor(morse: MorseService, route: ActivatedRoute) {
        const msg = route.snapshot.params["msg"];
        this.data = morse.getBigData(msg);
    }
}
