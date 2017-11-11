"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var morse_service_1 = require("./morse.service");
var AnalyticsComponent = (function () {
    function AnalyticsComponent(route, service) {
        this.msg = route.snapshot.params["msg"];
        this.data = service.getBigData(this.msg);
    }
    AnalyticsComponent = __decorate([
        core_1.Component({
            selector: 'ns-analytics',
            templateUrl: "analytics.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, morse_service_1.MorseService])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQWlEO0FBQ2pELGlEQUF3RDtBQU94RDtJQUdJLDRCQUFZLEtBQXFCLEVBQUUsT0FBcUI7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFOUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7U0FFMUMsQ0FBQzt5Q0FJcUIsdUJBQWMsRUFBVyw0QkFBWTtPQUgvQyxrQkFBa0IsQ0FPOUI7SUFBRCx5QkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTW9yc2VTZXJ2aWNlLCBCaWdEYXRhIH0gZnJvbSAnLi9tb3JzZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hbmFseXRpY3MnLFxuICAgIHRlbXBsYXRlVXJsOiBcImFuYWx5dGljcy5jb21wb25lbnQuaHRtbFwiLFxuXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0NvbXBvbmVudCB7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgZGF0YTogQmlnRGF0YTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHNlcnZpY2U6IE1vcnNlU2VydmljZSkge1xuICAgICAgICB0aGlzLm1zZyA9IHJvdXRlLnNuYXBzaG90LnBhcmFtc1sgXCJtc2dcIiBdO1xuICAgICAgICB0aGlzLmRhdGEgPSBzZXJ2aWNlLmdldEJpZ0RhdGEodGhpcy5tc2cpO1xuICAgIH1cbn0iXX0=