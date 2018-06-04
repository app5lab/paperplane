import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events, Keyboard } from 'ionic-angular';
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
  a: boolean = false;
  active: any = 0;
  active2: any = false;
  posts: any [] = [];
  posts2: any[] = [];  
  @ViewChild( 'ok' ) myElem;
  private animator: AnimationBuilder;
  constructor( private event: Events, public Keyboard: Keyboard, public alert: AlertController, private ref:ChangeDetectorRef,private statusBar: StatusBar, animationService: AnimationService,public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.animator = animationService.builder();

    this.event.subscribe( 'open', () =>
    {
      this.keyboardCheck();
    } )


    this.event.publish('open');



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
  select: any;
  animateElem (post,ele)
  { 
    //this.animator.stop( ele._elementRef.nativeElement );
    if ( post.active == 'true' ){
      ele._elementRef.nativeElement.innerText = 'Make an Offer';
        post.active = 'false';        
      this.active = this.active - 1;          
    }
    else{
      ele._elementRef.nativeElement.innerText = 'Cancel';
      post.active = 'true';             
      this.active = this.active + 1;
    }

    
      //this.animator.setType( 'flipInX' ).show( ele._elementRef.nativeElement )
  } 
  keyboardCheck ()
  {
    // this.event.publish('open')
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  flight(){
    var alert = this.alert.create({
      title:'Choose your flight'
    })

    alert.addInput( {
      type: 'radio',
      label: 'USA - PAK',
      value: 'blue',
      checked: true
    } );
    alert.addInput( {
      type: 'radio',
      label: 'PAK - KSA',
      value: 'blue',
      checked: false
    } )
    alert.addButton({text:'Confirm'})
    alert.present()
  }
  go(){
    this.navCtrl.push('AccountPage')
  }

  openProduct(){
    this.navCtrl.push('ProductDetailsPage')
  }

  addPost(){
    this.navCtrl.push('AddPostPage')
  }
}
