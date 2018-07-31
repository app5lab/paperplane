import { ViewChild, Component } from '@angular/core';
import { Slides, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage( {} )
@Component( { selector: 'page-product-details', templateUrl: 'product-details.html' } )

export class ProductDetailsPage
{

  @ViewChild( Slides ) slides: Slides;

  public product: any;
  public reviews: any[] = [];
  public details :any[] = [];
  public user :any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
    var item = navParams.get('data')


    this.product = {
      name:item.title,
      images: [item.image_1, item.image_2,item.image_3],
      // categories: ['Shoes','Air','Nike'],
      price: item.item_price
    }

    this.user = {
      name:item.firstname + ' ' + item.lastname,
      dp:item.dp,
      tr:item.traveler_reward,
      time:item.created_at,
      id:item.user_id
    }

    this.reviews = [{ 
      reviewer_name: 'Hassan Ali',
      review: `'So comfortable and durable. Definitely get them if you need comfy shoes, I don't run in them, I use them for fashion and I can say they go with everything.'`
    }]

    this.details =[{
    title:'Product details',
    p_det:'-Color Blue -Size 7 -Nike Sole -Soft Rubber -Blue Laces '
    }]
  }

  chat(){
    let user = {
      id:this.user.id,name:this.user.name,img:this.user.dp
    }
    this.navCtrl.push('Chat',{user:user})
  }

  //Slider options
  ngAfterViewInit ()
  {
    this.slides.autoHeight = true;
    this.slides.pager = true;
    this.slides.autoplay = 3000;
    this.slides.loop = true;

  }
}