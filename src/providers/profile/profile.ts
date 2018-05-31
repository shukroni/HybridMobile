import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User, AuthCredential} from '@firebase/auth-types';
import { Reference } from '@firebase/database-types';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  public userProfile: Reference;
  public currentUser: User;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if(user)
      {
        this.currentUser = user;
        this.userProfile = firebase
          .database()
          .ref(`/userProfile/${user.uid}`);
      }
    })
  }

  getUserProfile(): Reference{
    return this.userProfile;
  }

}
