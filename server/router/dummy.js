// const express = require('express');
// const router = express.Router();
// require('../db/conn');
// const mongoose = require('mongoose');
// const path = require('path');
// const Authenticate = require('../middleware/auth');

// userSignup = require("../controller/commonSignUp");
// userLogin = require("../controller/commonLogin")
// doctorProfile= require("../controller/doctor/doctorProfile")
// searchDoctor= require("../controller/doctor/searchDoctor")
// newAppointment=require("../controller/appointment/newAppointment")
// viewAppointment=require("../controller/appointment/viewAppointment")
// patientDetails=require("../controller/patient/patientDetails")
// viewPrescription=require("../controller/appointment/viewPrescription")
// doctorPendingAppointment= require("../controller/doctor/doctorPendingAppointment")

// //  router.get('/profile',Authenticate,doctorProfile.profile)
// router.post('/register', userSignup.register);
// router.post('/searchDoctor',Authenticate, searchDoctor.doctorlist);
// router.post('/login', userLogin.LogIn);

// router.post('/addprofession',Authenticate,doctorProfile.addProfession);
// router.post('/viewdoctor',Authenticate,doctorProfile.viewDoctor);
// router.post('/updateDoctorProfile',Authenticate,doctorProfile.updateDoctorProfile);
// router.post('/showDoctorspatient',Authenticate,doctorProfile.showDoctorsPatient);

// router.post('/doctorPendingAppointment',Authenticate,doctorPendingAppointment.PendingAppointment)
// router.post('/newAppointment',Authenticate,newAppointment.addAppointment);

// router.post('/viewAppointmentPatient',Authenticate,viewAppointment.viewAppointmentPatient);
// router.post('/viewAppointmentDoctor',Authenticate,viewAppointment.viewAppointmentDoctor);
// router.post('/statusUpdate',Authenticate,viewAppointment.statusUpdate);

// router.post('/patientAddMedicalData',Authenticate,patientDetails.addMedicalData);
// router.post('/patientviewMedicalData',Authenticate,patientDetails.viewMedicalData);
// router.post('/viewpatient',Authenticate,patientDetails.viewPatientProfile);
// router.post('/updatepatient',Authenticate,patientDetails.updatePatientProfile);

// router.post('/addPrescription',Authenticate,viewPrescription.addPrescription);



// module.exports = router;