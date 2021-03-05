import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@app/core/i18n/i18n.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InlineSVGModule } from 'ng-inline-svg';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollHideDirective } from './directive/scroll-hide/scroll-hide.directive';
import { DateFormatPipe } from './pipes/format/date-format.pipe';
import { DateTimeFormatPipe } from './pipes/format/date-time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    I18nModule,
    InlineSVGModule,
    SweetAlert2Module
  ],
  declarations: [
    LoaderComponent,
    ScrollHideDirective,
    DateFormatPipe,
    DateTimeFormatPipe,
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    I18nModule,
    InlineSVGModule,
    SweetAlert2Module,
    ScrollHideDirective,
    DateFormatPipe,
    DateTimeFormatPipe,
  ]
})
export class SharedModule { }
