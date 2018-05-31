import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alert, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm: FormGroup;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder) {

      this.resetPasswordForm = formBuilder.group({
        email: [
          '',
          Validators.compose([Validators.required])
        ]
      });
  }

  resetPassword(): void {
    if(!this.resetPasswordForm.valid){
      console.log(`Form belum valid: ${this.resetPasswordForm.value}`);
    }
    else{
      const email: string = this.resetPasswordForm.value.email;

      this.authProvider.resetPassword(email).then(user => {
        const alert: Alert = this.alertCtrl.create({
          message: 'Cek email',
          buttons: [{
             text: 'OK',
             role: 'cancel',
             handler: () => {
               this.navCtrl.pop();
             }
          }]
        });
        alert.present();
      },
      error => {
        const alertError = this.alertCtrl.create({
          message: error.message,
          buttons: [{text: 'OK', role: 'cancel'}]

        });
      }    
    );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
