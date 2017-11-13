"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/chart/angular");
var data_routing_module_1 = require("./data-routing.module");
// import { DataComponent } from "./data.component";
var DataModule = (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                data_routing_module_1.DataRoutingModule,
                angular_1.NativeScriptUIChartModule
            ],
            declarations: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DataModule);
    return DataModule;
}());
exports.DataModule = DataModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNkRBQThFO0FBRTlFLDZEQUEwRDtBQUMxRCxvREFBb0Q7QUFlcEQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLG1DQUF5QjthQUM1QjtZQUNELFlBQVksRUFBRSxFQUViO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvY2hhcnQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBEYXRhUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RhdGEtcm91dGluZy5tb2R1bGVcIjtcbi8vIGltcG9ydCB7IERhdGFDb21wb25lbnQgfSBmcm9tIFwiLi9kYXRhLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBEYXRhUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIC8vIERhdGFDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YU1vZHVsZSB7IH1cbiJdfQ==