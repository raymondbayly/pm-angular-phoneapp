import {Component, OnDestroy, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-warnings-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss']
})
export class WarningItemComponent implements OnInit, OnDestroy  {
  @Input()
  patient: any;

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
