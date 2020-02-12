import {Injectable} from '@angular/core';
import {DeviceTokenConfigService} from './token-config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first} from 'rxjs/operators';

/**
   * A Token API Service for Logging into the application
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
export class DeviceTokenApiService {

    constructor(private http: HttpClient,
                private config: DeviceTokenConfigService) {
    }

    public registerDeviceToken(deviceToken: string): void {

        const headers = new HttpHeaders({'Content-Type': 'text/plain'});

        this.http.post(this.config.getRegisterDeviceTokenEndPoint(), deviceToken, {
            headers,
            responseType: 'text'
        }).pipe(first()).subscribe((token: string) => {
            console.log('Token registered Token = [' + token + ']');
        }, (e) => {
            console.warn('Token could not be registered Error = [' + e.message + ']');
        });
    }
}
