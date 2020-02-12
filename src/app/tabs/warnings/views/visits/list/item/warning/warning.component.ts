import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DateService, FlowsheetsApiService, PeraGraph, TranslationsService, WarningService} from 'ng-common-library';

@Component({
  selector: 'app-warnings-item-warning',
  templateUrl: 'warning.component.html',
  styleUrls: ['warning.component.scss']
})
export class WarningItemWarningComponent implements OnInit, OnChanges {
  @Input()
  patient: any;

  public latestRiScore: string;
  public activeWarningCategory: string;

  constructor(public dateService: DateService,
              private warningService: WarningService,
              private flowSheetApiService: FlowsheetsApiService,
              private translationsService: TranslationsService,
              private ref: ChangeDetectorRef) {
  }

  /**
   * Returns the CSS class to be used for the RI score background
   * @param warning: The current warning state in which the patient is
   */
  public getRiScoreClass(warning: string): string {
      const warningClass = this.warningService.getWarningClass(warning);
      return (warningClass) ? warningClass : 'no-warning';
  }

  ngOnInit(): void {
      this.updateRiScore(this.flowSheetApiService.getRiScoresSubjectValue());
      console.log('PASSED TO WARNING WARNING', this.patient);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.patient) {
          if (this.patient) {
              this.activeWarningCategory = this.getWarningTranslation(this.patient.category);
          } else {
              this.activeWarningCategory = 'No Warning';
          }
          this.updateRiScore(this.flowSheetApiService.getRiScoresSubjectValue());
          this.ref.detectChanges();
      }
  }

  /**
   * Translates to the warning text from the warning abbrev
   */
  private getWarningTranslation(key: string): string {
      return this.translationsService.getKeyTranslation(key);
  }

  private updateRiScore(riScoresMap: Map<number, number>) {
      this.latestRiScore = '--';
      if (riScoresMap) {
          const riScore = riScoresMap[this.patient.visitId];
          // Update the RI-related fields if necessary
          if (riScore && this.latestRiScore !== riScore) {
              this.latestRiScore = riScore;
              console.log('Updated RI Score for ' +
                  this.patient.displayName + ' in fac/unit ' +
                  this.patient.facilityId + '/' +
                  this.patient.unitId + ' to ' +
                  this.latestRiScore);
          }
      }
  }

  public remWarningWord(txt:String) {
    return txt.replace('Warning', '');
  }
}
