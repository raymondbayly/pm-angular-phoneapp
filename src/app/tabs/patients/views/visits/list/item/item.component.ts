import {Component, Input} from '@angular/core';
import {PeraGraph} from 'ng-common-library';

@Component({
  selector: 'app-patients-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss']
})
export class PatientItemComponent {
  @Input()
  graph: PeraGraph;
}
