import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AregPage } from '../areg/areg';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  guser(){
    console.log("general user");
    this.navCtrl.push(HomePage);

  }

  auser(){
    console.log("admin user");
  }

  areg(){
    this.navCtrl.push(AregPage);
  }

}
