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
newAppointment=require("../controller/newAppointment")
viewAppointment=require("../controller/viewAppointment")

router.post('/register', userSignup.register);
router.get('/searchDoctor', searchDoctor.doctorlist);
router.post('/login', userLogin.LogIn);
router.get('/profile',Authenticate,userProfile.profile)
router.post('/addprofession',userProfile.addProfession);
router.post('/newAppointment',newAppointment.addAppointment);
router.post('/viewAppointmentPatient',viewAppointment.viewAppointmentPatient);
router.post('/viewAppointmentDoctor',viewAppointment.viewAppointmentDoctor);


module.exports = router;