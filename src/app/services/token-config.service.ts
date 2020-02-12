import {Injectable} from '@angular/core';

/**
   * Configuration service for the token service
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */
@Injectable({
    providedIn: 'root'
})
export class DeviceTokenConfigService {
    private registerDeviceTokenEndPoint: string = null;

    public setRegisterDeviceTokenEndPoint(value: string): void {
        this.registerDeviceTokenEndPoint = value;
    }

    public getRegisterDeviceTokenEndPoint(): string {
        if (!this.registerDeviceTokenEndPoint) {
            console.warn('Register device token endpoint is not set!');
        }
        return this.registerDeviceTokenEndPoint;
    }
}
