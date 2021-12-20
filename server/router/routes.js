const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

userSignup = require("../controller/userSignup");
userLogin = require("../controller/userLogin")
userProfile= require("../controller/userProfile")
searchDoctor= require("../controller/searchDoctor")


router.post('/register', userSignup.register);
router.get('/searchDoctor', searchDoctor.doctorlist);
router.post('/login', userLogin.LogIn);
router.post('/profile',Authenticate,userProfile.profile)
router.post('/addprofession',userProfile.addProfession);

module.exports = router;