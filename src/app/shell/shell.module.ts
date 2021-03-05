import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@app/core/auth/auth.module';
import { I18nModule } from '@app/core/i18n/i18n.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, AuthModule, I18nModule, RouterModule],
  declarations: [ShellComponent],
})
export class ShellModule { }
