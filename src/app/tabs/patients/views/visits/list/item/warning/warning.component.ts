import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DateService, FlowsheetsApiService, PeraGraph, TranslationsService, WarningService} from 'ng-common-library';

@Component({
  selector: 'app-patients-item-warning',
  templateUrl: 'warning.component.html',
  styleUrls: ['warning.component.scss']
})
export class PatientItemWarningComponent implements OnInit, OnChanges {
  @Input()
  graph: PeraGraph;

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
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.graph) {
          if (this.graph.activeWarning) {
              this.activeWarningCategory = this.getWarningTranslation(this.graph.activeWarning.category);
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
          const riScore = riScoresMap[this.graph.visitId];
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
  }
}
