import { Injectable } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import * as app from "tns-core-modules/application";

@Injectable()
export class FlashlightService {

    turnOn() {
        this.flash(true);
    }

    turnOff() {
        this.flash(false);
    }

    flash(onOrOff) {
        if (isAndroid) {
            const context = app.android.context;
            const cameraService = context.getSystemService(android.content.Context.CAMERA_SERVICE);
            if (cameraService) {
                const cameras = cameraService.getCameraIdList();
                cameraService.setTorchMode(cameras[0], onOrOff);
            }
        } else {
            const device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
            if (!device) {
                console.log("Device does not support flashlight");
                return;
            }

            device.lockForConfiguration(null);
            if (onOrOff) {
                device.setTorchModeOnWithLevelError(AVCaptureMaxAvailableTorchLevel, null);
                device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOn;
            } else {
                device.torchMode = AVCaptureTorchMode.AVCaptureTorchModeOff;
                device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOff;
            }
            device.unlockForConfiguration();
        }
    }
}
