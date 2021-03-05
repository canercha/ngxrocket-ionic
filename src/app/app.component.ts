import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from '@env/environment';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { I18nService } from './core/i18n/i18n.service';
import { Logger } from './core/logger.service';
import { untilDestroyed } from './core/until-destroyed';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private keyboard: Keyboard,
    private i18nService: I18nService
  ) {
    this.initializeApp();
  }
  log = new Logger('App');
  async ngOnInit(): Promise<void> {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    this.log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });

    // Cordova platform and plugins initialization
    await this.platform.ready();
    this.onCordovaReady();
  }


  ngOnDestroy() {
    this.i18nService.destroy();
  }

  private onCordovaReady() {
    this.log.debug('device ready');

    if ((window as any).cordova) {
      this.log.debug('Cordova init');

      this.keyboard.hideFormAccessoryBar(true);
      
      // this.statusBar.styleLightContent();
      // this.statusBar.backgroundColorByHexString('primary')
      this.splashScreen.hide();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
