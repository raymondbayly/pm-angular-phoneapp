import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';


@Injectable({ providedIn: 'root' })
export class DeviceService {
    constructor(private device: Device) { }

    getDevice() {
      return this.device;
    }

    getUUID() {
        if (this.device.uuid === null) {
            return 'LOCAL11323';
        } else {
            return this.device.uuid;
        }
    }

    getCordovaVersion() {
        if (this.device.cordova === null) {
            return 'LOCALVERSION';
        } else {
            return this.device.cordova;
        }
    }

    IsVirtual() {
        if (this.device.isVirtual === null) {
            return 'LOCAL';
        } else {
            return this.device.isVirtual;
        }
    }

    getMFGR() {
        if (this.device.manufacturer === null) {
            return 'BROWSER';
        } else {
            return this.device.manufacturer;
        }
    }

    getModel() {
        if (this.device.model === null) {
            return 'BROWSER';
        } else {
            return this.device.model;
        }
    }

    getOS() {
        if (this.device.platform === null) {
            return 'BROWSER';
        } else {
            return this.device.platform;
        }
    }

    getOSVersion() {
        if (this.device.version === null) {
            return 'LOCAL';
        } else {
            return this.device.version;
        }
    }

    getSerialNumber() {
        if (this.device.serial === null) {
            return 'LOCAL';
        } else {
            return this.device.serial;
        }
    }

}
