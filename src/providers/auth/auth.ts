//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User } from '@firebase/auth-types';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public currentUser = firebase.auth().currentUser.uid; 
  constructor() {
    console.log('Hello AuthProvider Provider');
    
  }

  loginUser(email: string, password: string): Promise<void>
  {
    return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password);
  }

  signUpUser(email: string, password: string): Promise<void>
  {   
    firebase.auth().onAuthStateChanged( newUser => {
      if (newUser) { this.currentUser = newUser.uid }
    });
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(newUser => {  // resolve
      firebase
        .database()
        .ref(`/userProfile/${this.currentUser}/email`)
        .set(email);
    })
    .catch(error => {
      console.error(error);
      throw new Error(error);
    });
  }

  resetPassword(email: string): Promise<void>
  {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void>
  {
    const userId: string = firebase.auth().currentUser.uid;
    firebase.database()
      .ref(`/userProfile/${userId}`)
      .off();
      return firebase.auth().signOut();
  }

}
