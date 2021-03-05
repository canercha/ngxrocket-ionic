import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/auth/authentication.service';
import { CredentialsService } from '@app/core/auth/credentials.service';
import { ConfirmService } from '@app/shared/service/confirm/confirm.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private platform: Platform,
    private router: Router,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private confirmService: ConfirmService,
    private statusBar: StatusBar,
  ) { }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
  }

  ionViewDidLeave() {
    if (['/app/dashboard', '/login'].includes(this.router.url)) {
      this.statusBar.styleDefault();
    } else {
      this.statusBar.styleLightContent();
    }
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.confirmService.confirm({
      header: 'Global.Confirm.Title', subHeader: 'SettingsPage.Account.WarningSubHeader',
      backdropDismiss: false,
      buttons: [{
        handler: () => { console.log('oturum kapatılmadı :)'); },
        text: 'Global.Cancel',
        role: 'cancel',
        cssClass: ''
      }, {
        handler: () => {
          this.authenticationService.logout()
            .subscribe(() => this.router
              .navigate(['/login'], { replaceUrl: true }));
        },
        text: 'Global.Ok',
        role: '',
        cssClass: ''
      }]
    });
  }

}
