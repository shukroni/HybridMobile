import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  goToProfile(): void
  {
    this.navCtrl.push('ProfilePage');
  }

  goToCreate(): void{
    this.navCtrl.push('EvenCreatePage');
  }

  goToList(): void{
    this.navCtrl.push('EvenListPage');
  }
}
