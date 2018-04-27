import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ProductDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
    IonicImageLoader.forRoot()
  ],
  exports:[
    ProductDetailsPage
  ]
})
export class ProductDetailsPageModule {}
