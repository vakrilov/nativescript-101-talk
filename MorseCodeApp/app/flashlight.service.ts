import { Injectable } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import * as app from "tns-core-modules/application";

declare var android: any;
declare var AVCaptureDevice: any;
declare var AVMediaTypeVideo: any;
declare var AVCaptureFlashMode: any;
declare var AVCaptureMaxAvailableTorchLevel: any;
declare var AVCaptureTorchMode: any;

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
            const cameraService = context.getSystemService(android.content.Context.CAMERA_SERVICE)
            const cameras = cameraService.getCameraIdList();
            cameraService.setTorchMode(cameras[ 0 ], onOrOff);
        } else {
            const device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
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
