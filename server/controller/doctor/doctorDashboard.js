const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")


doctorDashboard = async(req, res) => {
  // taking input fomr req.body which send by client
    const{doctorID}=req.body ;

    try {
      const date = new Date();
      var myDate;
      DateTransform(date);
      //get Date form system it self
      function DateTransform(date) {
         myDate = new Date(date.getUTCFullYear(), date.getMonth(), (date.getUTCDate()), 0, 0, 0, 0);
          
      }
     
        var status;
  // taken a json named   totalPatient  in which all appointment having  given doctor ID
       const totalPatient=await Appointment.find({doctorID});
    
       // calculating pendingPatient  form a json by for loop ,in condition of status==pending
      var  pendingPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="pending")
        pendingPatient++;

      });

  // calculating todayPendingPatient  form a json by for loop ,in condition of status==confirm ,TODAY ONLY
      var  todayPendingPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="confirm"  && element.appointmentDate===myDate )
        todayPendingPatient++;                    

      });
   
      
       // calculating pendingPatient  form a json by for loop ,in condition of status==complete
      var   completedPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="complete" )
        completedPatient++;

      });
      
       // calculating todayPendingPatient  form a json by for loop ,in condition of status==complete ,TODAY ONLY
      var  todayCompletedPatient=0;
      totalPatient.forEach((element) => {
        if(element.status==="complete"  && (element.appointmentDate.getTime()==myDate.getTime()) )
        todayCompletedPatient++;
       
      
      });
   
      // searching in DB for doctor fees of diven doctorID

         const doctor=await Doctor.findById(doctorID)
             var totalincome= completedPatient * (parseInt(doctor.Fees));
      

       console.log( totalPatient)
       console.log( pendingPatient)
       console.log(todayPendingPatient)
       console.log(todayCompletedPatient)
       console.log(completedPatient)
       console.log(totalincome)

           var result={totalPatient, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}
// sending json to client side
      const totalPatients= totalPatient.length;
     
           var result={totalPatients, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}

        res.status(200).json({result});
      } catch (e) {
        res.status(422).json({message:"Error occured while fetching details of dashboard"});
        console.log(e);
      }
    }

    // sending function info back to routes
    module.exports = {
        doctorDashboard,
        
    };
   
