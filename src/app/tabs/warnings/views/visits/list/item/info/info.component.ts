import {Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import {DiagnosisApiService, PatientService, PeraGraph} from 'ng-common-library';
import { PatientWatchListService } from '../../../../../../../services';

@Component({
  selector: 'app-warnings-item-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class WarningItemInfoComponent implements OnInit, OnChanges {
  @Input()
  patient: any;

    public primDiag: string;
    public userWatchList;

    constructor(public patientService: PatientService,
                public diagnnosisService: DiagnosisApiService,
                private ref: ChangeDetectorRef,
                private pwlService: PatientWatchListService) {
    }

    ngOnInit(): void {
        this.getDiagnosisForVisit(this.diagnnosisService.getDiagnosesSubjectValue());
        this.userWatchList = this.pwlService.getCurrentWatchList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getDiagnosisForVisit(this.diagnnosisService.getDiagnosesSubjectValue());
    }

    private checkUserAgainstWatchList(): boolean {
        let retVal = false;

        if ( this.userWatchList !== undefined && this.patient.visitId !== undefined ) {
            const wl = this.userWatchList;
            const vi = this.patient.visitId;
            for (const key in wl) {
                if (wl.hasOwnProperty(key)) {
                    const keyval = parseInt(key);
                    if(keyval == vi){
                        retVal = true;
                    }
                }
              }
        }

        return retVal;
    }

    private getDiagnosisForVisit(diagnosesMap: Map<number, string>) {
        if (this.patient && diagnosesMap) {
            const diagnosis = diagnosesMap[this.patient.visitId];
            if (diagnosis && this.primDiag !== diagnosis) {
                this.primDiag = diagnosis;
                console.log('Updated primary diagnosis for visit ' + this.patient.visitId + ' to [' + this.primDiag + ']');
            } else if (!diagnosis && this.primDiag != null) {
                this.primDiag = null;
            }
        } else {
            this.primDiag = null;
        }
        this.ref.detectChanges();
    }
}
