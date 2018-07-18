import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http'
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  flightss: any[] = []
  constructor(public modal: ModalController, public http: Http, public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
    public api: ApiProvider, public alert: AlertController) {
    var user = JSON.parse(localStorage.getItem('zip_user'))
    this.api.getFlights(user.id).then((data) => {
      this.flightss = data
      console.log(this.flightss);
      
    })

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
    })
  }

  doRefresh(refresher) {
    var user = JSON.parse(localStorage.getItem('zip_user'))
    this.api.getFlights(user.id).then((data) => {
      this.flightss = data
      refresher.complete()
      console.log('re run');
    })
  }

  addflight() {
    // var  scr = 'USA';
    // var scity = 'New York';
    // var dcr = 'Pakistan';
    // var dct = 'Lahore';
    // var time = '15:34:23';
    // var userid =  '1';
    // this.api.addFlight(scr, scity, dcr, dct, time, userid)
    this.modal.create('AddflightPage').present()
    // this.api.getFlights(user.id).then( (data) => {
    //   // this.flightss = data
    //   console.log(data);
    // })
  }
  flights() {
    // this.navCtrl.push('AddflightPage')
  }
}
