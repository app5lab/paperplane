import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import * as cc from 'country-city'

@IonicPage()
@Component({
  selector: 'page-addflight',
  templateUrl: 'addflight.html',
})
export class AddflightPage {
countries:any[] = []
cities:any[] = []
cities2:any[] = []
city:any = ''
city2:any = ''
items:any[] = []
country:any = ''
country2:any = ''
hide:any = true
hide2:any = true
hide3:any = true
hide4:any = true
  constructor(public api: ApiProvider , public navCtrl: NavController, public navParams: NavParams) {
    this.countries = cc.getCountries()
    this.items = this.countries
  }
  showList(){
    this.hide = false;
  }
  
  today = new Date().toISOString();

  showList2(){
    this.items = this.countries
    this.hide2 = false;
  }
  showList3(){
    this.hide3 = false;
  }
  showList4(){
    this.hide4 = false;
  }
  selectCountry(item){
    this.country = item;
    this.hide = true;
    this.cities = cc.getCities(this.country)
    this.items = this.cities
  }
  selectCity(item){
    this.city = item;
    this.hide3 = true
  }

  selectCountry2(item){
    this.country2 = item;
    this.hide2 = true;
    this.cities2 = cc.getCities(this.country2)
    this.items = this.cities2

  }

  selectCity2(item){
    this.city2 = item;
    this.hide4 = true
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddflightPage');
  }
  add(){ 
    // this.api.addFlight(this.country,this.city,this.country2,this.city2)
  }
  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.countries.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  filterItems2(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.cities.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  filterItems3(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.cities2.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
