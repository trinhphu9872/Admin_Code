const express = require('express');
const route = express.Router();
import authController from "../controller/authController";

route.post('/login', authController.getAuthLogin)


module.exports = route