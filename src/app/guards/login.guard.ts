import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from 'ng-login-library';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {
    }

    // Navigation is allowed if the user has already logged in.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*
            This is important for when the user clicks the Refresh button
            of the browser. Redirect to main component if the user is already
            logged in.

            This will trigger either loginSuccessfulEvent or tokenInvalidEvent.
            AppComponent listens to these and directs the app accordingly.
         */
        this.loginService.checkLogin();
        return true;
    }
}
