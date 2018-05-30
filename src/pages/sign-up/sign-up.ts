import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user: any = {firstname:'hassan',lastname:'ali',address:'asdasdasdas',phone:'03000417591',email:'megatubelite@gmail.com',password:'qwerty',rp:'qwerty'}
  constructor(public alert:AlertController, public load: LoadingController, public api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  register(){
    var l = this.load.create( {} )
    l.setContent( 'Signing In...' )
    l.present()
    let that = this
    if(this.user.password == this.user.rp)
    {
      this.api.register( this.user.firstname, this.user.lastname, this.user.address, this.user.phone, this.user.email, this.user.password).then( ( r ) =>
      {
        console.log(r); 
        if ( r )
        {
          that.navCtrl.pop();
          l.dismiss()
        }
        else
        {
          that.alert.create( { title: 'Invalid Username or Password', buttons: ['OK'] } ).present()
          l.dismiss()
        }
      } )
    }
    else{
      this.alert.create( {title:'Passwords do not match.',buttons: ['OK']}).present()
    }
    
  }

}
