"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var app = require("tns-core-modules/application");
var FlashlightService = (function () {
    function FlashlightService() {
    }
    FlashlightService.prototype.turnOn = function () {
        this.flash(true);
    };
    FlashlightService.prototype.turnOff = function () {
        this.flash(false);
    };
    FlashlightService.prototype.flash = function (onOrOff) {
        if (platform_1.isAndroid) {
            var context = app.android.context;
            var cameraService = context.getSystemService(android.content.Context.CAMERA_SERVICE);
            if (cameraService) {
                var cameras = cameraService.getCameraIdList();
                cameraService.setTorchMode(cameras[0], onOrOff);
            }
        }
        else {
            var device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
            if (!device) {
                console.log("Device does not support flashlight");
                return;
            }
            device.lockForConfiguration(null);
            if (onOrOff) {
                device.setTorchModeOnWithLevelError(AVCaptureMaxAvailableTorchLevel, null);
                device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOn;
            }
            else {
                device.torchMode = AVCaptureTorchMode.AVCaptureTorchModeOff;
                device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOff;
            }
            device.unlockForConfiguration();
        }
    };
    FlashlightService = __decorate([
        core_1.Injectable()
    ], FlashlightService);
    return FlashlightService;
}());
exports.FlashlightService = FlashlightService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2hsaWdodC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxhc2hsaWdodC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNEQUFzRDtBQUN0RCxrREFBb0Q7QUFHcEQ7SUFBQTtJQW9DQSxDQUFDO0lBbENHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLE9BQU87UUFDVCxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ2hELGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1RSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLDRCQUE0QixDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRSxNQUFNLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDO1lBQy9ELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDO2dCQUM1RCxNQUFNLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQW5DUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTtPQUNBLGlCQUFpQixDQW9DN0I7SUFBRCx3QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsYXNobGlnaHRTZXJ2aWNlIHtcblxuICAgIHR1cm5PbigpIHtcbiAgICAgICAgdGhpcy5mbGFzaCh0cnVlKTtcbiAgICB9XG5cbiAgICB0dXJuT2ZmKCkge1xuICAgICAgICB0aGlzLmZsYXNoKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmbGFzaChvbk9yT2ZmKSB7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBhcHAuYW5kcm9pZC5jb250ZXh0O1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhU2VydmljZSA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5DQU1FUkFfU0VSVklDRSk7XG4gICAgICAgICAgICBpZiAoY2FtZXJhU2VydmljZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbWVyYXMgPSBjYW1lcmFTZXJ2aWNlLmdldENhbWVyYUlkTGlzdCgpO1xuICAgICAgICAgICAgICAgIGNhbWVyYVNlcnZpY2Uuc2V0VG9yY2hNb2RlKGNhbWVyYXNbMF0sIG9uT3JPZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlID0gQVZDYXB0dXJlRGV2aWNlLmRlZmF1bHREZXZpY2VXaXRoTWVkaWFUeXBlKEFWTWVkaWFUeXBlVmlkZW8pO1xuICAgICAgICAgICAgaWYgKCFkZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSBkb2VzIG5vdCBzdXBwb3J0IGZsYXNobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZXZpY2UubG9ja0ZvckNvbmZpZ3VyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBpZiAob25Pck9mZikge1xuICAgICAgICAgICAgICAgIGRldmljZS5zZXRUb3JjaE1vZGVPbldpdGhMZXZlbEVycm9yKEFWQ2FwdHVyZU1heEF2YWlsYWJsZVRvcmNoTGV2ZWwsIG51bGwpO1xuICAgICAgICAgICAgICAgIGRldmljZS5mbGFzaE1vZGUgPSBBVkNhcHR1cmVGbGFzaE1vZGUuQVZDYXB0dXJlRmxhc2hNb2RlT247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRldmljZS50b3JjaE1vZGUgPSBBVkNhcHR1cmVUb3JjaE1vZGUuQVZDYXB0dXJlVG9yY2hNb2RlT2ZmO1xuICAgICAgICAgICAgICAgIGRldmljZS5mbGFzaE1vZGUgPSBBVkNhcHR1cmVGbGFzaE1vZGUuQVZDYXB0dXJlRmxhc2hNb2RlT2ZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGV2aWNlLnVubG9ja0ZvckNvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==