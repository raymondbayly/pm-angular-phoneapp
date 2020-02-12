import {Injectable} from '@angular/core';


/**
   * Global properties for the application
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
export class Globals {

    // Hard coded to work with our in house app server until we can get a file read in place
    private peraAuthServerAddress = '';
    private peraMobileServerAddress = '';

    constructor() {
        // The setting of the server addresses needs to happen in the constructor
        // The OnInit is too late.
        this.readConfigFile();
    }

    /** Address of the server. */
    public getPeraMobileServerAddress(): string {
        return this.peraMobileServerAddress;
    }

    public getPeraAuthServerAddress(): string {
        return this.peraAuthServerAddress;
    }

    private readConfigFile(): void {
        // TODO: read this info from a json file
        // QA
        this.peraAuthServerAddress = 'http://ph-appsvr.ph.com:10030/peraauth';
        this.peraMobileServerAddress = 'http://ph-appsvr.ph.com:10020/peramobile';

        // Dev
        // this.peraAuthServerAddress = 'http://ph-appsvr.ph.com:8000/peraauth';
        // this.peraMobileServerAddress = 'http://ph-appsvr.ph.com:9999/peramobile';

        // Developer Machine
        // this.peraAuthServerAddress = 'http://192.168.201.50:8000/peraauth';
        // this.peraMobileServerAddress = 'http://192.168.201.50:9999/peramobile';
    }
}
