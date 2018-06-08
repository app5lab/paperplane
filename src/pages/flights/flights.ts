import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';

declare var google: any;
import
{
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
import { Http } from '@angular/http'
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the FlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  flightss: any[]=[]
  constructor( public http: Http, public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
      public api: ApiProvider, public alert: AlertController,

    private googleMaps: GoogleMaps) {
    var user = JSON.parse(localStorage.getItem('zip_user'))
      this.api.getFlights(user.id).then( (data) => {
        this.flightss = data
        console.log(this.flightss);
        
      })
}

  ionViewDidLoad ()
  {
    this.platform.ready().then( () =>
    {
    })
  }

  addFlight(){
      var  scr = 'USA';
      var scity = 'New York';
      var dcr = 'Pakistan';
      var dct = 'Lahore';
      var time = '15:34:23';
      var userid =  '1';
      this.api.addFlight(scr, scity, dcr, dct, time, userid)
  }
  flights(){
    this.navCtrl.push('AddflightPage')
  }
}
