import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

export interface IConfirmDialogContent {
  header: string;
  subHeader: string;
  message: string;
  backdropDismiss: boolean;
  buttons: {
    text: string;
    role: '' | 'cancel';
    cssClass: string;
    handler: () => void;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private alertController: AlertController, private translateService: TranslateService) { }

  async confirm({ header = '', message = '', buttons, subHeader = '', backdropDismiss = false }: Partial<IConfirmDialogContent>) {

    const buttonsTrans = buttons.map(it => it.text);
    this.translateService.get(buttonsTrans).subscribe((contanier: { [key: string]: string }) => {
      buttons = buttons.map((it) => {
        it.text = contanier[it.text] || it.text;
        return it;
      });

    });

    this.translateService.get([header, message, subHeader]).subscribe((contanier: { [key: string]: string }) => {
      header = contanier[header] || header;
      message = contanier[message] || message;
      subHeader = contanier[subHeader] || subHeader;
    });

    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
      backdropDismiss
    });
    await alert.present();
  }
}
