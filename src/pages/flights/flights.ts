import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google: any;
import
{
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
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
  @ViewChild( 'map' ) mapElement: ElementRef;
  private map: GoogleMap;
  private location: LatLng;

  constructor( public http: Http, public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
  private googleMaps: GoogleMaps) {
    this.location = new LatLng( 42.346903, -71.135101 );
}

  ionViewDidLoad ()
  {
    this.platform.ready().then( () =>
    {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create( element );

      this.map.one( GoogleMapsEvent.MAP_READY ).then( () =>
      {
        let options = {
          target: this.location,
          zoom: 8
        };

        this.map.moveCamera( options );
      } );
    } );
  }
  initializeMap ()
  {
    var minZoomLevel = 2;

    this.map = new google.maps.Map( this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    } );
    // var flightPlanCoordinates = [
    //   { lat: 37.772, lng: -122.214 },
    //   { lat: 21.291, lng: -157.821 },
    //   { lat: -18.142, lng: 178.431 },
    //   { lat: -27.467, lng: 153.027 }
    // ];
    // var flightPath = new google.maps.Polyline( {
    //   path: flightPlanCoordinates,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2
    // } );

    // flightPath.setMap( this.map );
  }

}
