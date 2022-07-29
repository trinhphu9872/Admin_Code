const express = require('express');
const route = express.Router();
import homeController from "../controller/homeController";

 route.get('/listuser', homeController.getListUser)
 route.get('/detail/user/:mssv', homeController.getDetail)
 route.post('/naptienuser', homeController.naptienUser)
 route.get('/studentlist', homeController.getListStudent)
 route.get('/student/:mssv', homeController.getDetailStudent)
    
 module.exports = route