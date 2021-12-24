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
       const totalPatient=await Appointment.find({doctorID});
    
      var  pendingPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="pending")
        pendingPatient++;

      });

      var  todayPendingPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="confirm"  && element.appointmentDate===myDate )
        todayPendingPatient++;                    

      });

      var   completedPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="complete" )
        completedPatient++;

      });
      
      var  todayCompletedPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="complete"  && (element.appointmentDate.getTime()==myDate.getTime()) )
        todayCompletedPatient++;
       
      
      });
   

         const doctor=await Doctor.findById(doctorID)
             var totalincome= completedPatient * (parseInt(doctor.Fees));
      

      //  console.log( totalPatient)
      //  console.log( pendingPatient)
      //  console.log(todayPendingPatient)
      //  console.log(todayCompletedPatient)
      //  console.log(completedPatient)
      //  console.log(totalincome)
           var result={totalPatient, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}

      const totalPatients= totalPatient.length;
     
           var result={totalPatients, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}

        res.status(200).json({result});
      } catch (e) {
        res.status(422).json({message:"Error occured while fetching details of dashboard"});
        console.log(e);
      }
    }
    module.exports = {
        doctorDashboard,
        
    };
   
