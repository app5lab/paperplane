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

//import * as md5 from 'md5';
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
  constructor( public http: Http, public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
  private googleMaps: GoogleMaps) {
}

  ionViewDidLoad ()
  {
    this.platform.ready().then( () =>
    {
    })
  }

  addFlight(){
    // var data = {
    //   firstname:'Hassan',
    //   lastname:'Ali',
    //   address:'363 E1 Johar Town',
    //   email:'ali@appslab.io',
    //   phone:'03134698550',
    //   password:'test123',
    //   key:'create',
    //   sec:'((|m5DlhrplfKx1'
    // }

    var data = {
      email: 'hassan@appslab.io',
      password:'123456' ,
      key:'login',
      sec: '((|m5DlhrplfKx1'

    }
    this.http.post( 'https://zipship.io/manage-data.php', data).subscribe( res => {
      console.log((res)); 
    })
    //console.log( md5( '123456' ) )//= '$2y$10$MIVI73kil.V3WvspSjg87eK/QsGgH3NPUgqj8cIq0URYEyFBKO2fa' ); 
    // this.http.get( 'https://zipship.io/retrieve-data.php' ).subscribe( res =>
    // {
    //   console.log(JSON.parse( res._body )); 
    // })

  }
}
