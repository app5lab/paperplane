import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import * as cc from 'country-city'

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
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




  files:any [] = []
  post:any = {title:'',des:'',image1:'',image2:'',image3:'',treward:'',fromCry:'',toCry:'',fromC:'',toC:'',note:'',url:'', qty:'',userid:''}
  constructor( 
    public image:ImagePicker , 
    public api:ApiProvider ,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.countries = cc.getCountries()
      this.items = this.countries
      var user = JSON.parse( localStorage.getItem( 'zip_user' ) )    
      this.post.userid = user.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }
  upload(){
    const options: ImagePickerOptions = {
      quality: 50,
      maximumImagesCount: 3,
      outputType: 0
    }

      
    this.image.hasReadPermission().then( () => {
      this.image.getPictures( options ).then( ( results ) =>
      {
        // this.files = results
        // console.log(this.files[0]);
        for (var i = 0; i < results.length; i++) {
          //  this.files[i] = 'data:image/jpeg;base64,' + results[i];
          // this.files[i] = results[i].replace('file:///data/user/0/com.zipship.dev/cache', '');
          this.files = results;          
          console.log
          (this.files[0]);
          if(i == 0)
            this.post.image1 = this.files[i]
          else if (i == 1)
            this.post.image2 = this.files[i]
          else if( i == 2)
            this.post.image2 = this.files[i]
          }
      }, ( err ) => {console.log('err'+err);});
    })
    
  }
  
  add(){ 
    this.api.addPost(this.post.title,this.post.des, this.post.image1, this.post.image2, this.post.image3, this.post.treward, this.country, this.country2,this.city,this.city2,this.post.qty,this.post.userid, this.post.url)
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
