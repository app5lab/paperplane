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
import { HTTP } from '@ionic-native/http';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';

import { WargaeComponent } from '../components/wargae/wargae'
import { ChatService } from '../providers/chat-service/chat-service';

import { HttpClientModule } from '@angular/common/http'; 

var config = {
  apiKey: "AIzaSyAjwOubcsmoO19VAyY3D-7SxJLVavG4wQU",
  authDomain: "zipship-645ad.firebaseapp.com",
  databaseURL: "https://zipship-645ad.firebaseio.com",
  projectId: "zipship-645ad",
  storageBucket: "zipship-645ad.appspot.com",
  messagingSenderId: "853143982866"
};

@NgModule({
  declarations: [
    MyApp,
    AnimatesDirective,
    WargaeComponent,
  ],
  imports: [
    ResponsiveModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot( MyApp, { 
      // scrollAssist: true, 
      // autoFocusAssist: true,
      // scrollPadding: true,
      tabsHideOnSubPages:true,
      preloadModules: true,
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      mode: 'ios'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnimationService,
    Keyboard,
    GoogleMaps,
    ApiProvider,
    HTTP,
    FileTransfer, File, ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChatService
  ]
})
export class AppModule {}
