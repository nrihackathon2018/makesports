import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeNewSportsPage } from '../make-new-sports/make-new-sports';
import {JoinSportsPage} from "../join-sports/join-sports";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageDataBase64;
  sportsDesc;
  sportsName = null;
  constructor(public navCtrl: NavController,public nav: NavParams) {
    this.sportsName = nav.get('sportsName');
    this.sportsDesc = nav.get('sportsDesc');
    this.imageDataBase64 = nav.get('imageDataBase64');
  }
  goToMakeNewSportsPage(){
    this.navCtrl.push(MakeNewSportsPage);
  }
  goToJoinSportsPage(){
    this.navCtrl.push(JoinSportsPage);
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToDetailPage(id: number) {
    this.navCtrl.push(DetailPage,{itemId:id});
  }
}
