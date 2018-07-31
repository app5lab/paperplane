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
      // console.log(data.exportVal());
      if(data.exists()){
        var x = data.val()
        console.log(x);
          for(let index in x) {
           this.chats.push({name:x[index].name,msg:x[index].msg,id:index})
          }
          console.log(this.chats);
          
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllChatsPage');
  }

  openChat(id,name){
    console.log(id,name);
    
    var user = {name:name,id:id}
    this.navCtrl.push('Chat',{user:user}) 
  }

}
   