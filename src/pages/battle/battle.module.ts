import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattlePage } from './battle';
import {HomePage} from "../home/home";

@NgModule({
  declarations: [
    BattlePage,
  ],
  imports: [
    IonicPageModule.forChild(BattlePage),
  ],
})
export class BattlePageModule {}


