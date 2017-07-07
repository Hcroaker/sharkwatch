import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AregPage } from '../areg/areg';

//Importanting the firebase auth
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //Auth state
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {

    //Sets the auth state of the user
    this.user = afAuth.authState;

    //Checking if logging in was successful
    if(this.user){
      console.log("Logged In Success");
      this.navCtrl.setRoot(HomePage)
    }
    else{
      console.log("No login Success");
    }

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
