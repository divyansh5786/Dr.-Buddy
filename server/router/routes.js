const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

userSignup = require("../controller/userSignup");
userLogin = require("../controller/userLogin")
doctorProfile= require("../controller/doctorProfile")
searchDoctor= require("../controller/searchDoctor")
newAppointment=require("../controller/newAppointment")
viewAppointment=require("../controller/viewAppointment")
patientDetails=require("../controller/patientDetails")
viewPrescription=require("../controller/viewPrescription")

//  router.get('/profile',Authenticate,doctorProfile.profile)
router.post('/register', userSignup.register);
router.post('/searchDoctor', searchDoctor.doctorlist);
router.post('/login', userLogin.LogIn);

router.post('/addprofession',doctorProfile.addProfession);
router.post('/viewdoctor',doctorProfile.viewDoctor);
router.post('/updateDoctorProfile',doctorProfile.updateDoctorProfile);
router.post('/showDoctorspatient',doctorProfile.showDoctorsPatient);

router.post('/newAppointment',newAppointment.addAppointment);

router.post('/viewAppointmentPatient',viewAppointment.viewAppointmentPatient);
router.post('/viewAppointmentDoctor',viewAppointment.viewAppointmentDoctor);
router.post('/statusUpdate',viewAppointment.statusUpdate);

router.post('/patientAddMedicalData',patientDetails.addMedicalData);
router.post('/patientviewMedicalData',patientDetails.viewMedicalData);
router.post('/viewpatient',patientDetails.viewPatientProfile);
router.post('/updatepatient',patientDetails.updatePatientProfile);

router.post('/addPrescription',viewPrescription.addPrescription);



module.exports = router;