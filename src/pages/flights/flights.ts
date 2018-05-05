import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google: any;

import { Http } from '@angular/http'
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
  public map: any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
    this.initializeMap();

    // this.http.get('/assets/test.php').subscribe( (res => {
    //   console.log(res); 
    // }) )
  }
  initializeMap ()
  {
    var minZoomLevel = 19;

    this.map = new google.maps.Map( document.getElementById( 'map_canvas' ), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng( 31.420671, 74.182747 ),
      mapTypeId: 'terrain'
    } );
    var flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 }
    ];
    var flightPath = new google.maps.Polyline( {
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    } );

    flightPath.setMap( this.map );
  }

}
