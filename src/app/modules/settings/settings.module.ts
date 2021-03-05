import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AccountLogoutComponent } from './account-logout/account-logout.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsComponent,
    AccountLogoutComponent,
  ],
})
export class SettingsModule { }
