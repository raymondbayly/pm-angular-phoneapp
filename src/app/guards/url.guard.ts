import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from 'ng-login-library';
import { ConditionalExpr } from '@angular/compiler';

@Injectable()
export class UrlGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {
    }

    // Navigation is allowed if the user has already logged in.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.getCurrentUser()) {
            // If the currentUser item exists, then they can move forward
            return true;
        }
        /*
         * This is not a bad security model because lots of REST api calls are made after
         * the user logs in. If they return 401, the currentUser item is nullified and
         * the browser is redirected to the login page.
         */
        this.router.navigateByUrl(this.loginService.getLoginUrl());
        return false;
    }
}
