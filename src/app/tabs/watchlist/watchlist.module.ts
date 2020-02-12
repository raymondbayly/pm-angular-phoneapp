import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchlistPage } from './watchlist.component';

// Views
import { WatchListPageComponent } from './views/list/list.component';

// Toolbar pages
import { WatchlistSearchPageComponent } from './views/search/search.component';
import { WatchListFilterPageComponent } from './views/filter/filter.component';
import { WatchlistProfileSettingsPageComponent } from './views/profile/profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: WatchlistPage }])
  ],
  declarations: [
    WatchlistPage,
    WatchListPageComponent,
    WatchlistSearchPageComponent,
    WatchlistProfileSettingsPageComponent,
    WatchListFilterPageComponent
  ]
})
export class WatchlistPageModule {}
