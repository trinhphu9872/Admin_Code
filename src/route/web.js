
const userRoute = require("./user")
const partnerRoute = require("./partner")
const historyRoute = require("./history")
const authRoute = require("./auth")
const initWebRoute = (app) => {
    app.get('/login', function (req, res) {
        res.render('login')
    })
    app.use('/user',userRoute)
    app.use('/partner',partnerRoute)
    app.use('/history',historyRoute)
    app.use('/auth',authRoute)
    // app.get('/', function (req, res) {
    //     res.render('login')
    // })
    app.get('/overview', function (req, res) {
        res.render('overview')
    })

   

 
    // app.get('/hoadonruttien', function (req, res) {
    //     res.render('hoadonruttien')
    // })

    // app.get('/orderlist', function (req, res) {
    //     res.render('orderlist')
    // })


    // return app.use('/', router)
} 

export default initWebRoute;
