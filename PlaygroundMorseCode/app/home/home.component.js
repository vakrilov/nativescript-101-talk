"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { MorseService } from "../morse.service";
// import { FlashlightService } from "../flashlight.service";
// const GAP_TIME = 300;
// const SYMBOL_TIME_MAP = {
//     ".": 400,
//     "_": 1000,
// };
var sleep = function (ms) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
}); }); };
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
// animations: [
//     trigger("flyIn", [
//         transition("* => *",
//             query(":enter", [
//                 style({ opacity: 0, transform: "translateX(100)" }),
//                 stagger(100, [
//                     animate(300, style({ opacity: 1, transform: "translateX(0)" }))
//                 ])
//             ]),
//         )
//     ]),
//     trigger("jump", [
//         transition("down => up", [
//             animate(100, style({ transform: "translateY(-30)" }))],
//         ),
//         transition("up => down", [
//             animate(100, style({ transform: "translateY(0)" }))],
//         ),
//     ])
// ]
// update(value) {
//     this.msg = value;
//     this.code = this.morse.translate(value).split("");
// }
// async sendMessage() {
//     for (let i = 0; i < this.code.length; i += 1) {
//         this.currentIndex = i;
//         await this.playSingle(this.code[i]);
//         this.currentIndex = -1;
//         await sleep(GAP_TIME);
//     }
// }
// private async playSingle(symbol: string) {
//     const time = SYMBOL_TIME_MAP[symbol];
//     if (time) {
//         await this.shine(time);
//     }
// }
// private async shine(ms: number) {
//     this.flash.turnOn();
//     await sleep(ms);
//     this.flash.turnOff();
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBaUZBOztBQWpGQSxzQ0FBMEM7QUFFMUMsbURBQW1EO0FBQ25ELDZEQUE2RDtBQUU3RCx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsS0FBSztBQUNMLElBQU0sS0FBSyxHQUFHLFVBQU0sRUFBRTtJQUFJLHNCQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFBO1NBQUEsQ0FBQztBQU8xRTtJQUNJO0lBQWdCLENBQUM7SUFEUixhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FFekI7SUFBRCxvQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLHNDQUFhO0FBWXZCLGdCQUFnQjtBQUNmLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLHVFQUF1RTtBQUN2RSxpQ0FBaUM7QUFDakMsc0ZBQXNGO0FBQ3RGLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLFVBQVU7QUFDVix3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLHNFQUFzRTtBQUN0RSxhQUFhO0FBQ2IscUNBQXFDO0FBQ3JDLG9FQUFvRTtBQUNwRSxhQUFhO0FBQ2IsU0FBUztBQUNULElBQUk7QUFPSixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHlEQUF5RDtBQUN6RCxJQUFJO0FBRUosd0JBQXdCO0FBQ3hCLHNEQUFzRDtBQUN0RCxpQ0FBaUM7QUFDakMsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsUUFBUTtBQUNSLElBQUk7QUFFSiw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDLGtCQUFrQjtBQUNsQixrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXIgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuLy8gaW1wb3J0IHsgTW9yc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL21vcnNlLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7IEZsYXNobGlnaHRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsYXNobGlnaHQuc2VydmljZVwiO1xuXG4vLyBjb25zdCBHQVBfVElNRSA9IDMwMDtcbi8vIGNvbnN0IFNZTUJPTF9USU1FX01BUCA9IHtcbi8vICAgICBcIi5cIjogNDAwLFxuLy8gICAgIFwiX1wiOiAxMDAwLFxuLy8gfTtcbmNvbnN0IHNsZWVwID0gYXN5bmMgbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5cblxuXG5cblxuXG5cblxuICAgLy8gYW5pbWF0aW9uczogW1xuICAgIC8vICAgICB0cmlnZ2VyKFwiZmx5SW5cIiwgW1xuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbihcIiogPT4gKlwiLFxuICAgIC8vICAgICAgICAgICAgIHF1ZXJ5KFwiOmVudGVyXCIsIFtcbiAgICAvLyAgICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDApXCIgfSksXG4gICAgLy8gICAgICAgICAgICAgICAgIHN0YWdnZXIoMTAwLCBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBhbmltYXRlKDMwMCwgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiIH0pKVxuICAgIC8vICAgICAgICAgICAgICAgICBdKVxuICAgIC8vICAgICAgICAgICAgIF0pLFxuICAgIC8vICAgICAgICAgKVxuICAgIC8vICAgICBdKSxcbiAgICAvLyAgICAgdHJpZ2dlcihcImp1bXBcIiwgW1xuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbihcImRvd24gPT4gdXBcIiwgW1xuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGUoMTAwLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0zMClcIiB9KSldLFxuICAgIC8vICAgICAgICAgKSxcbiAgICAvLyAgICAgICAgIHRyYW5zaXRpb24oXCJ1cCA9PiBkb3duXCIsIFtcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwKVwiIH0pKV0sXG4gICAgLy8gICAgICAgICApLFxuICAgIC8vICAgICBdKVxuICAgIC8vIF1cblxuXG5cblxuXG5cbiAgICAvLyB1cGRhdGUodmFsdWUpIHtcbiAgICAvLyAgICAgdGhpcy5tc2cgPSB2YWx1ZTtcbiAgICAvLyAgICAgdGhpcy5jb2RlID0gdGhpcy5tb3JzZS50cmFuc2xhdGUodmFsdWUpLnNwbGl0KFwiXCIpO1xuICAgIC8vIH1cblxuICAgIC8vIGFzeW5jIHNlbmRNZXNzYWdlKCkge1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpO1xuICAgIC8vICAgICAgICAgYXdhaXQgdGhpcy5wbGF5U2luZ2xlKHRoaXMuY29kZVtpXSk7XG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xuICAgIC8vICAgICAgICAgYXdhaXQgc2xlZXAoR0FQX1RJTUUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBwbGF5U2luZ2xlKHN5bWJvbDogc3RyaW5nKSB7XG4gICAgLy8gICAgIGNvbnN0IHRpbWUgPSBTWU1CT0xfVElNRV9NQVBbc3ltYm9sXTtcbiAgICAvLyAgICAgaWYgKHRpbWUpIHtcbiAgICAvLyAgICAgICAgIGF3YWl0IHRoaXMuc2hpbmUodGltZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIGFzeW5jIHNoaW5lKG1zOiBudW1iZXIpIHtcbiAgICAvLyAgICAgdGhpcy5mbGFzaC50dXJuT24oKTtcbiAgICAvLyAgICAgYXdhaXQgc2xlZXAobXMpO1xuICAgIC8vICAgICB0aGlzLmZsYXNoLnR1cm5PZmYoKTtcbiAgICAvLyB9XG4iXX0=