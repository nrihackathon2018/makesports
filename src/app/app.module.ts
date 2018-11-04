import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer' ;

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MakeNewSportsPage } from '../pages/make-new-sports/make-new-sports';
import { KintoneProvider } from '../providers/kintone/kintone';
import { JoinSportsPage } from "../pages/join-sports/join-sports";
import { DetailPage } from "../pages/detail/detail";
import { PredictionProvider } from '../providers/prediction/prediction';
import {HttpClientModule} from '@angular/common/http'
import {InspectionPage} from "../pages/inspection/inspection";
import {BattlePage} from "../pages/battle/battle";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MakeNewSportsPage,
    JoinSportsPage,
    DetailPage,
    InspectionPage,
    BattlePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MakeNewSportsPage,
    JoinSportsPage,
    DetailPage,
    InspectionPage,
    BattlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KintoneProvider,
    PredictionProvider,
  ]
})
export class AppModule {}
