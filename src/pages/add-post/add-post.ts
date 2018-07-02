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
  post:any = {title:'',des:'',image1:'',image2:'',image3:'',treward:'',from:'',to:'',note:'',url:'', qty:''}
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
      outputType: 0
    }

      
    this.image.hasReadPermission().then( () => {
      this.image.getPictures( options ).then( ( results ) =>
      {
        
        for (var i = 0; i < results.length; i++) {
          this.files[i] = 'data:image/jpeg;base64,' + results[i];
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
    this.api.addPost(this.post.title,this.post.des, this.post.image1, this.post.image2, this.post.image3, this.post.treward, this.post.from, this.post.to,this.post.qty, this.post.url)
  }
}
