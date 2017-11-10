"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var morse_encode_service_1 = require("./morse-encode.service");
var AppComponent = (function () {
    function AppComponent(morse) {
        this.morse = morse;
        this.light = false;
        this.currentIndex = -1;
        this.pieSource = [];
    }
    AppComponent.prototype.update = function (value) {
        this.code = this.morse.translate(value).split("");
        var res = {};
        this.code.forEach(function (c) { return res[c] = res[c] ? res[c] + 1 : 1; });
        this.pieSource = [
            { name: "dot", amount: res["."] },
            { name: "dash", amount: res["_"] },
            { name: "space", amount: res[" "] }
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQTBGO0FBQzFGLCtEQUE0RDtBQThCNUQ7SUFNSSxzQkFBb0IsS0FBeUI7UUFBekIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFKN0MsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLGNBQVMsR0FBNEMsRUFBRSxDQUFDO0lBRVAsQ0FBQztJQUVsRCw2QkFBTSxHQUFOLFVBQU8sS0FBSztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRWpELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBRSxHQUFHLENBQUUsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBRSxHQUFHLENBQUUsRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBRSxHQUFHLENBQUUsRUFBRTtTQUN4QyxDQUFDO0lBRU4sQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFBQSxpQkFxQkM7UUFwQkcsSUFBTSxJ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WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHF1ZXJ5LCBzdGFnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IE1vcnNlRW5jb2RlU2VydmljZSB9IGZyb20gXCIuL21vcnNlLWVuY29kZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcihcImZseUluXCIsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCIqID0+ICpcIiwgW1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaGlkZXMgZXZlcnl0aGluZyByaWdodCBhd2F5XG4gICAgICAgICAgICAgICAgcXVlcnkoXCI6ZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDApXCIgfSkpLFxuXG4gICAgICAgICAgICAgICAgLy8gc3RhcnRzIHRvIGFuaW1hdGUgdGhpbmdzIHdpdGggYSBzdGFnZ2VyIGluIGJldHdlZW5cbiAgICAgICAgICAgICAgICBxdWVyeShcIjplbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZ2VyKDEwMCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiIH0pKVxuICAgICAgICAgICAgICAgICAgICBdKSwgeyBkZWxheTogMTAwIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoXCJqdW1wXCIsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCJkb3duID0+IHVwXCIsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMzApXCIgfSkpIF0sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdHJhbnNpdGlvbihcInVwID0+IGRvd25cIiwgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoMTAwLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCIgfSkpIF0sXG4gICAgICAgICAgICApLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb2RlOiBBcnJheTxzdHJpbmc+O1xuICAgIGxpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudEluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwaWVTb3VyY2U6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlciB9PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3JzZTogTW9yc2VFbmNvZGVTZXJ2aWNlKSB7IH1cblxuICAgIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1vcnNlLnRyYW5zbGF0ZSh2YWx1ZSkuc3BsaXQoXCJcIilcblxuICAgICAgICBsZXQgcmVzID0ge307XG4gICAgICAgIHRoaXMuY29kZS5mb3JFYWNoKGMgPT4gcmVzWyBjIF0gPSByZXNbIGMgXSA/IHJlc1sgYyBdICsgMSA6IDEpO1xuXG4gICAgICAgIHRoaXMucGllU291cmNlID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcImRvdFwiLCBhbW91bnQ6IHJlc1sgXCIuXCIgXSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImRhc2hcIiwgYW1vdW50OiByZXNbIFwiX1wiIF0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJzcGFjZVwiLCBhbW91bnQ6IHJlc1sgXCIgXCIgXSB9XG4gICAgICAgIF07XG5cbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZSgpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuY29kZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGxldCBsZW46IG51bWJlcjtcbiAgICAgICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDwgY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVsgaSBdID09PSBcIi5cIiB8fCBjb2RlWyBpIF0gPT09IFwiX1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlbiA9IGNvZGVbIGkgXSA9PT0gXCIuXCIgPyAzMDAgOiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRPbihpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0T2ZmKCksIGxlbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobmV4dCwgbGVuICsgMzAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG5leHQsIDYwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJTklTSEVEXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgIH1cblxuICAgIGxpZ2h0T24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBsaWdodE9mZigpIHtcbiAgICAgICAgdGhpcy5saWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xuICAgIH1cbn0iXX0=