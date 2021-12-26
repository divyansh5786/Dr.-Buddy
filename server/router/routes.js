
const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

userSignup = require("../controller/commonSignUp");
userLogin = require("../controller/commonLogin")
doctorProfile= require("../controller/doctor/doctorProfile")
searchDoctor= require("../controller/doctor/searchDoctor")
newAppointment=require("../controller/appointment/newAppointment")
viewAppointment=require("../controller/appointment/viewAppointment")
patientDetails=require("../controller/patient/patientDetails")
viewPrescription=require("../controller/appointment/viewPrescription")
doctorPendingAppointment= require("../controller/doctor/doctorPendingAppointment")
doctorDashboard=require("../controller/doctor/doctorDashboard");
//  router.get('/profile',Authenticate,doctorProfile.profile)
router.post('/register', userSignup.register);//post
router.post('/searchDoctor', searchDoctor.doctorlist);//get
router.post('/login', userLogin.LogIn);//post

router.post('/addprofession',doctorProfile.addProfession);//put
router.post('/viewdoctor',doctorProfile.viewDoctor);//post
router.post('/updateDoctorProfile',doctorProfile.updateDoctorProfile);//put
router.post('/showDoctorspatient',doctorProfile.showDoctorsPatient);//post

router.post('/doctorPendingAppointment',doctorPendingAppointment.PendingAppointment)//post
router.post('/newAppointment',newAppointment.addAppointment);//post

router.post('/viewAppointmentPatient',Authenticate,viewAppointment.viewAppointmentPatient);//post
router.post('/viewAppointmentDoctor',viewAppointment.viewAppointmentDoctor);//post
router.post('/statusUpdate',viewAppointment.statusUpdate);//put

router.post('/patientAddMedicalData',patientDetails.addMedicalData);//put
router.post('/patientviewMedicalData',patientDetails.viewMedicalData);//post
router.post('/viewpatient',patientDetails.viewPatientProfile);//post
router.post('/updatepatient',patientDetails.updatePatientProfile);//put

router.post('/addPrescription',viewPrescription.addPrescription);//put
router.post('/viewPrescription',viewPrescription.viewPrescriptions);//post


router.post('/doctorDashboard',doctorDashboard.doctorDashboard);


module.exports = router;
