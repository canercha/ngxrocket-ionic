import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class I18nModule { }
