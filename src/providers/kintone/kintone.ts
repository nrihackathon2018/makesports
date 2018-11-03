
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

  constructor() {
  }
   
  getMakeSports(sportsId){
    let APIToken = 'qt9HYoGszroSk9oVUmVt4XxCmklztDkaaHJOn77n'; // your API Token
    
    let kintoneAuth = new kintone.Auth();
    
    kintoneAuth.setApiToken(APIToken);
    
    let myDomainName = 'devlgapom.cybozu.com';
    
    let kintoneConnection = new kintone.Connection(myDomainName, kintoneAuth);
    
    let kintoneRecord = new kintone.Record(kintoneConnection);
    let appID = 1; // target appID
    
    let recordID = sportsId;
    kintoneRecord.getRecord(appID,recordID)
        .then((rsp) => {
            console.log(rsp);
            return rsp;
        })
        .catch((err) => {
            console.log(err.get());
        });
  }
}
