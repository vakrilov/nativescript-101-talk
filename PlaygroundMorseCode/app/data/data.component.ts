import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MorseService, BigData } from "../morse.service";

@Component({
    moduleId: module.id,
    selector: "ns-data",
    templateUrl: "./data.component.html",
})
export class DataComponent {
    message: string;
    data: BigData;
    constructor(route: ActivatedRoute, service: MorseService) {
        this.message = route.snapshot.params["msg"];
        this.data = service.getBigData(this.message);
    }
}
