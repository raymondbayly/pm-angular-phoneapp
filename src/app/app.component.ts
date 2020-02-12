import {Component, OnDestroy, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoginService} from 'ng-login-library';
import {Router} from '@angular/router';
import {TokenApiService, TranslationsApiService, TranslationsConfigService, TranslationsService, User} from 'ng-common-library';
import {first} from 'rxjs/operators';
import { Globals } from './properties';
import { DeviceService, DeviceTokenApiService, PatientWatchListService, AuthenticationService, WarningService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    private readonly loginSubscription: any;
    private readonly tokenSubscription: any;

    constructor(
        private globals: Globals,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private loginService: LoginService,
        private tokenApiService: TokenApiService,
        private router: Router,
        private translationsService: TranslationsService,
        private translationsConfigService: TranslationsConfigService,
        private translationsApiService: TranslationsApiService,
        private deviceService: DeviceService,
        private deviceTokenApiService: DeviceTokenApiService,
        private pwlService: PatientWatchListService,
        private warningService: WarningService,
        private authService: AuthenticationService) {

        this.initializeApp();

        translationsConfigService.setTranslationsEndPoint(globals.getPeraMobileServerAddress() + '/api/public/translations');
        translationsApiService.getAllTranslations().pipe(first()).subscribe((res) => {
            translationsService.translations = res;
        });

        // When the user presses the login button, and we get a successful login, redirect to the PeraMobile component
        // This will also be fired if the user has started the app and they still have a valid JWT in storage
        this.loginSubscription = loginService.login$.subscribe((user: User) => {
            if (!user) {
                router.navigateByUrl('/views/login');

            } else {
                // Set and Transmit the Device Token
                deviceTokenApiService.registerDeviceToken(deviceService.getUUID());
                this.pwlService.getWatchList(user.username);
                this.warningService.getWarningList(user.username);
                router.navigateByUrl('/tabs/patients');
            }
        });

        this.tokenSubscription = tokenApiService.token$.subscribe((token: string) => {
            if (!token) {
                this.loginService.logOut();
                router.navigateByUrl('/views/login');
            } else {
                this.authService.commitAuthToken(token);
            }
        });
    }

    initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnDestroy(): void {
        if (this.loginSubscription && !this.loginSubscription.closed) {
            this.loginSubscription.unsubscribe();
        }
        if (this.tokenSubscription && !this.tokenSubscription.closed) {
            this.tokenSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.loginService.checkLogin();
    }
}
