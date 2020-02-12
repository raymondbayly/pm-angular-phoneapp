import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { User } from 'ng-common-library';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginConfigService, LoginIpService, LoginModule, LoginService} from 'ng-login-library';
import {IonicStorageModule, Storage} from '@ionic/storage';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import { Device } from '@ionic-native/device/ngx';

import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {TokenConfigService} from 'ng-common-library';
import {DeviceTokenConfigService, PatientWatchListService} from './services';


// Setting Providers
import { LoginGuard, UrlGuard } from './guards';

// App Loads
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Interceptors
import { XhrInterceptor, JwtInterceptor } from './interceptors';

// Properties
import { jwtOptionsFactory, Globals } from './properties';
import { Patient } from 'ng-common-library/lib/model/Patient';

/**
   * Application Module for the peramobile application
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
          deps: [Storage]
      }
  }),
    SharedModule],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    LoginModule,
    LoginGuard,
    Device,
    UrlGuard,
    User,
    LoginService,
    LoginIpService,
    PatientWatchListService,
    {
      // Intercept API calls and replace the header to avoid 401 errors
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },
    {
      // Intercept API calls and replace the header to avoid 401 errors
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(globals: Globals,
    loginService: LoginService,
    loginInIpService: LoginIpService,
    patientWatchListService: PatientWatchListService,
    loginConfigService: LoginConfigService,
    tokenConfigService: TokenConfigService,
    deviceTokenConfigService: DeviceTokenConfigService) {

      loginConfigService.setAppid('M'); // PeraMobile
      loginConfigService.setTitle('PeraMobile');
      loginConfigService.setLoginUrl('/views/login');
      loginConfigService.setLoginApiUrl(globals.getPeraAuthServerAddress() + '/api/public/login');
      loginConfigService.setLoginIpUrl(globals.getPeraMobileServerAddress() + '/api/public/getLoginIp');
      loginConfigService.setLogoutUrl(globals.getPeraAuthServerAddress() + '/api/public/logout');
      loginConfigService.setLogoSrc(globals.getPeraMobileServerAddress() + '/assets/images/ph-logo-lockup-yellow.png');

      // NOTE: PeraMobile does not refresh the token. The token is valid from the moment that it is created and
      //       for a configured amount of time before it expires and the user *must* login again.
      tokenConfigService.setGetTokenEndPoint(globals.getPeraAuthServerAddress() + '/api/public/getToken');
      tokenConfigService.setCheckTokenEndPoint(globals.getPeraAuthServerAddress() + '/api/secure/checkToken');

      deviceTokenConfigService.setRegisterDeviceTokenEndPoint(globals.getPeraAuthServerAddress() + '/api/secure/registerDeviceToken');
    }
}
