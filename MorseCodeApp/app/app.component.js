"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent() {
        this.msg = "";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            animations: [
                animations_1.trigger("codeCharAnimation", [
                    animations_1.transition("* => *", [
                        // this hides everything right away
                        animations_1.query(":enter", animations_1.style({ opacity: 0, transform: "translateX(100)" })),
                        // starts to animate things with a stagger in between
                        animations_1.query(":enter", animations_1.stagger(100, [
                            animations_1.animate(300, animations_1.style({ opacity: 1, transform: "translateX(0)" }))
                        ]), { delay: 100 }),
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQTBGO0FBc0IxRjtJQXBCQTtRQXFCSSxRQUFHLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFGWSxZQUFZO1FBcEJ4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1Isb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRTtvQkFDekIsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLG1DQUFtQzt3QkFDbkMsa0JBQUssQ0FBQyxRQUFRLEVBQ1Ysa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQzt3QkFFeEQscURBQXFEO3dCQUNyRCxrQkFBSyxDQUFDLFFBQVEsRUFDVixvQkFBTyxDQUFDLEdBQUcsRUFBRTs0QkFDVCxvQkFBTyxDQUFDLEdBQUcsRUFDUCxrQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzt5QkFDekQsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO3FCQUMxQixDQUFDO2lCQUNMLENBQUM7YUFDTDtTQUNKLENBQUM7T0FDVyxZQUFZLENBRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoXCJjb2RlQ2hhckFuaW1hdGlvblwiLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiKiA9PiAqXCIsIFtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGhpZGVzIGV2ZXJ5dGhpbmcgcmlnaHQgYXdheVxuICAgICAgICAgICAgICAgIHF1ZXJ5KFwiOmVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwKVwiIH0pKSxcblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0cyB0byBhbmltYXRlIHRoaW5ncyB3aXRoIGEgc3RhZ2dlciBpbiBiZXR3ZWVuXG4gICAgICAgICAgICAgICAgcXVlcnkoXCI6ZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2dlcigxMDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiB9KSlcbiAgICAgICAgICAgICAgICAgICAgXSksIHsgZGVsYXk6IDEwMCB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG1zZzogc3RyaW5nID0gXCJcIjtcbn1cblxuXG4iXX0=