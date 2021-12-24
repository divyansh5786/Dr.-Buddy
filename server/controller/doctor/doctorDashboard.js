const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")

doctorDashboard = async(req, res) => {
    const{doctorID}=req.body ;
    try {
      const date = new Date();
      var myDate;
      DateTransform(date);
      function DateTransform(date) {
         myDate = new Date(date.getUTCFullYear(), date.getMonth(), (date.getUTCDate()), 0, 0, 0, 0);
          
      }
     
        var status;
       const totalPatient=await Appointment.find({doctorID}).count();
       status="pending";
       const pendingPatient=await Appointment.find({ $and: [ { doctorID } , { status }  ] } ).count();
       status="confirm";
        const todayPendingPatient=await Appointment.find({ $and: [ { doctorID } , { status } ,{ appointmentDate : myDate} ] } ).count();
       status="complete";
         const completedPatient=await Appointment.find({ $and: [ { doctorID } , { status }  ] } ).count();
         const todayCompletedPatient=await Appointment.find({ $and: [ { doctorID } , { status } ,{ appointmentDate : myDate} ] } ).count();
         const doctor=await Doctor.findById(doctorID)
             var totalincome= completedPatient * (parseInt(doctor.Fees));
      
       console.log( totalPatient)
       console.log( pendingPatient)
       console.log(todayPendingPatient)
       console.log(todayCompletedPatient)
       console.log(completedPatient)
       console.log(totalincome)
           var result={totalPatient, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}
        res.status(200).json({result});
      } catch (e) {
        res.status(422).json({message:"Error occured while fetching details of dashboard"});
        console.log(e);
      }
    }
    module.exports = {
        doctorDashboard,
        
    };
   
