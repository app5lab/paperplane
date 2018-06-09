import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ResponsiveModule } from 'ngx-responsive'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnimationService, AnimatesDirective } from 'css-animator';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from '@angular/http';

import { GoogleMaps } from '@ionic-native/google-maps';
import { ApiProvider } from '../providers/api/api';
@NgModule({
  declarations: [
    MyApp,
    AnimatesDirective,
  ],
  imports: [
    ResponsiveModule.forRoot(),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot( MyApp, { 
      scrollAssist: false, 
      autoFocusAssist: false,
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimationService,
    Keyboard,
    GoogleMaps,
    ApiProvider
  ]
})
export class AppModule {}
