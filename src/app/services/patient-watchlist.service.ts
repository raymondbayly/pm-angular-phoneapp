import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class PatientWatchListService {
    endPoint = 'http://ph-appsvr:10020/peramobile/api/secure/common/watchlist/visitIds/user';
    public patientWatchList: Observable<any>;
    private patientWatchListSubject: BehaviorSubject<any>;

    constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
        this.patientWatchListSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('watchList')));
        this.patientWatchList = this.patientWatchListSubject.asObservable();
     }

    public getCurrentWatchList(): any {
        return this.patientWatchListSubject.value;
    }

    public getWatchList(username: string) {
       return this.http
        .get(this.endPoint + '/' + username)
        .subscribe((res) => {
            console.log('WATCHLIST RESPONSE', res);
            localStorage.setItem('watchList', JSON.stringify(res));
            this.patientWatchListSubject.next(res);
        });
    }

}

