import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  active: boolean = false;
  active2: any = false;
  posts: any [] = [];
  posts2: any[] = [];  
  @ViewChild( 'ok' ) myElem;
  private animator: AnimationBuilder;
  constructor( private ref:ChangeDetectorRef,private statusBar: StatusBar, animationService: AnimationService,public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.animator = animationService.builder();
    this.posts.push(
      {
        active: 'false',
        user: { name: 'Hassan Ali', img:'assets/imgs/logo.jpg'},
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'Pakistan', reward: '10', img:'assets/imgs/s1.jpg'}
      })

    this.posts.push(
      {
        active: 'false',        
        user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
      })
    this.posts.push(
      {
        active: 'false',
        user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
      } )

    this.posts.push(
      {
        active: 'false',
        user: { name: 'Hassan Ali', img: 'assets/imgs/logo.jpg' },
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'Pakistan', reward: '10', img: 'assets/imgs/s1.jpg' }
      } )

    this.posts.push(
      {
        active: 'false',
        user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
      } )
    this.posts.push(
      {
        active: 'false',
        user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
        product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
      } )

    this.loading.create({
      spinner:'hide',
      content:`&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
               &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
               Loading
               <img src = "assets/imgs/planes.gif">`,
    })
  }
  s(){
    this.active = !this.active;        
  }
  animateElem (post,ele)
  { 
    //this.animator.stop( ele._elementRef.nativeElement );
    if ( post.active == 'true' ){
      ele._elementRef.nativeElement.innerText = 'Make an Offer';
      post.active = 'false';          
    }
    else{
      ele._elementRef.nativeElement.innerText = 'Cancel';
      post.active = 'true';             
    }
      //this.animator.setType( 'flipInX' ).show( ele._elementRef.nativeElement )
  } 
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  go(){
    this.navCtrl.push('AccountPage')
  }

  openProduct(){
    this.navCtrl.push('ProductDetailsPage')
  }
}
