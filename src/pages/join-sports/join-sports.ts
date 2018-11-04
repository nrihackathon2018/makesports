import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PredictionProvider } from '../../providers/prediction/prediction';
import {HomePage} from "../home/home";

/**
 * Generated class for the MakeNewSportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'join-sports',
  templateUrl: 'join-sports.html',
})
export class JoinSportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public predictionProvider: PredictionProvider) {

    var userid = '2000';
    var sex = '1';
    var age = '40';
    var height = '170';
    var weight = '60';

    predictionProvider.getPrediction(userid, sex, age, height, weight);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinSportsPage');
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
