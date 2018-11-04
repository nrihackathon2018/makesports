import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KintoneProvider } from '../../providers/kintone/kintone';
import {InspectionPage} from "../inspection/inspection";
// import {BattlePage} from "../battle/battle";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  sportsId;
  SportsDetails;
  SportsImage;
  SportsName;
  SportsDesc;

  constructor(public navCtrl: NavController, public navParams: NavParams, public kintoneProvider: KintoneProvider) {
    // userParams is an object we have in our nav-parameters
    this.sportsId = navParams.get('itemId');
    this.SportsDetails = this.kintoneProvider.getMakeSports(this.sportsId);
    console.log("this.SportsDetails",this.SportsDetails);
    this.SportsImage = this.SportsDetails.records[0].画像URL.value;
    // this.SportsImage = "/assets/imgs/snoop_dogg.gif";
    this.SportsName = this.SportsDetails.records[0].スポーツ名.value;
    this.SportsDesc = this.SportsDetails.records[0].スポーツ説明.value
    console.log("this.SportsImage",this.SportsImage);
    console.log("this.SportsName",this.SportsName);
    console.log("this.SportsDesc",this.SportsDesc);
    console.log("this.SportsDetails[0].スポーツID.value",this.SportsDetails.records[0].スポーツID.value)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goToInspectionPage(){
    this.navCtrl.push(InspectionPage);
  }

  // goToBattlePage(){
  //   this.navCtrl.push(BattlePage);
  // }



}
