import { Component } from "@angular/core";
import { hasPermission, requestPermission } from "nativescript-permissions";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    intervalId;
    mRecorder: android.media.MediaRecorder;
    scale = 1;

    start() {
        const audioPermission = (<any>android).Manifest.permission.RECORD_AUDIO;
        if (hasPermission(audioPermission)) {
            this.record();
        } else { 
            requestPermission(audioPermission, "Can I use the mic ... pls?").then(() => {
                this.record()
            });
        }
    }

    record() {
        this.mRecorder = new android.media.MediaRecorder();
        this.mRecorder.setAudioSource(android.media.MediaRecorder.AudioSource.MIC);
        this.mRecorder.setOutputFormat(android.media.MediaRecorder.OutputFormat.THREE_GPP);
        this.mRecorder.setAudioEncoder(android.media.MediaRecorder.AudioEncoder.AMR_NB);
        this.mRecorder.setOutputFile("/dev/null");
        this.mRecorder.prepare();
        this.mRecorder.start();

        this.intervalId = setInterval(() => {
            let amplitude = this.mRecorder.getMaxAmplitude();
            this.scale = Math.max(1, Math.log10(amplitude));
            console.log("Value: " + this.scale);
        }, 20);
    }

    stop() {
        clearInterval(this.intervalId);
        this.mRecorder.stop();
    }
}
