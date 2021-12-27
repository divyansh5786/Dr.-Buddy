
const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

/// require  files for routes
userSignup = require("../controller/commonUser/commonSignUp");
userLogin = require("../controller/commonUser/commonLogin")
doctorProfile= require("../controller/doctor/doctorProfile")
searchDoctor= require("../controller/doctor/searchDoctor")
newAppointment=require("../controller/appointment/newAppointment")
viewAppointment=require("../controller/appointment/viewAppointment")
patientDetails=require("../controller/patient/patientDetails")
viewPrescription=require("../controller/appointment/viewPrescription")
doctorPendingAppointment= require("../controller/doctor/doctorPendingAppointment")
patientProfile=require("../controller/patient/patientProfile")
doctorDashboard=require("../controller/doctor/doctorDashboard");
googleLogin=require("../controller/commonUser/googleLogin")
ratingDoctor=require("../controller/doctor/ratingDoctor")


 // common login-singup ---1

router.post('/register', userSignup.register);
router.post('/login', userLogin.LogIn);
router.post('/searchDoctor',Authenticate, searchDoctor.doctorlist);

// doctor's part ,profile and all   ---2 
router.post('/addprofession',Authenticate,doctorProfile.addProfession);
router.post('/viewdoctor',Authenticate,doctorProfile.viewDoctor);
router.post('/updateDoctorProfile',Authenticate,doctorProfile.updateDoctorProfile);
router.post('/showDoctorspatient',Authenticate,doctorProfile.showDoctorsPatient);
router.post('/doctorDashboard',Authenticate,doctorDashboard.doctorDashboard);
router.post('/ratingDoctor',Authenticate,ratingDoctor.ratingDoctor);
router.post('/viewRatingDoctor',Authenticate,ratingDoctor.viewRating)

 // all about Appointment's  -- 3
router.post('/doctorPendingAppointment',Authenticate,doctorPendingAppointment.PendingAppointment)
router.post('/newAppointment',Authenticate,newAppointment.addAppointment);
router.post('/viewAppointmentPatient',Authenticate,viewAppointment.viewAppointmentPatient);
router.post('/viewAppointmentDoctor',Authenticate,viewAppointment.viewAppointmentDoctor);
router.post('/statusUpdate',Authenticate,viewAppointment.statusUpdate);

// patient's part ,profile and all  ---4
router.post('/patientAddMedicalData',Authenticate,patientDetails.addMedicalData);
router.post('/patientviewMedicalData',Authenticate,patientDetails.viewMedicalData);
router.post('/viewpatient',Authenticate,patientProfile.viewPatientProfile);
router.post('/updatepatient',Authenticate,patientProfile.updatePatientProfile);


// about Prescription -- 5
router.post('/addPrescription',Authenticate,viewPrescription.addPrescription);
router.post('/viewPrescription',Authenticate,viewPrescription.viewPrescriptions);

//google Login
router.post('/googlelogin',googleLogin.googleLogin);
router.post('/forgetPassword',userLogin.forgetPassword);


module.exports = router;