import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  flightss: any[]=[]
  constructor( public http: Http, public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
      public api: ApiProvider, public alert: AlertController) {
    var user = JSON.parse(localStorage.getItem('zip_user'))
      this.api.getFlights(user.id).then( (data) => {
        this.flightss = data
      })
}

  ionViewDidLoad ()
  {
    this.platform.ready().then( () =>
    {
    })
  }

  addFlight(){
      // var  scr = 'USA';
      // var scity = 'New York';
      // var dcr = 'Pakistan';
      // var dct = 'Lahore';
      // var time = '15:34:23';
      // var userid =  '1';
      // this.api.addFlight(scr, scity, dcr, dct, time, userid)
    var user = JSON.parse(localStorage.getItem('zip_user'))      
    console.log(JSON.stringify( user))
    
       // this.api.getFlights(user.id).then( (data) => {
       //   // this.flightss = data
       //   console.log(data);
       // }) 
  }
  flights(){
    this.navCtrl.push('AddflightPage')
    this.addFlight()
  }
}
