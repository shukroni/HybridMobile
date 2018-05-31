import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EvenCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-even-create',
  templateUrl: 'even-create.html',
})
export class EvenCreatePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider: EventProvider) {
  }

  createEvent(
    eventName: string, 
    eventPrice: number,
    eventDate: string,
    eventContact: string
  ): void
  {
    this.eventProvider
    .createEvent(eventName, eventPrice, eventDate, eventContact)
    .then(newEvent => {
      this.navCtrl.pop();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenCreatePage');
  }

}
