import { Globals } from './global.properties';
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
export class EndPointRegistery {
    // warning registrations
    private warningReadEndPoint = '';
    private warningMarkAllReadEndPoint = '';
    private warningListEndPoint = '';
    // watchlist registrations
    private watchlistList = '';

    constructor(private globals: Globals) {
        this.initRegistry();
    }

    /** Registered Endpoints. */
    public getWarningReadEndPoint(user: String): string {
        return this.warningReadEndPoint + '/' + user;
    }

    public getWarningMarkAllReadEndPoint(): string {
        return this.warningMarkAllReadEndPoint;
    }

    public getWarningListEndPoint(user: String): string {
        return this.warningListEndPoint + '/' + user;
    }

    public getWatchListEndPoint(): string {
        return this.watchlistList;
    }


    private initRegistry(): void {
        // gets global server address
        const serverURL = this.globals.getPeraMobileServerAddress();

        // Warning Registries
        this.warningReadEndPoint =  serverURL + '/api/secure/common/notifications/warning/updateStatus';
        this.warningMarkAllReadEndPoint = serverURL + '/api/secure/common/notifications/warnings/updateStatus';
        this.warningListEndPoint = serverURL + '/api/secure/common/notifications/warnings';
        // WatchList Registries
        this.watchlistList = serverURL + '/api/secure/common/watchlist/visitIds/user';
    }
}