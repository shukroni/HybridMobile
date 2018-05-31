import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EvenDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'even-detail/:eventId'
})
@Component({
  selector: 'page-even-detail',
  templateUrl: 'even-detail.html',
})
export class EvenDetailPage {

  public currentEvent: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenDetailPage');
    this.eventProvider
    .getEventDetail(this.navParams.get('eventId'))
    .on('value', eventSnapShot => {
      this.currentEvent = eventSnapShot.val();
      this.currentEvent.id = eventSnapShot.key;
    });
  }

}
