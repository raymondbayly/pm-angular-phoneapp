(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./src/app/tabs/patients/patients.component.html":
/*!*******************************************************!*\
  !*** ./src/app/tabs/patients/patients.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"peraHealthBackground\">\n  <ion-toolbar class=\"peraHealthBackground\">\n      <div class=\"toolbar-top\">\n          <h1><ion-title class=\"peraHealthTabPageTitle\">{{title}}<span class=\"count\">\n              <ion-badge class=\"count-badge\">{{peraCount}}</ion-badge></span></ion-title></h1>\n          <ul class=\"header-navbar\">\n          <ion-buttons end>\n              <li>\n                  <ion-button id=\"search\"  (click)=\"this.switchSearch()\">\n                      <ion-icon name=\"search\">Search patient list</ion-icon>\n                  </ion-button>\n              </li>\n              <li>\n                  <ion-button id=\"filter\"  (click)=\"this.switchFilter()\">\n                      <ion-icon name=\"options\">Filter the list below</ion-icon>\n                  </ion-button>\n              </li>\n              <li>\n                  <ion-button id=\"user-settings\"  (click)=\"this.switchProfile()\">\n                      <ion-icon name=\"contact\">Adjust User Settings</ion-icon>\n                  </ion-button>\n              </li>\n          </ion-buttons>\n          </ul>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <span id=\"errorMessage\" *ngIf=\"errorMessage\"><h2>Could not get PeraGraphs!</h2><p>{{errorMessage}}</p></span>\n  <app-patient-profile-settings *ngIf=\"profileFlag\"></app-patient-profile-settings>\n  <app-patients-filter *ngIf=\"filterFlag\"></app-patients-filter>\n  <app-patients-search *ngIf=\"searchFlag\"></app-patients-search>\n  <app-visit-display-list *ngIf=\"listFlag\"></app-visit-display-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/patients/patients.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/tabs/patients/patients.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-top {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  max-height: 60px; }\n\n.header-navbar {\n  display: flex;\n  justify-content: space-between; }\n\n.header-navbar ion-button {\n    font-size: 19px;\n    --color:#A9B3BB;\n    --color-focused:#ffffff;\n    --color-activated:#ffffff; }\n\n.app-visit-display-list {\n  margin: 8px 0 0 8px;\n  padding: 0;\n  height: 125px;\n  width: 100%; }\n\n.count {\n  font-size: 26px;\n  padding-left: 20px; }\n\n.button-class {\n  vertical-align: middle; }\n\n.count-badge {\n  background-color: #446d89;\n  font-family: 'Helvetica Neue';\n  font-weight: regular;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixxQkFBb0I7RUFDcEIsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFZO0VBQ1osOEJBQTZCLEVBQUE7O0FBRi9CO0lBSUksZUFBYztJQUNkLGVBQVE7SUFDUix1QkFBZ0I7SUFDaEIseUJBQWtCLEVBQUE7O0FBS3RCO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRvcHtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIG1heC1oZWlnaHQ6NjBweDtcbn1cblxuLmhlYWRlci1uYXZiYXJ7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gaW9uLWJ1dHRvbntcbiAgICBmb250LXNpemU6MTlweDtcbiAgICAtLWNvbG9yOiNBOUIzQkI7XG4gICAgLS1jb2xvci1mb2N1c2VkOiNmZmZmZmY7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZmZmZmZjtcbiAgfVxuXG59XG5cbi5hcHAtdmlzaXQtZGlzcGxheS1saXN0IHtcbiAgbWFyZ2luOiA4cHggMCAwIDhweDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYnV0dG9uLWNsYXNzIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvdW50LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NmQ4OTtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/patients/patients.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/tabs/patients/patients.component.ts ***!
  \*****************************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPage", function() { return PatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_login_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-login-library */ "./node_modules/ng-login-library/fesm5/ng-login-library.js");
/* harmony import */ var ng_common_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-common-library */ "./node_modules/ng-common-library/fesm5/ng-common-library.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../properties */ "./src/app/properties/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var PatientsPage = /** @class */ (function () {
    function PatientsPage(globals, loginService, peragraphConfigService, peragraphApiService, flowsheetsConfigService, flowsheetsApiService, diagnosesConfigService, diagnosesApiService, platform) {
        this.globals = globals;
        this.loginService = loginService;
        this.peragraphConfigService = peragraphConfigService;
        this.peragraphApiService = peragraphApiService;
        this.flowsheetsConfigService = flowsheetsConfigService;
        this.flowsheetsApiService = flowsheetsApiService;
        this.diagnosesConfigService = diagnosesConfigService;
        this.diagnosesApiService = diagnosesApiService;
        this.platform = platform;
        this.title = 'Patients';
        this.searchFlag = false;
        this.listFlag = true;
        this.profileFlag = false;
        this.settingsFlag = false;
        this.filterFlag = false;
        this.peraCount = 0;
        peragraphConfigService.setAllPeraGraphsEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/current/facility/*/unit/*');
        flowsheetsConfigService.setLatestRiScoresEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/riScores');
        diagnosesConfigService.setPrimaryDiagnosesEndpoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/diagnoses');
    }
    PatientsPage.prototype.ionViewWillEnter = function () {
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, function () {
            // Ignored - prevents going back to the login screen
        });
    };
    PatientsPage.prototype.ionViewWillLeave = function () {
        this.backButtonSubscription.unsubscribe();
    };
    PatientsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Ensure that the session is still active
        this.loginService.checkLogin();
        // TODO: When implementing the Warnings and Watchlist pages, the "checkLogin()" call will
        //      need to be changed. Right now the constructor of app.component.ts subscribes to the
        //      loginSuccessfulEvent and redirects to this page when it is fired.
        //      This won't work for Warnings and Watchlist, obviously, so will need to be
        //      addressed when the first of those pages are implemented.
        // Update the PeraGraph subject from the server on an interval
        this.peraGraphSubscription = this.peragraphApiService.getPeraGraphInterval().pipe().subscribe(function (peraGraphs) {
            _this.peragraphApiService.getPeraGraphSubject().next(peraGraphs);
            _this.peraCount = peraGraphs.length;
        }, function (e) {
            console.log('Error encountered while querying peragraphs');
            _this.loginService.setCurrentUser(null);
            // An error here is almost always a token expired error
            // Check the login so they will either get redirected back
            // to the patients page or to the login page
            _this.loginService.checkLogin();
        });
        // Update the latest RI scores subject from the server on an interval
        this.riScoresSubscription = this.flowsheetsApiService.getLatestRiScoresInterval().pipe().subscribe(function (riScoresMap) {
            _this.flowsheetsApiService.getRiScoresSubject().next(riScoresMap.body);
        }, function (e) {
            console.log('Error encountered while querying RI Scores');
            _this.loginService.setCurrentUser(null);
            // An error here is almost always a token expired error
            // Check the login so they will either get redirected back
            // to the patients page or to the login page
            _this.loginService.checkLogin();
        });
        // Update the latest (First Primary) Diagnosis subject on an interval
        this.diagnosesSubscription = this.diagnosesApiService.getPrimaryDiagnosesInterval().pipe().subscribe(function (diagnoses) {
            _this.diagnosesApiService.getDiagnosesSubject().next(diagnoses.body);
        }, function (e) {
            console.log('Error encountered while querying diagnoses');
            _this.loginService.setCurrentUser(null);
            // An error here is almost always a token expired error
            // Check the login so they will either get redirected back
            // to the patients page or to the login page
            _this.loginService.checkLogin();
        });
        // Calling the watchlist call
    };
    PatientsPage.prototype.ngOnDestroy = function () {
        // Unsubscribe from the timers
        if (this.riScoresSubscription) {
            this.riScoresSubscription.unsubscribe();
        }
        if (this.peraGraphSubscription) {
            this.peraGraphSubscription.unsubscribe();
        }
        if (this.diagnosesSubscription) {
            this.diagnosesSubscription.unsubscribe();
        }
    };
    PatientsPage.prototype.switchSearch = function () {
        if (this.searchFlag === false) {
            this.searchFlag = true;
            this.listFlag = false;
        }
        else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    };
    PatientsPage.prototype.switchProfile = function () {
        if (this.profileFlag === false) {
            this.profileFlag = true;
            this.listFlag = false;
        }
        else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    };
    PatientsPage.prototype.switchSettings = function () {
        if (this.settingsFlag === false) {
            this.settingsFlag = true;
            this.listFlag = false;
        }
        else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    };
    PatientsPage.prototype.switchFilter = function () {
        if (this.filterFlag === false) {
            this.filterFlag = true;
            this.listFlag = false;
        }
        else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    };
    PatientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/tabs/patients/patients.component.html"),
            styles: [__webpack_require__(/*! ./patients.component.scss */ "./src/app/tabs/patients/patients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties__WEBPACK_IMPORTED_MODULE_4__["Globals"],
            ng_login_library__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["PeragraphConfigService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["PeragraphApiService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["FlowsheetsConfigService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["FlowsheetsApiService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["DiagnosisConfigService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_3__["DiagnosisApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], PatientsPage);
    return PatientsPage;
}());



/***/ }),

/***/ "./src/app/tabs/patients/patients.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/patients/patients.module.ts ***!
  \**************************************************/
/*! exports provided: PatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageModule", function() { return PatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patients.component */ "./src/app/tabs/patients/patients.component.ts");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/search/search.component */ "./src/app/tabs/patients/views/search/search.component.ts");
/* harmony import */ var _views_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/filter/filter.component */ "./src/app/tabs/patients/views/filter/filter.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/tabs/patients/views/profile/profile.component.ts");
/* harmony import */ var _views_visits_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/visits/list/list.component */ "./src/app/tabs/patients/views/visits/list/list.component.ts");
/* harmony import */ var _views_visits_list_item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/visits/list/item/item.component */ "./src/app/tabs/patients/views/visits/list/item/item.component.ts");
/* harmony import */ var _views_visits_list_item_info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/visits/list/item/info/info.component */ "./src/app/tabs/patients/views/visits/list/item/info/info.component.ts");
/* harmony import */ var _views_visits_list_item_warning_warning_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/visits/list/item/warning/warning.component */ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.ts");







// Toolbar pages



// List

// Details

// Info

// Warning

var PatientsPageModule = /** @class */ (function () {
    function PatientsPageModule() {
    }
    PatientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _patients_component__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"] }])
            ],
            declarations: [
                _patients_component__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"],
                _views_search_search_component__WEBPACK_IMPORTED_MODULE_7__["PatientsSearchPageComponent"],
                _views_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["PatientsFilterPageComponent"],
                _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["PatientProfileSettingsPageComponent"],
                _views_visits_list_list_component__WEBPACK_IMPORTED_MODULE_10__["PatientListPageComponent"],
                _views_visits_list_item_item_component__WEBPACK_IMPORTED_MODULE_11__["PatientItemComponent"],
                _views_visits_list_item_info_info_component__WEBPACK_IMPORTED_MODULE_12__["PatientItemInfoComponent"],
                _views_visits_list_item_warning_warning_component__WEBPACK_IMPORTED_MODULE_13__["PatientItemWarningComponent"]
            ]
        })
    ], PatientsPageModule);
    return PatientsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/filter/filter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tabs/patients/views/filter/filter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"container\">\n       FILTER\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/filter/filter.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/tabs/patients/views/filter/filter.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.container {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYXRpZW50cy92aWV3cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tabs/patients/views/filter/filter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tabs/patients/views/filter/filter.component.ts ***!
  \****************************************************************/
/*! exports provided: PatientsFilterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsFilterPageComponent", function() { return PatientsFilterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientsFilterPageComponent = /** @class */ (function () {
    function PatientsFilterPageComponent() {
    }
    PatientsFilterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/tabs/patients/views/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/tabs/patients/views/filter/filter.component.scss")]
        })
    ], PatientsFilterPageComponent);
    return PatientsFilterPageComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tabs/patients/views/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"container\">\n       PROFILE SETTINGS\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/profile/profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/tabs/patients/views/profile/profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcGF0aWVudHMvdmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tabs/patients/views/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tabs/patients/views/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: PatientProfileSettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileSettingsPageComponent", function() { return PatientProfileSettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientProfileSettingsPageComponent = /** @class */ (function () {
    function PatientProfileSettingsPageComponent() {
    }
    PatientProfileSettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-profile-settings',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/tabs/patients/views/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/tabs/patients/views/profile/profile.component.scss")]
        })
    ], PatientProfileSettingsPageComponent);
    return PatientProfileSettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/search/search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tabs/patients/views/search/search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"container\">\n       SEARCH\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/search/search.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/tabs/patients/views/search/search.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.container {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYXRpZW50cy92aWV3cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tabs/patients/views/search/search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tabs/patients/views/search/search.component.ts ***!
  \****************************************************************/
/*! exports provided: PatientsSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsSearchPageComponent", function() { return PatientsSearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientsSearchPageComponent = /** @class */ (function () {
    function PatientsSearchPageComponent() {
    }
    PatientsSearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/tabs/patients/views/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/tabs/patients/views/search/search.component.scss")]
        })
    ], PatientsSearchPageComponent);
    return PatientsSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/info/info.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/info/info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"patientName\" style=\"text-transform: capitalize;font-weight: regular\">\n    {{graph?.displayName.toLowerCase()}} <ion-icon name=\"eye\" class=\"patient-icon\" *ngIf=\"checkUserAgainstWatchList()\"></ion-icon>\n</div>\n<div class=\"dob\">{{patientService.getPatientAge(graph)}}rs</div>\n<div class=\"loc\">\n    {{graph?.unitId}} {{graph?.room}} {{graph?.bed}}\n</div>\n<div class=\"mrn\">\n</div>\n\n<div *ngIf=\"primDiag\"  class=\"diag\">\n    <span style=\"color: darkgray;\">Diagnosis: </span> {{ this.primDiag }}\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/info/info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/info/info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".truncateLongText, .loc, .mrn, .diag {\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.patientName {\n  font-family: 'Helvetica Neue';\n  padding-top: 2px;\n  font-size: 20px; }\n\n.patient-icon {\n  vertical-align: middle;\n  font-size: 22px;\n  color: #338fc2; }\n\n.dob {\n  color: black;\n  font-size: 12px; }\n\n.loc {\n  font-family: 'Helvetica Neue';\n  padding-top: 10px;\n  color: black;\n  font-weight: bold; }\n\n.diag {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: small;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3Zpc2l0cy9saXN0L2l0ZW0vaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsNkJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUVFLDZCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQVFuQjtFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcGF0aWVudHMvdmlld3MvdmlzaXRzL2xpc3QvaXRlbS9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1bmNhdGVMb25nVGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnBhdGllbnROYW1lIHtcbiAgZm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucGF0aWVudC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOjIycHg7XG4gIGNvbG9yOiMzMzhmYzI7XG59XG5cbi5kb2Ige1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvYyB7XG4gIEBleHRlbmQgLnRydW5jYXRlTG9uZ1RleHQ7XG4gIGZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubXJuIHtcbiAgQGV4dGVuZCAudHJ1bmNhdGVMb25nVGV4dDtcbiAgLy8gcGFkZGluZy10b3A6MjBweDtcbn1cblxuLmRpYWcge1xuICBAZXh0ZW5kIC50cnVuY2F0ZUxvbmdUZXh0O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/info/info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/info/info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientItemInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientItemInfoComponent", function() { return PatientItemInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-common-library */ "./node_modules/ng-common-library/fesm5/ng-common-library.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services */ "./src/app/services/index.ts");




var PatientItemInfoComponent = /** @class */ (function () {
    function PatientItemInfoComponent(patientService, diagnnosisService, ref, pwlService) {
        this.patientService = patientService;
        this.diagnnosisService = diagnnosisService;
        this.ref = ref;
        this.pwlService = pwlService;
    }
    PatientItemInfoComponent.prototype.ngOnInit = function () {
        this.getDiagnosisForVisit(this.diagnnosisService.getDiagnosesSubjectValue());
        this.userWatchList = this.pwlService.getCurrentWatchList();
    };
    PatientItemInfoComponent.prototype.ngOnChanges = function (changes) {
        this.getDiagnosisForVisit(this.diagnnosisService.getDiagnosesSubjectValue());
    };
    PatientItemInfoComponent.prototype.checkUserAgainstWatchList = function () {
        var retVal = false;
        if (this.userWatchList !== undefined && this.graph.visitId !== undefined) {
            var wl = this.userWatchList;
            var vi = this.graph.visitId;
            for (var key in wl) {
                if (wl.hasOwnProperty(key)) {
                    var keyval = parseInt(key);
                    if (keyval == vi) {
                        retVal = true;
                    }
                }
            }
        }
        return retVal;
    };
    PatientItemInfoComponent.prototype.getDiagnosisForVisit = function (diagnosesMap) {
        if (this.graph && diagnosesMap) {
            var diagnosis = diagnosesMap[this.graph.visitId];
            if (diagnosis && this.primDiag !== diagnosis) {
                this.primDiag = diagnosis;
                console.log('Updated primary diagnosis for visit ' + this.graph.visitId + ' to [' + this.primDiag + ']');
            }
            else if (!diagnosis && this.primDiag != null) {
                this.primDiag = null;
            }
        }
        else {
            this.primDiag = null;
        }
        this.ref.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientItemInfoComponent.prototype, "graph", void 0);
    PatientItemInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients-item-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/tabs/patients/views/visits/list/item/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/tabs/patients/views/visits/list/item/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_common_library__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_2__["DiagnosisApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services__WEBPACK_IMPORTED_MODULE_3__["PatientWatchListService"]])
    ], PatientItemInfoComponent);
    return PatientItemInfoComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"visitDisplay\">\n        <app-patients-item-warning [graph]=\"graph\" class=\"appWarningDisplay\"></app-patients-item-warning>\n    <app-patients-item-info [graph]=\"graph\" class=\"appVisitInfoDisplay\"></app-patients-item-info>\n    <span class=\"centerImage\"></span>\n    <img src=\"../../../../../../../assets/img/RightArrow.png\" alt=\"arrow\" height=20>\n</div>"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/item.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardTitle {\n  font-size: 1em;\n  text-transform: capitalize; }\n\n.appDisplay, .appVisitInfoDisplay, .appWarningDisplay {\n  float: left;\n  padding: 0;\n  margin: 0; }\n\n.appVisitInfoDisplay {\n  padding-left: 10px;\n  width: 65%; }\n\n.appWarningDisplay {\n  width: 29%; }\n\n.visitDisplay {\n  margin: 0px 0 0 0px;\n  padding: 0;\n  min-height: 105px;\n  height: 105px;\n  max-height: 105px;\n  width: 100%;\n  border-bottom: solid #D3D3D3;\n  border-bottom-width: thin; }\n\n.centerImage {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3Zpc2l0cy9saXN0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHWDtFQUVFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFFRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIseUJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcGF0aWVudHMvdmlld3MvdmlzaXRzL2xpc3QvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFwcERpc3BsYXkge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwVmlzaXRJbmZvRGlzcGxheSB7XG4gIEBleHRlbmQgLmFwcERpc3BsYXk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmFwcFdhcm5pbmdEaXNwbGF5IHtcbiAgQGV4dGVuZCAuYXBwRGlzcGxheTtcbiAgd2lkdGg6IDI5JTtcbn1cblxuLnZpc2l0RGlzcGxheSB7XG4gIG1hcmdpbjogMHB4IDAgMCAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwNXB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNEM0QzRDM7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6ICB0aGluO1xufVxuXG4uY2VudGVySW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/item.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientItemComponent", function() { return PatientItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientItemComponent = /** @class */ (function () {
    function PatientItemComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientItemComponent.prototype, "graph", void 0);
    PatientItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/tabs/patients/views/visits/list/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/tabs/patients/views/visits/list/item/item.component.scss")]
        })
    ], PatientItemComponent);
    return PatientItemComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/warning/warning.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"warning-container\" [ngClass]=\"getRiScoreClass(graph?.activeWarning?.category)\">\n    <div class=\"warning-text\">{{activeWarningCategory}}</div>\n    <div class=\"ri-score-text\">{{latestRiScore}}</div>\n    <div class=\"created-text\" *ngIf=\"(graph && graph.activeWarning)\">Created At:</div>\n    <div class=\"date-time-text\" *ngIf=\"(graph && graph.activeWarning)\">{{dateService.getDateFormat(this.graph.timeZone, this.graph.activeWarning.createdDate, 'MM/DD/YY')}} | {{dateService.getDateFormat(this.graph.timeZone, this.graph.activeWarning.createdDate, 'hh:mm a')}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/warning/warning.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warning-container, .vh-warning, .h-warning, .m-warning, .no-warning {\n  max-width: 200px;\n  min-width: 100px;\n  width: 150px;\n  min-height: 104px;\n  max-height: 104px;\n  height: 104px;\n  border-left-width: 10px;\n  border-left-style: solid;\n  text-align: center;\n  font-family: 'Helvetica Neue';\n  font-weight: regular;\n  text-align: center;\n  padding-bottom: 1px; }\n\n.warning-text {\n  font-size: 18px; }\n\n.ri-score-text {\n  font-size: 24px;\n  min-height: 40px;\n  height: 50%;\n  vertical-align: middle;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.created-text {\n  font-size: 12px;\n  text-align: center;\n  color: #dbdbd6; }\n\n.date-time-text {\n  font-size: 12px; }\n\n.vh-warning {\n  border-left-color: #DC1B06; }\n\n.h-warning {\n  border-left-color: #FE7D2F; }\n\n.m-warning {\n  border-left-color: #FECC2F; }\n\n.no-warning {\n  border-left-color: #328FC2; }\n\n.activeWarningCategory {\n  text-align: center;\n  font-size: small;\n  font-weight: bold;\n  color: black;\n  padding-bottom: 5px; }\n\n.dateCreated {\n  font-size: small;\n  text-align: center;\n  padding-top: 5px;\n  color: gray; }\n\n.activeWarningDate {\n  text-align: center;\n  font-size: small;\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3Zpc2l0cy9saXN0L2l0ZW0vd2FybmluZy93YXJuaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFjLEVBQUE7O0FBR2hCO0VBRUUsMEJBQTBCLEVBQUE7O0FBRzVCO0VBRUUsMEJBQTBCLEVBQUE7O0FBRzVCO0VBRUUsMEJBQTBCLEVBQUE7O0FBRzVCO0VBRUUsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYXRpZW50cy92aWV3cy92aXNpdHMvbGlzdC9pdGVtL3dhcm5pbmcvd2FybmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLWNvbnRhaW5lcntcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtaW4taGVpZ2h0OiAxMDRweDtcbiAgbWF4LWhlaWdodDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxMHB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi53YXJuaW5nLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yaS1zY29yZS10ZXh0e1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG59XG5cbi5jcmVhdGVkLXRleHR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjojZGJkYmQ2O1xufVxuXG4uZGF0ZS10aW1lLXRleHQge1xuICBmb250LXNpemU6MTJweDtcbn1cblxuLnZoLXdhcm5pbmcge1xuICBAZXh0ZW5kIC53YXJuaW5nLWNvbnRhaW5lcjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNEQzFCMDY7XG59XG5cbi5oLXdhcm5pbmcge1xuICBAZXh0ZW5kIC53YXJuaW5nLWNvbnRhaW5lcjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRTdEMkY7XG59XG5cbi5tLXdhcm5pbmcge1xuICBAZXh0ZW5kIC53YXJuaW5nLWNvbnRhaW5lcjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRUNDMkY7XG59XG5cbi5uby13YXJuaW5nIHtcbiAgQGV4dGVuZCAud2FybmluZy1jb250YWluZXI7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzI4RkMyO1xufVxuXG4uYWN0aXZlV2FybmluZ0NhdGVnb3J5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZGF0ZUNyZWF0ZWQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYWN0aXZlV2FybmluZ0RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/item/warning/warning.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PatientItemWarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientItemWarningComponent", function() { return PatientItemWarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-common-library */ "./node_modules/ng-common-library/fesm5/ng-common-library.js");



var PatientItemWarningComponent = /** @class */ (function () {
    function PatientItemWarningComponent(dateService, warningService, flowSheetApiService, translationsService, ref) {
        this.dateService = dateService;
        this.warningService = warningService;
        this.flowSheetApiService = flowSheetApiService;
        this.translationsService = translationsService;
        this.ref = ref;
    }
    /**
     * Returns the CSS class to be used for the RI score background
     * @param warning: The current warning state in which the patient is
     */
    PatientItemWarningComponent.prototype.getRiScoreClass = function (warning) {
        var warningClass = this.warningService.getWarningClass(warning);
        return (warningClass) ? warningClass : 'no-warning';
    };
    PatientItemWarningComponent.prototype.ngOnInit = function () {
        this.updateRiScore(this.flowSheetApiService.getRiScoresSubjectValue());
    };
    PatientItemWarningComponent.prototype.ngOnChanges = function (changes) {
        if (this.graph) {
            if (this.graph.activeWarning) {
                this.activeWarningCategory = this.getWarningTranslation(this.graph.activeWarning.category);
            }
            else {
                this.activeWarningCategory = 'No Warning';
            }
            this.updateRiScore(this.flowSheetApiService.getRiScoresSubjectValue());
            this.ref.detectChanges();
        }
    };
    /**
     * Translates to the warning text from the warning abbrev
     */
    PatientItemWarningComponent.prototype.getWarningTranslation = function (key) {
        return this.translationsService.getKeyTranslation(key);
    };
    PatientItemWarningComponent.prototype.updateRiScore = function (riScoresMap) {
        this.latestRiScore = '--';
        if (riScoresMap) {
            var riScore = riScoresMap[this.graph.visitId];
            // Update the RI-related fields if necessary
            if (riScore && this.latestRiScore !== riScore) {
                this.latestRiScore = riScore;
                console.log('Updated RI Score for ' +
                    this.graph.displayName + ' in fac/unit ' +
                    this.graph.facilityId + '/' +
                    this.graph.unitId + ' to ' +
                    this.latestRiScore);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientItemWarningComponent.prototype, "graph", void 0);
    PatientItemWarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients-item-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.scss */ "./src/app/tabs/patients/views/visits/list/item/warning/warning.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_common_library__WEBPACK_IMPORTED_MODULE_2__["DateService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_2__["WarningService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_2__["FlowsheetsApiService"],
            ng_common_library__WEBPACK_IMPORTED_MODULE_2__["TranslationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PatientItemWarningComponent);
    return PatientItemWarningComponent;
}());



/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-virtual-scroll [items]=\"peraGraphs\" >\n    <div *virtualItem=\"let graph\" class=\"visitInfoDisplay\">\n        <app-patients-item [graph]=\"graph\"></app-patients-item>\n    </div>\n</ion-virtual-scroll>\n"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 10px 10px 10px 20px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL2FwcC90YWJzL3BhdGllbnRzL3ZpZXdzL3Zpc2l0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYXRpZW50cy92aWV3cy92aXNpdHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/patients/views/visits/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tabs/patients/views/visits/list/list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPageComponent", function() { return PatientListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-common-library */ "./node_modules/ng-common-library/fesm5/ng-common-library.js");



var PatientListPageComponent = /** @class */ (function () {
    function PatientListPageComponent(peragraphApiService) {
        this.peragraphApiService = peragraphApiService;
    }
    PatientListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: Implement map and tap to support filters in MOBILE-178 and MOBILE-201
        // Subscribe to the BehaviorSubject to receive graph updates on an interval
        this.graphSubscription = this.peragraphApiService.getPeraGraphSubject().pipe().subscribe(function (graphs) {
            if (graphs && graphs.length > 0) {
                if (_this.peraGraphs && _this.peraGraphs.length > 0) {
                    // console.log('Updating graphs');
                    _this.addOrUpdateGraphs(graphs);
                    _this.removeDischargedGraphs(graphs);
                }
                else {
                    _this.peraGraphs = graphs;
                    // console.log('Got initial graphs. Size = ' + this.peraGraphs.length);
                }
            }
        });
    };
    PatientListPageComponent.prototype.addOrUpdateGraphs = function (graphs) {
        for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
            var graph = graphs_1[_i];
            var found = false;
            for (var _a = 0, _b = this.peraGraphs; _a < _b.length; _a++) {
                var curGraph = _b[_a];
                if (curGraph.visitId === graph.visitId) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // console.log('Adding new graph [' + JSON.stringify(graph) + ']');
                // Add the graph to the current list
                this.peraGraphs.push(graph);
            }
        }
    };
    PatientListPageComponent.prototype.removeDischargedGraphs = function (graphs) {
        var i = this.peraGraphs.length;
        while (i--) {
            var found = false;
            for (var _i = 0, graphs_2 = graphs; _i < graphs_2.length; _i++) {
                var graph = graphs_2[_i];
                if (this.peraGraphs[i].visitId === graph.visitId) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // console.log('Removing old graph [' + JSON.stringify(this.peraGraphs[i]) + "]");
                this.peraGraphs.splice(i, 1);
            }
        }
    };
    PatientListPageComponent.prototype.ngOnDestroy = function () {
        if (this.graphSubscription) {
            this.graphSubscription.unsubscribe();
        }
    };
    PatientListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visit-display-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/tabs/patients/views/visits/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/tabs/patients/views/visits/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_common_library__WEBPACK_IMPORTED_MODULE_2__["PeragraphApiService"]])
    ], PatientListPageComponent);
    return PatientListPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map