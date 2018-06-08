import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  files:any [] = []
  constructor( private image:ImagePicker , private file: File,public api:ApiProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }
  upload(){
    const options: ImagePickerOptions = {
      quality: 50,
      maximumImagesCount: 3
    }

    // this.camera.getPicture( options ).then( ( imageData ) =>
    // {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64:
    //   this.files = 'data:image/jpeg;base64,' + imageData;
    // }, ( err ) =>
    // {
    //   // Handle error
    //   console.log(err);
      
    // } );
    this.image.getPictures( options ).then( ( results ) =>
    {
      this.files = results
      for ( var i = 0; i < results.length; i++ )
      {
        console.log( 'Image URI: ' + results[i] );
      }
    }, ( err ) => { } );
  }
  
  add(){
    this.api.getPostbyLoc('USA', 'Pakistan')
    //this.api.addPost('Macbook', '13inch 256ssd i7 8gb', '', '', '', '50', 'USA', 'Pakistan', '3', 'apple.com/macbook')
  }
}
