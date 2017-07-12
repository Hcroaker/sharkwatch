import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AregPage } from '../areg/areg';

//Importanting the firebase auth
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {

    //Sets the auth state of the user
     afAuth.authState.subscribe(user => {
       this.user = user;
       if(user){
         console.log(user)
         this.navCtrl.setRoot(HomePage);
       }
     })

  }

  guser(){
    console.log("general user");
    this.navCtrl.push(HomePage);

  }

  auser(){
    console.log("admin user");
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => console.log(res));

    if(this.user){
      console.log("Logged In Success");
      this.navCtrl.setRoot(HomePage);
    }
    else{
      console.log("No login Success");
    }
  }

  areg(){
    this.navCtrl.push(AregPage);
  }

}
