import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { ApiProvider } from '../../providers/api/api';

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
  username: string = 'Hassanali@gmail.com';
  password: string = '123456';
  constructor(public api: ApiProvider, public Keyboard: Keyboard,public platform: Platform,public alert:AlertController, public navCtrl: NavController, public navParams: NavParams, public load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.Keyboard.onKeyboardHide().subscribe(d => {
      console.log('testttt');
      document.getElementsByClassName('scroll-content')[0].setAttribute('style','padding-bottom: 0 !important')
    })
  } 
  test(){
    console.log('YE CHEEEEEEEEEEEEZZZZZZZZZZZZ');
    document.getElementsByClassName('scroll-content')[0].setAttribute('style','padding-bottom: 0 !important')
  }
  ionViewDidEnter ()
  {
    this.platform.ready().then( () =>
    {
      
    } );
  }

  onKeyboardHide(){
    console.log('asd');
  }
  onKeyboardShow(){
    console.log('asdas');
    
  }
  ionViewWillLeave ()
  {
    // this.platform.ready().then( () =>
    // {
    //   this.Keyboard.disableScroll( false );
    // } );
  }  
  login(){
    var l = this.load.create({})
    l.setContent('Signing In...')
    l.present()
    this.api.login(this.username, this.password).then((r)=>{
      if(r){
        this.navCtrl.setRoot( 'TabsPage' ); l.dismiss()
      }
      else
      {
        this.alert.create( { title: 'Invalid Username or Password', buttons: ['OK'] } ).present()
        l.dismiss()
      }       
    })
  }
  signup(){
    this.navCtrl.push('SignUpPage')
  }
}
