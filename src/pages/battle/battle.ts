import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the BattlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battle',
  templateUrl: 'battle.html',
})
export class BattlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BattlePage');
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  battleWin() {
    document.getElementById("movie").classList.add("win");
  }


}
