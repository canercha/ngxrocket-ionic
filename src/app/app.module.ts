import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeTr from '@angular/common/locales/tr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';

registerLocaleData(localeTr);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    ShellModule,
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useClass: IonicRouteStrategy, useValue: 'tr-TR' },
    FileChooser,
    FilePath,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
