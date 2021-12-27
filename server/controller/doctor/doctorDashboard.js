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
       const totalPatient1=await Appointment.find({doctorID})
       .populate('patientID', { firstname: 1, lastname: 1, dateofbirth: 1, gender: 1, mobile: 1, email: 1 }).select({ patientID: 1 });
       function uniqueByKey(totalPatient1, key) {
        return [...new Map(totalPatient1.map((x) => [x[key], x])).values()];
      }
      const totalPatient=await Appointment.find({doctorID}) 
  
      const list = uniqueByKey(totalPatient1, 'patientID');
  
      var  pendingPatient=0;
      var  todayPendingPatient=0;
      var   completedPatient=0;
      var  todayCompletedPatient=0;
      totalPatient.forEach((element) => {
             // calculating pendingPatient  form a json by for loop ,in condition of status==pending
        if(element.status==="pending")
        pendingPatient++;
         // calculating todayPendingPatient  form a json by for loop ,in condition of status==confirm ,TODAY ONLY
        if(element.status==="confirm"  && (element.appointmentDate.getTime()==myDate.getTime())  )
        todayPendingPatient++;
         // calculating pendingPatient  form a json by for loop ,in condition of status==complete
        if(element.status==="complete" )
        completedPatient++;
          // calculating todayPendingPatient  form a json by for loop ,in condition of status==complete ,TODAY ONLY
        if(element.status==="complete"  && (element.appointmentDate.getTime()==myDate.getTime()) )
        todayCompletedPatient++;

      });

   
      // searching in DB for doctor fees of diven doctorID
     
      console.log("here mine");
console.log(list);
         const doctor=await Doctor.findById(doctorID)
             var totalincome= completedPatient * (parseInt(doctor.Fees));
      
             const totalPatients= list.length;
       console.log( totalPatients)
       console.log( pendingPatient)
       console.log(todayPendingPatient)
       console.log(todayCompletedPatient)
       console.log(completedPatient)
       console.log(totalincome)

 //          var result={totalPatient, pendingPatient,todayPendingPatient,todayCompletedPatient,completedPatient,totalincome}
// sending json to client side
     
     
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
   
