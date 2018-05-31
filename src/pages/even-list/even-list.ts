import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EvenListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-even-list',
  templateUrl: 'even-list.html',
})
export class EvenListPage {

  eventList: Array<any>; 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenListPage');
    this.eventProvider.getEventList()
    .on('value',eventListSnapshot => {
      this.eventList = [];
      eventListSnapshot.forEach(snap => {
        this.eventList.push({
          id:snap.key,
          name:snap.val().name,
          price:snap.val().price,
          date: snap.val().date,
          contact: snap.val().contact
        });
        return false;
      });
    });
  }

  goToEventDetail(eventId): void{
    this.navCtrl.push('EvenDetailPage', {eventId : eventId})
  }

}
