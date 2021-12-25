
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
router.post('/register', userSignup.register);
router.post('/searchDoctor', searchDoctor.doctorlist);
router.post('/login', userLogin.LogIn);

router.post('/addprofession',doctorProfile.addProfession);
router.post('/viewdoctor',doctorProfile.viewDoctor);
router.post('/updateDoctorProfile',doctorProfile.updateDoctorProfile);
router.post('/showDoctorspatient',doctorProfile.showDoctorsPatient);

router.post('/doctorPendingAppointment',doctorPendingAppointment.PendingAppointment)
router.post('/newAppointment',newAppointment.addAppointment);

router.post('/viewAppointmentPatient',Authenticate,viewAppointment.viewAppointmentPatient);
router.post('/viewAppointmentDoctor',viewAppointment.viewAppointmentDoctor);
router.post('/statusUpdate',viewAppointment.statusUpdate);

router.post('/patientAddMedicalData',patientDetails.addMedicalData);
router.post('/patientviewMedicalData',patientDetails.viewMedicalData);
router.post('/viewpatient',patientDetails.viewPatientProfile);
router.post('/updatepatient',patientDetails.updatePatientProfile);

router.post('/addPrescription',viewPrescription.addPrescription);
router.post('/viewPrescription',viewPrescription.viewPrescriptions);


router.post('/doctorDashboard',doctorDashboard.doctorDashboard);


module.exports = router;
