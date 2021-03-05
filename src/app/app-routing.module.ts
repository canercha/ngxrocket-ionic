import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  }]), {
    path: 'app/settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: '**', redirectTo: 'app/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
