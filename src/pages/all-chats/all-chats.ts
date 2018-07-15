import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AllChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-chats',
  templateUrl: 'all-chats.html',
})
export class AllChatsPage {
chats:any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    var user = JSON.parse( localStorage.getItem( 'zip_user' ) )
    api.firebase().ref('rooms/' + user.id).once('value', data => {
      this.chats = data.val()
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllChatsPage');
  }

  openChat(){
    this.navCtrl.push('Chat') 
  }

}
