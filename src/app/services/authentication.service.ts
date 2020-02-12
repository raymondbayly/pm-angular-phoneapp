import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models';

/**
   * Authentication service for logging into the application
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
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private authTokenSubject: BehaviorSubject<string>;
    public authTokenValue: Observable<string>;
    config: any;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.authTokenSubject = new BehaviorSubject<string>(localStorage.getItem('authToken'));
        this.authTokenValue = this.authTokenSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get authToken(): string {
        return this.authTokenSubject.value;
    }

    public commitAuthToken(token: string): void {
        localStorage.setItem('authToken', token);
        this.authTokenSubject.next(token);
    }

    public commitCurrentUser(user: any){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.config.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
