import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the MakeNewSportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-new-sports',
  templateUrl: 'make-new-sports.html',
})
export class MakeNewSportsPage {

  private inputFile: File;
  private sportsName : String;
  private sportsDesc : String;
  private imageDataBase64 : String

  constructor(public navCtrl: NavController,public nav: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private camera: Camera) {
  }

  addPic(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageDataBase64 = imageData
    }, (err) => {
    });
  }

  deletePic(){
    const confirm = this.alertCtrl.create({
      title: '確認画面',
      message: '画像を削除しますか？',
      buttons: [
        {
          text: 'いいえ',
          handler: () => {
            confirm.dismiss();
          }
        },
        {
          text: 'はい',
          handler: () => {
            this.imageDataBase64 = null;
          }
        }
      ]
    });
    confirm.present();
  }

  confirm(){
    const actionSheet = this.alertCtrl.create({
      title: '新しい協議を登録しますか',
      buttons: [
        {
          text: 'はい',
          role: 'destructive',
          handler: () => {
            this.goToHomePageCreateNewSports()
            console.log('Destructive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeNewSportsPage');
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToHomePageCreateNewSports(){
    this.navCtrl.push(HomePage, {sportsName:this.sportsName, sportsDesc: this.sportsDesc, sportsImage: this.imageDataBase64});
  }






  fileUp(ev: Event) {
    this.inputFile = (<HTMLInputElement>ev.srcElement).files[0];
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: '読み込み中...'
    });
    loading.present();
    // var reader = new FileReader();

    // reader.readAsText(this.inputFile, "Shift-JIS");
    // reader.onload = () => {
    //   loading.dismiss();
    // }

    // <img src="data:image/png;base64,xxxxx..." />
  }
}
