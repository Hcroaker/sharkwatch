import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(user => {
      this.user = user;
      if(user){
        console.log(user)
      }
    })

  }



}
