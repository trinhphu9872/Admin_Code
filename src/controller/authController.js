//const { getAuth,firebase, db}  = require('firebase/auth');

// const auth = getAuth();
// const signIn = signInWithEmailAndPassword();
const {auth,firebase,db,signInWithEmailAndPassword} = require('firebase/auth');

class authController{
    getAuthLogin(req, res){
        let {email, password} = req.body;
            
           
            // Login(email, password)
            // .then( (res) => {
                 return res.redirect("/overview");

            // })
            // .catch((error) => {
            //     return res.redirect("/login");
            // });
     
       
            // Signed in 
            // const user = userCredential.user;
            // ...
 
       
       
    }
}
module.exports = new authController();