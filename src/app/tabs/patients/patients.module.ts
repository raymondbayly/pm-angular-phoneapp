import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientsPage } from './patients.component';

// Toolbar pages
import { PatientsSearchPageComponent } from './views/search/search.component';
import { PatientsFilterPageComponent } from './views/filter/filter.component';
import { PatientProfileSettingsPageComponent } from './views/profile/profile.component';

// List
import { PatientListPageComponent } from './views/visits/list/list.component';
// Details
import { PatientItemComponent } from './views/visits/list/item/item.component';
// Info
import { PatientItemInfoComponent } from './views/visits/list/item/info/info.component';
// Warning
import { PatientItemWarningComponent } from './views/visits/list/item/warning/warning.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PatientsPage }])
  ],
  declarations: [
    PatientsPage,
    PatientsSearchPageComponent,
    PatientsFilterPageComponent,
    PatientProfileSettingsPageComponent,
    PatientListPageComponent,
    PatientItemComponent,
    PatientItemInfoComponent,
    PatientItemWarningComponent
  ]
})
export class PatientsPageModule {}
