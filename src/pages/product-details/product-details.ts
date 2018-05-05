import { ViewChild, Component } from '@angular/core';
import { Slides, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage( {} )
@Component( { selector: 'page-product-details', templateUrl: 'product-details.html' } )

export class ProductDetailsPage
{

  @ViewChild( Slides ) slides: Slides;

  public product: any;
  private wooCommerce: any;
  public reviews: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {

    this.product = {
      name:'Nike Air',
      images: ['../../assets/imgs/s1.jpg', 'assets/imgs/s2.jpg','assets/imgs/s3.jpg'],
      categories: ['Shoes','Air','Nike'],
      price: 200
    }

    this.reviews = [{ 
      reviewer_name: 'Hassan Ali',
      review: `'So comfortable and durable. Definitely get them if you need comfy shoes, I don't run in them, I use them for fashion and I can say they go with everything.'`
  }]
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