import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const tokenValue = this.authenticationService.authToken;
        if (tokenValue) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${tokenValue}`
                }
            });
        }

        return next.handle(request);
    }
}