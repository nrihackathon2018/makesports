import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PredictionProvider } from '../../providers/prediction/prediction';
import { HomePage } from "../home/home";
import { KintoneProvider } from '../../providers/kintone/kintone';

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
  private sportsId;
  sportsName : String;
  sportsDesc : String;
  sportsImage : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public predictionProvider: PredictionProvider, public kintoneProvider: KintoneProvider) {

    var userid = '2000';
    var sex = '1';
    var age = '40';
    var height = '170';
    var weight = '60';
    var sportsId = predictionProvider.getPrediction(userid, sex, age, height, weight);
    sportsId = 3

    let SportsDetails = this.kintoneProvider.getMakeSports(sportsId);
    this.sportsName = SportsDetails.records[0].スポーツ名.value;
    this.sportsDesc = SportsDetails.records[0].スポーツ説明.value
    this.sportsImage = SportsDetails.records[0].画像URL.value;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinSportsPage');
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
