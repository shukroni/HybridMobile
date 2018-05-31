import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenCreatePage } from './even-create';

@NgModule({
  declarations: [
    EvenCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(EvenCreatePage),
  ],
})
export class EvenCreatePageModule {}
