const firebase = require("firebase/app");
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDvoK8xNki9xglDT_iNBonCGKbdCogMY6o",
    authDomain: "huaweiexporter.firebaseapp.com",
    databaseURL: "https://huaweiexporter-default-rtdb.firebaseio.com",
    projectId: "huaweiexporter",
    storageBucket: "huaweiexporter.appspot.com",
    messagingSenderId: "420687984337",
    appId: "1:420687984337:web:f6ec3e21f266d02bde77f0",
    measurementId: "G-18FH7EVG9J"
};

firebase.initializeApp(firebaseConfig);


exports.signInWithEmailPassword = (email, password) => {
    return new Promise(async function(resolve, reject) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage);
            });
    });
}

exports.signUpWithEmailPassword = (email, password) => {
    return new Promise(async function(resolve, reject) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage);
            });
    });
}