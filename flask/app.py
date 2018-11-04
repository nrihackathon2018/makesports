#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask, jsonify, request
import ssl
import pandas as pd
import numpy as np
from sklearn.externals import joblib

app = Flask(__name__)

context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
context.load_cert_chain(
    '/etc/letsencrypt/live/yizumi.name/fullchain.pem',
    '/etc/letsencrypt/live/yizumi.name/privkey.pem'
)

@app.route('/api/predict', methods=['POST'])
def predict():
    userid = request.form['userid']
    sex = request.form['sex']
    age = request.form['age']
    height = request.form['height']
    weight = request.form['weight']
    df = pd.DataFrame([[userid, sex, age, height, weight]])
    res = joblib.load('/var/www/flask/svc.pkl').predict(df)
    return jsonify({
        "Code": 0, 
        "Result": {
            "pred": res[0]
    }})

@app.route('/api/predict-sample', methods=['GET'])
def predict_sample():
    userid = '6756'
    sex = '1'
    age = '56'
    height = '176'
    weight = '87'
    df = pd.DataFrame([[userid, sex, age, height, weight]])
    res = joblib.load('/var/www/flask/svc.pkl').predict(df)
    return jsonify({
        "Code": 0, 
        "Result": {
            "pred": res[0]
    }})

if __name__ == "__main__":
    app.run(ssl_context=context, debug=True, host='0.0.0.0', port=3000)
