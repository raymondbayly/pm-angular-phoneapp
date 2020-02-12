import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WarningsPage } from './warnings.component';

// Toolbar pages
import { WarningSearchPageComponent } from './views/search/search.component';
import { WarningsFilterPageComponent } from './views/filter/filter.component';
import { WarningProfileSettingsPageComponent } from './views/profile/profile.component';

// List
import { WarningListPageComponent } from './views/visits/list/list.component';
// Details
import { WarningItemComponent } from './views/visits/list/item/item.component';
// Info
import { WarningItemInfoComponent } from './views/visits/list/item/info/info.component';
// Warning
import { WarningItemWarningComponent } from './views/visits/list/item/warning/warning.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: WarningsPage }])
  ],
  declarations: [
    WarningsPage,
    WarningSearchPageComponent,
    WarningsFilterPageComponent,
    WarningProfileSettingsPageComponent,
    WarningListPageComponent,
    WarningItemComponent,
    WarningItemInfoComponent,
    WarningItemWarningComponent
  ]
})
export class WarningsPageModule {}
