import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPageComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPageComponent,
    children: [
      {
        path: 'patients',
        children: [
          {
            path: '',
            loadChildren: './patients/patients.module#PatientsPageModule'
          }
        ]
      },
      {
        path: 'warnings',
        children: [
          {
            path: '',
            loadChildren: './warnings/warnings.module#WarningsPageModule'
          }
        ]
      },
      {
        path: 'watchlist',
        children: [
          {
            path: '',
            loadChildren: './watchlist/watchlist.module#WatchlistPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/patients',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/patients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
