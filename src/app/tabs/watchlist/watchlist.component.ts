import { Component } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: 'watchlist.component.html',
  styleUrls: ['watchlist.component.scss']
})
export class WatchlistPage {
  public title = 'Watchlist';
  public errorMessage: string;
  public searchFlag = false;
  public listFlag = true;
  public profileFlag = false;
  public settingsFlag = false;
  public filterFlag = false;

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
