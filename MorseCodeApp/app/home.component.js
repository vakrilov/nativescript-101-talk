"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var morse_service_1 = require("./morse.service");
var HomeComponent = (function () {
    function HomeComponent(morse) {
        this.morse = morse;
        this.light = false;
        this.currentIndex = -1;
        this.pieSource = [];
    }
    HomeComponent.prototype.update = function (value) {
        this.msg = value;
        this.code = this.morse.translate(value).split("");
    };
    HomeComponent.prototype.sendMessage = function () {
        var _this = this;
        var code = this.code;
        var i = 0;
        var len;
        var next = function () {
            if (i < code.length) {
                if (code[i] === "." || code[i] === "_") {
                    len = code[i] === "." ? 300 : 600;
                    _this.lightOn(i);
                    setTimeout(function () { return _this.lightOff(); }, len);
                    setTimeout(next, len + 300);
                }
                else {
                    setTimeout(next, 600);
                }
            }
            else {
                console.log("FINISHED");
            }
            i++;
        };
        next();
    };
    HomeComponent.prototype.lightOn = function (index) {
        // TODO: Use nativescript-flashlight plugin
        this.light = true;
        this.currentIndex = index;
    };
    HomeComponent.prototype.lightOff = function () {
        // TODO: Use nativescript-flashlight plugin        
        this.light = false;
        this.currentIndex = -1;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "home.component.html",
            animations: [
                animations_1.trigger("flyIn", [
                    animations_1.transition("* => *", [
                        // this hides everything right away
                        animations_1.query(":enter", animations_1.style({ opacity: 0, transform: "translateX(100)" })),
                        // starts to animate things with a stagger in between
                        animations_1.query(":enter", animations_1.stagger(100, [
                            animations_1.animate(300, animations_1.style({ opacity: 1, transform: "translateX(0)" }))
                        ]), { delay: 100 }),
                    ])
                ]),
                animations_1.trigger("jump", [
                    animations_1.transition("down => up", [
                        animations_1.animate(100, animations_1.style({ transform: "translateY(-30)" }))
                    ]),
                    animations_1.transition("up => down", [
                        animations_1.animate(100, animations_1.style({ transform: "translateY(0)" }))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [morse_service_1.MorseService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxrREFBMEY7QUFDMUYsaURBQStDO0FBOEIvQztJQU9JLHVCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBSnZDLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixjQUFTLEdBQTRDLEVBQUUsQ0FBQztJQUViLENBQUM7SUFFNUMsOEJBQU0sR0FBTixVQUFPLEtBQUs7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUFBLGlCQXFCQztRQXBCRyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQU0sSUFBSSxHQUFHO1lBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFDLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxHQUFHLEdBQUcsSUFBSSxDQUFFLENBQUMsQ0FBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMzQixDQUFDO1lBQ0QsQ0FBQyxFQUFFLENBQUM7UUFDUixDQUFDLENBQUE7UUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNqQiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBL0NRLGFBQWE7UUE1QnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRTtnQkFDUixvQkFBTyxDQUFDLE9BQU8sRUFBRTtvQkFDYix1QkFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsbUNBQW1DO3dCQUNuQyxrQkFBSyxDQUFDLFFBQVEsRUFDVixrQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO3dCQUV4RCxxREFBcUQ7d0JBQ3JELGtCQUFLLENBQUMsUUFBUSxFQUNWLG9CQUFPLENBQUMsR0FBRyxFQUFFOzRCQUNULG9CQUFPLENBQUMsR0FBRyxFQUNQLGtCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3lCQUN6RCxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7cUJBQzFCLENBQUM7aUJBQ0wsQ0FBQztnQkFDRixvQkFBTyxDQUFDLE1BQU0sRUFBRTtvQkFDWix1QkFBVSxDQUFDLFlBQVksRUFBRTt3QkFDckIsb0JBQU8sQ0FBQyxHQUFHLEVBQUUsa0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7cUJBQUUsQ0FDMUQ7b0JBQ0QsdUJBQVUsQ0FBQyxZQUFZLEVBQUU7d0JBQ3JCLG9CQUFPLENBQUMsR0FBRyxFQUFFLGtCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztxQkFBRSxDQUN4RDtpQkFDSixDQUFDO2FBQ0w7U0FDSixDQUFDO3lDQVE2Qiw0QkFBWTtPQVA5QixhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHF1ZXJ5LCBzdGFnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IE1vcnNlU2VydmljZSB9IGZyb20gXCIuL21vcnNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImhvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoXCJmbHlJblwiLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiKiA9PiAqXCIsIFtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGhpZGVzIGV2ZXJ5dGhpbmcgcmlnaHQgYXdheVxuICAgICAgICAgICAgICAgIHF1ZXJ5KFwiOmVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwKVwiIH0pKSxcblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0cyB0byBhbmltYXRlIHRoaW5ncyB3aXRoIGEgc3RhZ2dlciBpbiBiZXR3ZWVuXG4gICAgICAgICAgICAgICAgcXVlcnkoXCI6ZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2dlcigxMDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiB9KSlcbiAgICAgICAgICAgICAgICAgICAgXSksIHsgZGVsYXk6IDEwMCB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKFwianVtcFwiLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiZG93biA9PiB1cFwiLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgxMDAsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTMwKVwiIH0pKSBdLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCJ1cCA9PiBkb3duXCIsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwKVwiIH0pKSBdLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIG1zZzogc3RyaW5nO1xuICAgIGNvZGU6IEFycmF5PHN0cmluZz47XG4gICAgbGlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHBpZVNvdXJjZTogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyIH0+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vcnNlOiBNb3JzZVNlcnZpY2UpIHsgfVxuXG4gICAgdXBkYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubXNnID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubW9yc2UudHJhbnNsYXRlKHZhbHVlKS5zcGxpdChcIlwiKVxuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5jb2RlO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgbGV0IGxlbjogbnVtYmVyO1xuICAgICAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPCBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlWyBpIF0gPT09IFwiLlwiIHx8IGNvZGVbIGkgXSA9PT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gY29kZVsgaSBdID09PSBcIi5cIiA/IDMwMCA6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodE9uKGkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHRPZmYoKSwgbGVuKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChuZXh0LCBsZW4gKyAzMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobmV4dCwgNjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklOSVNIRURcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxuXG4gICAgbGlnaHRPbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIFRPRE86IFVzZSBuYXRpdmVzY3JpcHQtZmxhc2hsaWdodCBwbHVnaW5cbiAgICAgICAgdGhpcy5saWdodCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgbGlnaHRPZmYoKSB7XG4gICAgICAgIC8vIFRPRE86IFVzZSBuYXRpdmVzY3JpcHQtZmxhc2hsaWdodCBwbHVnaW4gICAgICAgIFxuICAgICAgICB0aGlzLmxpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XG4gICAgfVxufSJdfQ==