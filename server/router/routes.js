
const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

/// require  files for routes
userSignup = require("../controller/commonSignUp");
userLogin = require("../controller/commonLogin")
doctorProfile= require("../controller/doctor/doctorProfile")
searchDoctor= require("../controller/doctor/searchDoctor")
newAppointment=require("../controller/appointment/newAppointment")
viewAppointment=require("../controller/appointment/viewAppointment")
patientDetails=require("../controller/patient/patientDetails")
viewPrescription=require("../controller/appointment/viewPrescription")
doctorPendingAppointment= require("../controller/doctor/doctorPendingAppointment")
<<<<<<< Updated upstream
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
=======
patientProfile=require("../controller/patient/patientProfile")

 // common login-singup ---1

router.post('/register', userSignup.register);
router.post('/login', userLogin.LogIn);
router.post('/searchDoctor',Authenticate, searchDoctor.doctorlist);
router.get('/profile',Authenticate,doctorProfile.profile)



// doctor's part ,profile and all   ---2 
router.post('/addprofession',Authenticate,doctorProfile.addProfession);
router.post('/viewdoctor',Authenticate,doctorProfile.viewDoctor);
router.post('/updateDoctorProfile',Authenticate,doctorProfile.updateDoctorProfile);
router.post('/showDoctorspatient',Authenticate,doctorProfile.showDoctorsPatient);

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
router.post('/addPrescription',viewPrescription.addPrescription);
router.post('/viewPrescription',viewPrescription.viewPrescriptions);
>>>>>>> Stashed changes


module.exports = router;