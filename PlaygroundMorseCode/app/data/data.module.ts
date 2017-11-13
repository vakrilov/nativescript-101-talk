import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";

import { DataRoutingModule } from "./data-routing.module";
// import { DataComponent } from "./data.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DataRoutingModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        // DataComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DataModule { }
