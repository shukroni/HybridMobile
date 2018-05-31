import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenListPage } from './even-list';

@NgModule({
  declarations: [
    EvenListPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenListPage),
  ],
})
export class EvenListPageModule {}
