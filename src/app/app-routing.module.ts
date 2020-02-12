import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard, UrlGuard } from './guards';

/**
   * Application Routing Module for the peramobile application
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   * Routes are handled by lazyloading so no views are declared in the component or the module
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [UrlGuard], },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [UrlGuard], },
  { path: 'views/login', loadChildren: './views/login/login.module#LoginPageModule', canActivate: [LoginGuard], }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
