import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'FlightsPage';
  tab3Root = 'AccountPage';
  tab4Root = 'HistoryPage';
  tab5Root = 'ChatPage';
  a = true;

  constructor(public event: Events,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
