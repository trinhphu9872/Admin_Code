const firebase = require("firebase");

const { signInWithEmailAndPassword,auth }  = require('firebase/auth');

const app = require('../../firebase/firebase')


 export function login(email, password){
    return app.auth().signInWithEmailAndPassword(email, password);
 }