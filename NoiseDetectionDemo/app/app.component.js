"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_permissions_1 = require("nativescript-permissions");
var AppComponent = (function () {
    function AppComponent() {
        this.scale = 1;
    }
    AppComponent.prototype.start = function () {
        var _this = this;
        var audioPermission = android.Manifest.permission.RECORD_AUDIO;
        if (nativescript_permissions_1.hasPermission(audioPermission)) {
            this.record();
        }
        else {
            nativescript_permissions_1.requestPermission(audioPermission, "Can I use the mic ... pls?").then(function () {
                _this.record();
            });
        }
    };
    AppComponent.prototype.record = function () {
        var _this = this;
        this.mRecorder = new android.media.MediaRecorder();
        this.mRecorder.setAudioSource(android.media.MediaRecorder.AudioSource.MIC);
        this.mRecorder.setOutputFormat(android.media.MediaRecorder.OutputFormat.THREE_GPP);
        this.mRecorder.setAudioEncoder(android.media.MediaRecorder.AudioEncoder.AMR_NB);
        this.mRecorder.setOutputFile("/dev/null");
        this.mRecorder.prepare();
        this.mRecorder.start();
        this.intervalId = setInterval(function () {
            var amplitude = _this.mRecorder.getMaxAmplitude();
            _this.scale = Math.max(1, Math.log10(amplitude));
            console.log("Value: " + _this.scale);
        }, 20);
    };
    AppComponent.prototype.stop = function () {
        clearInterval(this.intervalId);
        this.mRecorder.stop();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMscUVBQTRFO0FBTzVFO0lBTEE7UUFRSSxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBaUNkLENBQUM7SUEvQkcsNEJBQUssR0FBTDtRQUFBLGlCQVNDO1FBUkcsSUFBTSxlQUFlLEdBQVMsT0FBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLHdDQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSiw0Q0FBaUIsQ0FBQyxlQUFlLEVBQUUsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xFLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzFCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFuQ1EsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQztPQUNXLFlBQVksQ0FvQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBoYXNQZXJtaXNzaW9uLCByZXF1ZXN0UGVybWlzc2lvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGludGVydmFsSWQ7XG4gICAgbVJlY29yZGVyOiBhbmRyb2lkLm1lZGlhLk1lZGlhUmVjb3JkZXI7XG4gICAgc2NhbGUgPSAxO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvUGVybWlzc2lvbiA9ICg8YW55PmFuZHJvaWQpLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVDT1JEX0FVRElPO1xuICAgICAgICBpZiAoaGFzUGVybWlzc2lvbihhdWRpb1Blcm1pc3Npb24pKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgIHJlcXVlc3RQZXJtaXNzaW9uKGF1ZGlvUGVybWlzc2lvbiwgXCJDYW4gSSB1c2UgdGhlIG1pYyAuLi4gcGxzP1wiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZCgpIHtcbiAgICAgICAgdGhpcy5tUmVjb3JkZXIgPSBuZXcgYW5kcm9pZC5tZWRpYS5NZWRpYVJlY29yZGVyKCk7XG4gICAgICAgIHRoaXMubVJlY29yZGVyLnNldEF1ZGlvU291cmNlKGFuZHJvaWQubWVkaWEuTWVkaWFSZWNvcmRlci5BdWRpb1NvdXJjZS5NSUMpO1xuICAgICAgICB0aGlzLm1SZWNvcmRlci5zZXRPdXRwdXRGb3JtYXQoYW5kcm9pZC5tZWRpYS5NZWRpYVJlY29yZGVyLk91dHB1dEZvcm1hdC5USFJFRV9HUFApO1xuICAgICAgICB0aGlzLm1SZWNvcmRlci5zZXRBdWRpb0VuY29kZXIoYW5kcm9pZC5tZWRpYS5NZWRpYVJlY29yZGVyLkF1ZGlvRW5jb2Rlci5BTVJfTkIpO1xuICAgICAgICB0aGlzLm1SZWNvcmRlci5zZXRPdXRwdXRGaWxlKFwiL2Rldi9udWxsXCIpO1xuICAgICAgICB0aGlzLm1SZWNvcmRlci5wcmVwYXJlKCk7XG4gICAgICAgIHRoaXMubVJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFtcGxpdHVkZSA9IHRoaXMubVJlY29yZGVyLmdldE1heEFtcGxpdHVkZSgpO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubG9nMTAoYW1wbGl0dWRlKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZhbHVlOiBcIiArIHRoaXMuc2NhbGUpO1xuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB0aGlzLm1SZWNvcmRlci5zdG9wKCk7XG4gICAgfVxufVxuIl19