import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})



export class AccountPage {
  user: any = {firstname:'hassan',lastname:'ali',address:'asdasdasdas',phone:'03000417591',email:'megatubelite@gmail.com',password:'qwerty',rp:'qwerty'}
settings:any = 'profile'
  constructor(public app: App ,public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loading = this.loadingCtrl.create( {
      spinner: 'hide',
      content: `<img src="assets/imgs/l.gif"/>
      <h3 style="text-align:center;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLoading...</h3`,
      duration: 30000
    } );

    // loading.present();
  }

  logout(){
    this.app.getRootNav().setRoot('LoginPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
