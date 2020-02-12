import { Globals } from './global.properties';
import {Injectable} from '@angular/core';


/**
   * Global properties for the application
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */

@Injectable({
    providedIn: 'root'
})
export class MockData {
    private warningMockData = [];

    constructor(private globals: Globals) {
        this.initRegistry();
    }

    /** Registered Endpoints. */
    public getMockWarningData(): Array<any> {
        return this.warningMockData;
    }

    private initRegistry(): void {
        this.warningMockData = [
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            },
            {
                bed: '10A',
                category: 'V',
                createdDT: 1556198260438,
                effectiveDT: 1556194200000,
                endDT: 1556280600000,
                facility: 'WCH',
                id: 15353,
                isDismissed: false,
                isRead: false,
                patientFirstName: 'JOHN',
                patientID: 24620,
                patientIdentifier: '042501',
                patientLastName: 'CARTER',
                patientMiddleName: 'J',
                riScore: -39,
                status: 'ACTIVE',
                timeZone: 'America/New_York',
                unit: '777SOUTH',
                userID: null,
                visitID: 24968,
                warningReadID: null
            }
        ]
    }
}