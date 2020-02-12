import { PeraGraph } from 'ng-common-library';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndPointRegistery } from '../properties';
import { AuthenticationService } from './authentication.service';


/**
   * User Service for logging in and grabbing user day in conjuction with user model
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */

@Injectable({ providedIn: 'root' })
export class WarningService {
    public warningList: Observable<any>;
    private warningListSubject: BehaviorSubject<any>;
    public warningUpdate$ = new Subject();

    constructor(private endPointRegistry: EndPointRegistery, private http: HttpClient, private authService: AuthenticationService) {
        this.warningListSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('warningList')));
        this.warningList = this.warningListSubject.asObservable();
     }

     public getCurrentWarningList(): any {
        return this.warningListSubject.value;
    }

    public getWarningList(username: string) {
        const endPoint = this.endPointRegistry.getWarningListEndPoint(username);
        return this.http
         .get(endPoint)
         .subscribe((res) => {
             console.log('WARNINGLIST RESPONSE', res);
             localStorage.setItem('warningList', JSON.stringify(res));
             this.warningListSubject.next(res);
             this.warningUpdate$.next(true);
         });
     }

    public dismissWarning(patient: PeraGraph) {
        const user = this.authService.currentUserValue;
        console.log(patient);
        let username = 'pmadmin';
        if ( user != null ) {
            username = user.username;
        }
        console.log(username);
        const endPoint = this.endPointRegistry.getWarningReadEndPoint(username);
        return this.http.post<any>(endPoint , { patient })
        .subscribe((res) => {
        console.log('WARNING READ RESPONSE', res);
        return res;
        });
    }

}