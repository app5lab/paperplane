import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, LoadingController, Slides} from 'ionic-angular';
import { AnimationBuilder, AnimationService } from 'css-animator';
import { ApiProvider } from '../../providers/api/api';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  keyboardCheck(): any {
    throw new Error("Method not implemented.");
  }

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  SwipedTabsIndicator :any= null;
  tabs:any=[];


  settings:any = 'myposts'
  settings1:any = 'flight'
  settings2:any = 'bids'
  a: boolean = false;
  active: any = 0;
  active2: any = false;
  posts: any [] = [];
  posts2: any[] = [];
  @ViewChild( 'ok' ) myElem;
  private animator: AnimationBuilder;

  constructor(public api: ApiProvider, private event: Events, public Keyboard: Keyboard, public alert: AlertController, private ref:ChangeDetectorRef,private statusBar: StatusBar, animationService: AnimationService,public loading: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.tabs=["My Posts","My Bids","Bids Made", "Something"];
    this.animator = animationService.builder();





    this.event.publish('open');
    this.api.allFlights.forEach(item=>{
      this.api.getPostbyLoc(item.source_country,item.destination_country).then(data=>{
        this.posts.push(data)
      })
    })

    
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
flight_id:any= ''
  flight(){

    var alert = this.alert.create({
      title:'Choose your flight'
    })

    this.api.allFlights.forEach(element => {
      alert.addInput( {
        type: 'radio',
        label: element.source_country+' - '+ element.destination_country,
        value: element.id,
        checked: false
      } );
    })

    alert.addButton({
      text:'Confirm',
      handler: data => {
        this.flight_id = data;
      }})
    alert.present()
  }

  makebid(){
   // this.api.bid()
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




  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

}
