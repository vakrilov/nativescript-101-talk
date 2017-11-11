import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { AnalyticsComponent } from "./analytics.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";

import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { FlashlightService } from "./flashlight.service";
import { MorseService } from "./morse.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUIChartModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptAnimationsModule,
    ],
    declarations: [
        // TODO: Lazy load feature modules
        AppComponent,
        AnalyticsComponent,
        HomeComponent
    ],
    providers: [
        MorseService,
        FlashlightService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
