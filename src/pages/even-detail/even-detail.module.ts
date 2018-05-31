import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenDetailPage } from './even-detail';

@NgModule({
  declarations: [
    EvenDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenDetailPage),
  ],
})
export class EvenDetailPageModule {}
