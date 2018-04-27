import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  constructor( public Keyboard: Keyboard,public platform: Platform,public alert:AlertController, public navCtrl: NavController, public navParams: NavParams, public load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } 
  ionViewDidEnter ()
  {
    // this.platform.ready().then( () =>
    // {
    //   this.Keyboard.disableScroll( true );
    // } );
  }

  ionViewWillLeave ()
  {
    // this.platform.ready().then( () =>
    // {
    //   this.Keyboard.disableScroll( false );
    // } );
  }
  login(){
    var l = this.load.create({
      spinner: 'hide',
      content: `<img src="assets/imgs/l.gif"/>`,      
      duration:3000,  
    })
    // l.present()
    if(this.username == '' && this.password == '')
      this.navCtrl.setRoot( 'TabsPage' ) 
    else
      {
        this.alert.create({title:'Invalid Username or Password',buttons:['OK']}).present()
        // l.dismiss()
      }
  }
}
