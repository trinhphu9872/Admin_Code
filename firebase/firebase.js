// const { getDatabase }  = require('firebase/database');
// const { initializeApp } = require('firebase/app');
const firebase = require("firebase");
const { signInWithEmailAndPassword,auth }  = require('firebase/auth');

const app = firebase.initializeApp({
    apiKey: "AIzaSyBPABUcA1jVI3_tBjI89ueBkt-5V7o6y9Q",
    authDomain: "vlwallet-79986.firebaseapp.com",
    databaseURL: "https://vlwallet-79986-default-rtdb.firebaseio.com",
 })

const db = app.database()

module.exports  = {db,signInWithEmailAndPassword,auth,app};

