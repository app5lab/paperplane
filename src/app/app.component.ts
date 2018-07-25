import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAjwOubcsmoO19VAyY3D-7SxJLVavG4wQU",
  authDomain: "zipship-645ad.firebaseapp.com",
  databaseURL: "https://zipship-645ad.firebaseio.com",
  projectId: "zipship-645ad",
  storageBucket: "zipship-645ad.appspot.com",
  messagingSenderId: "853143982866"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";

  constructor( public Keyboard: Keyboard,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString( '#fff' );
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
