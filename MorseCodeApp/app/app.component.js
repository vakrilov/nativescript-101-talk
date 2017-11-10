"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var morse_encode_service_1 = require("./morse-encode.service");
var AppComponent = (function () {
    function AppComponent(morse) {
        this.morse = morse;
        this.msg = "";
        this.light = false;
        this.currentIndex = -1;
    }
    AppComponent.prototype.update = function (value) {
        this.code = this.morse.translate(value).split("");
    };
    AppComponent.prototype.sendMessage = function () {
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
    AppComponent.prototype.lightOn = function (index) {
        this.light = true;
        this.currentIndex = index;
    };
    AppComponent.prototype.lightOff = function () {
        this.light = false;
        this.currentIndex = -1;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
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
        __metadata("design:paramtypes", [morse_encode_service_1.MorseEncodeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQTBGO0FBQzFGLCtEQUE0RDtBQThCNUQ7SUFNSSxzQkFBb0IsS0FBeUI7UUFBekIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFMN0MsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUVqQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdUIsQ0FBQztJQUNsRCw2QkFBTSxHQUFOLFVBQU8sS0FBSztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBcUJDO1FBcEJHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBTSxJQUFJLEdBQUc7WUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFFLENBQUMsQ0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUUsQ0FBQyxDQUFFLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNCLENBQUM7WUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQTtRQUNELElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBMUNRLFlBQVk7UUE1QnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRTtnQkFDUixvQkFBTyxDQUFDLE9BQU8sRUFBRTtvQkFDYix1QkFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsbUNBQW1DO3dCQUNuQyxrQkFBSyxDQUFDLFFBQVEsRUFDVixrQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO3dCQUV4RCxxREFBcUQ7d0JBQ3JELGtCQUFLLENBQUMsUUFBUSxFQUNWLG9CQUFPLENBQUMsR0FBRyxFQUFFOzRCQUNULG9CQUFPLENBQUMsR0FBRyxFQUNQLGtCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3lCQUN6RCxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7cUJBQzFCLENBQUM7aUJBQ0wsQ0FBQztnQkFDRixvQkFBTyxDQUFDLE1BQU0sRUFBRTtvQkFDWix1QkFBVSxDQUFDLFlBQVksRUFBRTt3QkFDckIsb0JBQU8sQ0FBQyxHQUFHLEVBQUUsa0JBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7cUJBQUUsQ0FDMUQ7b0JBQ0QsdUJBQVUsQ0FBQyxZQUFZLEVBQUU7d0JBQ3JCLG9CQUFPLENBQUMsR0FBRyxFQUFFLGtCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztxQkFBRSxDQUN4RDtpQkFDSixDQUFDO2FBQ0w7U0FDSixDQUFDO3lDQU82Qix5Q0FBa0I7T0FOcEMsWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBxdWVyeSwgc3RhZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBNb3JzZUVuY29kZVNlcnZpY2UgfSBmcm9tIFwiLi9tb3JzZS1lbmNvZGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoXCJmbHlJblwiLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiKiA9PiAqXCIsIFtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGhpZGVzIGV2ZXJ5dGhpbmcgcmlnaHQgYXdheVxuICAgICAgICAgICAgICAgIHF1ZXJ5KFwiOmVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwKVwiIH0pKSxcblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0cyB0byBhbmltYXRlIHRoaW5ncyB3aXRoIGEgc3RhZ2dlciBpbiBiZXR3ZWVuXG4gICAgICAgICAgICAgICAgcXVlcnkoXCI6ZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2dlcigxMDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiB9KSlcbiAgICAgICAgICAgICAgICAgICAgXSksIHsgZGVsYXk6IDEwMCB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKFwianVtcFwiLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiZG93biA9PiB1cFwiLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgxMDAsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTMwKVwiIH0pKSBdLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCJ1cCA9PiBkb3duXCIsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwKVwiIH0pKSBdLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbXNnOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNvZGU6IEFycmF5PHN0cmluZz47XG4gICAgbGlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3JzZTogTW9yc2VFbmNvZGVTZXJ2aWNlKSB7IH1cbiAgICB1cGRhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tb3JzZS50cmFuc2xhdGUodmFsdWUpLnNwbGl0KFwiXCIpXG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGU7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBsZXQgbGVuOiBudW1iZXI7XG4gICAgICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8IGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVbIGkgXSA9PT0gXCIuXCIgfHwgY29kZVsgaSBdID09PSBcIl9cIikge1xuICAgICAgICAgICAgICAgICAgICBsZW4gPSBjb2RlWyBpIF0gPT09IFwiLlwiID8gMzAwIDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0T24oaSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodE9mZigpLCBsZW4pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG5leHQsIGxlbiArIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChuZXh0LCA2MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSU5JU0hFRFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG5cbiAgICBsaWdodE9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saWdodCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgbGlnaHRPZmYoKSB7XG4gICAgICAgIHRoaXMubGlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAtMTtcbiAgICB9XG59Il19