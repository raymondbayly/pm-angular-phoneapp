import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from 'ng-login-library';
import {
    DiagnosisApiService,
    DiagnosisConfigService,
    FlowsheetsApiService,
    FlowsheetsConfigService,
    PeragraphApiService,
    PeragraphConfigService
} from 'ng-common-library';
import {FilterQueryConfigService} from 'ng-filters-library';
import {Globals} from '../../properties';
import {Subscription} from 'rxjs';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-patients',
    templateUrl: 'patients.component.html',
    styleUrls: ['patients.component.scss']
})
export class PatientsPage implements OnInit, OnDestroy {

    private peraGraphSubscription;
    private riScoresSubscription;
    private diagnosesSubscription;
    public title = 'Patients';
    public errorMessage: string;
    private patientWatchListSubscription;
    public searchFlag = false;
    public listFlag = true;
    public profileFlag = false;
    public settingsFlag = false;
    public filterFlag = false;
    public peraCount = 0;

    constructor(
        private globals: Globals,
        private loginService: LoginService,
        private peragraphConfigService: PeragraphConfigService,
        private peragraphApiService: PeragraphApiService,
        private flowsheetsConfigService: FlowsheetsConfigService,
        private flowsheetsApiService: FlowsheetsApiService,
        private diagnosesConfigService: DiagnosisConfigService,
        private diagnosesApiService: DiagnosisApiService,
        private filterQueryConfigService: FilterQueryConfigService,
        public platform: Platform
    ) {
        peragraphConfigService.setAllPeraGraphsEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/current/facility/*/unit/*');
        flowsheetsConfigService.setLatestRiScoresEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/riScores');
        diagnosesConfigService.setPrimaryDiagnosesEndpoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/diagnoses');
        peragraphConfigService.setAllPeraGraphsEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/PeraGraph/current/facility/*/unit/*');
        flowsheetsConfigService.setAllPeragraphFlowSheetsEndPoint(globals.getPeraMobileServerAddress() +
            '/api/secure/common/FlowSheets/current/facility/*/unit/*');
        filterQueryConfigService.setFilterQueryEndPoint(globals.getPeraMobileServerAddress() +
        '/api/secure/common/FlowSheets/current/facility/*/unit/*');
    }

    private backButtonSubscription: Subscription;

    ionViewWillEnter() {
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            // Ignored - prevents going back to the login screen
        });
    }

    ionViewWillLeave() {
        this.backButtonSubscription.unsubscribe();
    }

    ngOnInit(): void {
        // Ensure that the session is still active
        this.loginService.checkLogin();

        // TODO: When implementing the Warnings and Watchlist pages, the "checkLogin()" call will
        //      need to be changed. Right now the constructor of app.component.ts subscribes to the
        //      loginSuccessfulEvent and redirects to this page when it is fired.
        //      This won't work for Warnings and Watchlist, obviously, so will need to be
        //      addressed when the first of those pages are implemented.

        // Update the PeraGraph subject from the server on an interval
        this.peraGraphSubscription = this.peragraphApiService.getPeraGraphInterval().pipe().subscribe(
            (peraGraphs) => {
                this.peragraphApiService.getPeraGraphSubject().next(peraGraphs);
                this.peraCount = peraGraphs.length;
            },
            (e) => {
                console.log('Error encountered while querying peragraphs');
                this.loginService.setCurrentUser(null);
                // An error here is almost always a token expired error
                // Check the login so they will either get redirected back
                // to the patients page or to the login page
                this.loginService.checkLogin();
            });

        // Update the latest RI scores subject from the server on an interval
        this.riScoresSubscription = this.flowsheetsApiService.getLatestRiScoresInterval().pipe().subscribe(
            (riScoresMap) => {
                this.flowsheetsApiService.getRiScoresSubject().next(riScoresMap.body);
            }, (e) => {
                console.log('Error encountered while querying RI Scores');
                this.loginService.setCurrentUser(null);
                // An error here is almost always a token expired error
                // Check the login so they will either get redirected back
                // to the patients page or to the login page
                this.loginService.checkLogin();
            });

        // Update the latest (First Primary) Diagnosis subject on an interval
        this.diagnosesSubscription = this.diagnosesApiService.getPrimaryDiagnosesInterval().pipe().subscribe(
            (diagnoses) => {
                this.diagnosesApiService.getDiagnosesSubject().next(diagnoses.body);
            }, (e) => {
                console.log('Error encountered while querying diagnoses');
                this.loginService.setCurrentUser(null);
                // An error here is almost always a token expired error
                // Check the login so they will either get redirected back
                // to the patients page or to the login page
                this.loginService.checkLogin();
            }
        );

    }

    ngOnDestroy(): void {
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
    }

    switchSearch() {
        if (this.searchFlag === false) {
            this.searchFlag = true;
            this.listFlag = false;
        } else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    }

    switchProfile() {
        if (this.profileFlag === false) {
            this.profileFlag = true;
            this.listFlag = false;
        } else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    }

    switchSettings() {
        if (this.settingsFlag === false) {
            this.settingsFlag = true;
            this.listFlag = false;
        } else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    }

    switchFilter() {
        if (this.filterFlag === false) {
            this.filterFlag = true;
            this.listFlag = false;
        } else {
            this.searchFlag = false;
            this.profileFlag = false;
            this.settingsFlag = false;
            this.filterFlag = false;
            this.listFlag = true;
        }
    }
}

