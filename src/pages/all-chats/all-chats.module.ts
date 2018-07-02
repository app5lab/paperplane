import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllChatsPage } from './all-chats';

@NgModule({
  declarations: [
    AllChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllChatsPage),
  ],
})
export class AllChatsPageModule {}
