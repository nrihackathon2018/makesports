
import { Injectable } from '@angular/core';


// const request = import('request') from kintone;
import kintone from 'kintone-nodejs-sdk';

/*
  Generated class for the KintoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KintoneProvider {
  SportsDetails;
  constructor() {
    
  }

  getMakeSports(sportsId){
    let APIToken = 'Kg5RgjQmtvfCjeEfixorQPe0DqpqQkrayHYNtPj4'; // your API Token

    let kintoneAuth = new kintone.Auth();

    kintoneAuth.setApiToken(APIToken);

    let myDomainName = 'devlgapom.cybozu.com';

    let kintoneConnection = new kintone.Connection(myDomainName, kintoneAuth);

    let kintoneRecord = new kintone.Record(kintoneConnection);
    // let appID = 9; // target appID

    // let recordID = sportsId;
    // let recordID = 1;
    if(sportsId == 1){
      this.SportsDetails ={
        "records": [
          {
            "スポーツID": {
              "type": 'NUMBER',
              "value": "1"
            },
            "スポーツ名": {
              "type": "SINGLE_LINE_TEXT",
              "value": [
                "りんごの皮むき"
              ]
            },
            "スポーツ説明": {
              "type": "SINGLE_LINE_TEXT",
              "value": "りんごまるごとの皮の早むき。"
            },
            "画像URL": {
              "type": "RECORD_NUMBER",
              "value": "/assets/imgs/apple.jpg"
            },
            "更新者": {
              "type": "MODIFIER",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "作成者": {
              "type": "CREATOR",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "$revision": {
              "type": "__REVISION__",
              "value": "1"
            },
            "更新日時": {
              "type": "UPDATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "作成日時": {
              "type": "CREATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "$id": {
              "type": "__ID__",
              "value": "1"
            }
          }
        ],
        "totalCount": null
       }
      return this.SportsDetails;
    }

    if(sportsId == 2){
      this.SportsDetails ={
        "records": [
          {
            "スポーツID": {
              "type": 'NUMBER',
              "value": "2"
            },
            "スポーツ名": {
              "type": "SINGLE_LINE_TEXT",
              "value": [
                "ベイブレード"
              ]
            },
            "スポーツ説明": {
              "type": "SINGLE_LINE_TEXT",
              "value": "ぶーーーーーん"
            },
            "画像URL": {
              "type": "RECORD_NUMBER",
              "value": "/assets/imgs/koma.jpg"
            },
            "更新者": {
              "type": "MODIFIER",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "作成者": {
              "type": "CREATOR",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "$revision": {
              "type": "__REVISION__",
              "value": "1"
            },
            "更新日時": {
              "type": "UPDATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "作成日時": {
              "type": "CREATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "$id": {
              "type": "__ID__",
              "value": "1"
            }
          }
        ],
        "totalCount": null
       }
      return this.SportsDetails;
    }

    if(sportsId == 3){
      this.SportsDetails ={
        "records": [
          {
            "スポーツID": {
              "type": 'NUMBER',
              "value": "3"
            },
            "スポーツ名": {
              "type": "SINGLE_LINE_TEXT",
              "value": [
                "トランプタワー組立て"
              ]
            },
            "スポーツ説明": {
              "type": "SINGLE_LINE_TEXT",
              "value": "Great America"
            },
            "画像URL": {
              "type": "RECORD_NUMBER",
              "value": "/assets/imgs/tramp.jpg"
            },
            "更新者": {
              "type": "MODIFIER",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "作成者": {
              "type": "CREATOR",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "$revision": {
              "type": "__REVISION__",
              "value": "1"
            },
            "更新日時": {
              "type": "UPDATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "作成日時": {
              "type": "CREATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "$id": {
              "type": "__ID__",
              "value": "1"
            }
          }
        ],
        "totalCount": null
       }
      return this.SportsDetails;
    }

    if(sportsId == 4){
      this.SportsDetails ={
        "records": [
          {
            "スポーツID": {
              "type": 'NUMBER',
              "value": "4"
            },
            "スポーツ名": {
              "type": "SINGLE_LINE_TEXT",
              "value": [
                "けんだま"
              ]
            },
            "スポーツ説明": {
              "type": "SINGLE_LINE_TEXT",
              "value": "穴♂にさす"
            },
            "画像URL": {
              "type": "RECORD_NUMBER",
              "value": "/assets/imgs/kenball.jpg"
            },
            "更新者": {
              "type": "MODIFIER",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "作成者": {
              "type": "CREATOR",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "$revision": {
              "type": "__REVISION__",
              "value": "1"
            },
            "更新日時": {
              "type": "UPDATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "作成日時": {
              "type": "CREATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "$id": {
              "type": "__ID__",
              "value": "1"
            }
          }
        ],
        "totalCount": null
       }
      return this.SportsDetails;
    }

    if(sportsId == 5){
      this.SportsDetails ={
        "records": [
          {
            "スポーツID": {
              "type": 'NUMBER',
              "value": "5"
            },
            "スポーツ名": {
              "type": "SINGLE_LINE_TEXT",
              "value": [
                "ストップウォッチ止め"
              ]
            },
            "スポーツ説明": {
              "type": "SINGLE_LINE_TEXT",
              "value": "8.6秒バズーカ"
            },
            "画像URL": {
              "type": "RECORD_NUMBER",
              "value": "/assets/imgs/stop.png"
            },
            "更新者": {
              "type": "MODIFIER",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "作成者": {
              "type": "CREATOR",
              "value": {
                "code": "Administrator",
                "name": "Administrator"
              }
            },
            "$revision": {
              "type": "__REVISION__",
              "value": "1"
            },
            "更新日時": {
              "type": "UPDATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "作成日時": {
              "type": "CREATED_TIME",
              "value": "2017-02-22T16:49:00Z"
            },
            "$id": {
              "type": "__ID__",
              "value": "1"
            }
          }
        ],
        "totalCount": null
       }
      return this.SportsDetails;
    }

    // kintoneRecord.getRecord(appID,recordID)
    //     .then((rsp) => {
    //         console.log(rsp);
    //         return rsp;
    //     })
    //     .catch((err) => {
    //         console.log(err.get());
    //     });
    // return;
  }
}
