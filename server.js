// import { express } from 'express'
// import { configViewEngine } from './src/configs/viewEngine'
import initWebRoute from './src/route/web'

const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser');
const dbRef = require('./firebase/firebase')

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })

//express
app.use(bodyParser.json())
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.use(express.static('./src/views'))
app.set("view engine", "ejs");
app.set("views", "./src/views")

app.use(express.static('./src/views'));

//init web route
initWebRoute(app)


const server = app.listen(3000, function () {
    const host = 'localhost'
    const port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function addUserBtnClicked(){
    const addUserBtnUI = document.getElementById("add-user-btn");
    addUserBtnUI.addEventListener("click", addUserBtnClicked);
    const usersRef = dbRef.child('users');
 }

// database
// const firebaseConfig = {
//    databaseURL: 'https://vlwallet-79986-default-rtdb.firebaseio.com/'
// }
// const firebase = initializeApp(firebaseConfig)
// const db = getDatabase(firebase)


// function writeUserData(
//   userId,
//   name,
//   email,
//   password,
//   emailVerified,
//   imageUrl,
//   soDu
// ) {
//   const database = getDatabase();
//   set(ref(db, "users/" + userId), {
//     uid: userId,
//     tenDT: name,
//     email: email,
//     emailVerified: emailVerified,
//     password: password,
//     profile_picture: imageUrl,
//     soDu: soDu,
//   });
// }



// ${"btnlogin"}.click(function(){
//       var email = ${"inpemail"}.val();
//       var password = ${"inppassword"}.val();

//       if(email !== null && password !== null){
//          var result = firebase.auth().signInWithEmailAndPassword(email, password);

//          result.catch(function(error){
//             var errorCode = error.code;
//             var errorMessages = error.message;
//          })
//       }else{
//          window.alert("Please enter your email")
//       }
// });

// function btnlogin(e) {
//    var userID = e.target.getAttribute("child-key");
//    const userRef = dbRef.child('users/' + userID);
//    const userDetailUI = document.getElementById("userDetail");
//    userDetailUI.innerHTML = ""
//    userRef.on("child_added", snap => {
//        var $p = document.createElement("p");
//        $p.innerHTML = snap.key + " - " + snap.val() userDetailUI.append($p);
//    });
// }
