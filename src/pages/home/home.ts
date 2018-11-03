import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MakeNewSportsPage } from '../make-new-sports/make-new-sports';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMakeNewSportsPage(){
    this.navCtrl.push(MakeNewSportsPage);
  }
}
