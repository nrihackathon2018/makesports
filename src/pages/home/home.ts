import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeNewSportsPage } from '../make-new-sports/make-new-sports';
import {JoinSportsPage} from "../join-sports/join-sports";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public nav: NavParams) {

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
