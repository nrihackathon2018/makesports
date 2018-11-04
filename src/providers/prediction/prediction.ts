import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare function require(x: string): any;

/*
  Generated class for the PredictionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PredictionProvider {


  constructor(public http: HttpClient) {
    console.log('Hello PredictionProvider Provider');
  }

  getPrediction(userid: String, sex: String, age: String, height: String, weight: String){
    const request = require('request');

    let obj = {
      userid: userid,
      sex: sex,
      age: age,
      height: height,
      weight: weight,
    };

    let params = {
      url: 'https://yizumi.name:3000/api/predict',
      method: 'POST',
      json: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: obj,
    };
    
    return request(params, function(err, resp, body) {
      if (err) {
        console.log(err);
        return 1;
      }
      console.log(body);
      return body.Result.pred;
    });
  }

}
