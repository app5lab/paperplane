import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  files:any [] = []
  constructor( 
    public image:ImagePicker , 
    public api:ApiProvider ,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }
  upload(){
    const options: ImagePickerOptions = {
      quality: 50,
      maximumImagesCount: 3,
      outputType: 1
    }
      
    this.image.getPictures( options ).then( ( results ) =>
    {
      var i = 0
      results.forEach(Img => {
        this.files[i++] = 'data:image/jpeg;base64,' + Img;
      });
      console.log(this.files[0]);
      
    }, ( err ) => { } );
  }
  
  add(){ 
    // this.api.getPostbyLoc('USA', 'Pakistan')
    this.api.addPost('Macbook', '13inch 256ssd i7 8gb', this.files[0], '', '', '50', 'USA', 'Pakistan', '3', 'apple.com/macbook')
  }
}
