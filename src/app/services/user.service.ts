import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

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
export class UserService {
    config: any;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.config.apiUrl}/users/${id}`);
    }
}
