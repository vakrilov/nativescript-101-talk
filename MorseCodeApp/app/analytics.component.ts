import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MorseService, BigData } from './morse.service';

@Component({
    selector: 'ns-analytics',
    templateUrl: "analytics.component.html",

})
export class AnalyticsComponent {
    msg: string;
    data: BigData;
    constructor(route: ActivatedRoute, service: MorseService) {
        this.msg = route.snapshot.params[ "msg" ];
        this.data = service.getBigData(this.msg);
    }
}