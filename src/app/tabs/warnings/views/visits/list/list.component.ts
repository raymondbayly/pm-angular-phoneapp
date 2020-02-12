import { BehaviorSubject } from 'rxjs';
import { User } from 'ng-common-library';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { WarningService } from '../../../../../services';
import { MockData } from '../../../../../properties';

@Component({
  selector: 'app-visit-warning-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class WarningListPageComponent  implements OnInit, OnDestroy {


  private completedRefreshSubscription: BehaviorSubject<any>;
  public warningList;
  public mockWarningList;
  private warningListRefresh;

    constructor(
      private user: User,
        public warningService: WarningService,
        public mockDataReg: MockData) {
    }

    ngOnInit() {
        this.warningList = this.warningService.getCurrentWarningList();
        this.mockWarningList = this.mockDataReg.getMockWarningData();
    }

    doRefresh(event) {
      this.warningList = this.warningService.getWarningList(this.user.username);
        this.warningListRefresh = this.warningService.warningUpdate$.subscribe(() => {
          event.target.complete();
        });
        this.warningList = this.warningService.getCurrentWarningList();

        // TODO: Needs to be completed once the virtual scroll is completed and working
      }

    ngOnDestroy(): void {
    }
}

