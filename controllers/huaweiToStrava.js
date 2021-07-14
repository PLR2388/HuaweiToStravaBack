const constant = require('../variable');
const admin = require('firebase-admin');

const auth = require("firebase/auth");

const serviceAccount = require("../huaweiexporter-firebase-adminsdk-nztmk-601fd0e9cd.json");

const firebaseApi = require('./firebase');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://huaweiexporter-default-rtdb.firebaseio.com"
});

exports.login = (req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    try {
        const resultLogin = firebaseApi.signInWithEmailPassword(email, password);
        res.status(200).send(resultLogin);
    } catch (e) {
        res.status(401).send(e.toString());
    }
};

exports.signUp = (req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    try {
        const resultSignUp = firebaseApi.signUpWithEmailPassword(email, password);
        res.status(200).send(resultSignUp);
    } catch (e) {
        res.status(401).send(e.toString());
    }
};