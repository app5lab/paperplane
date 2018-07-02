import { NgModule } from '@angular/core';
import { WargaeComponent } from './wargae/wargae';
import { IonicModule } from 'ionic-angular'
@NgModule({
	declarations:[WargaeComponent],
	imports: [IonicModule],
	exports: [WargaeComponent]
})
export class ComponentsModule {}
