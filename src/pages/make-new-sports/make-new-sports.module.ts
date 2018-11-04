import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeNewSportsPage } from './make-new-sports';

@NgModule({
  declarations: [
    MakeNewSportsPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeNewSportsPage),
  ],
})
export class MakeNewSportsPageModule {
}
