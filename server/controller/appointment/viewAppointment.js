const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")


viewAppointmentPatient = async(req, res,next) => {
   // taking input fomr req.body which send by client
    const{patientID}=req.body ;
   // console.log(req.body);
    console.log(patientID);
    try {
         // we searching in appointment schema for patientID which is Gievn data of docotr ,coz we need pending doctor list list
    // by populating two clusters
        var  result = await Appointment.find({patientID:patientID}).populate('doctorID',{ firstname: 1 ,lastname: 1,Specialization:1});
        
        console.log("patient Appointment genreated   //viewAppointment - 11");
        console.log(result);
          // sending json to client side
        res.status(201).json({result});
      } catch (e) {
       console.log("here come");
        console.log(e);
        res.status(422).json({message:"Appointment view Error"});
      }
    }

       // we searching in appointment schema for doctorID which is Gievn and status->pending ,coz we need pending patients list
    // by populating two clusters
    viewAppointmentDoctor = async(req, res) => {
       // taking input fomr req.body which send by client
        const{doctorID,appointmentDate}=req.body ;
        console.log(doctorID+ " "+appointmentDate);
        try {
            var  result = await Appointment.find({doctorID:doctorID,appointmentDate:appointmentDate})
            .populate('patientID',{ firstname: 1 ,lastname: 1, dateofbirth: 1, gender: 1});
            console.log(result);
            console.log("doctor Appointment genreated  ");
              // sending json to client side
            res.status(201).json(result);
          } catch (e) {
            console.log(e);
            res.status(422).json({message:"Appointment view Error"});
          }
        }



// we need to update status of appointment  form pending->confrom or cancelled
 statusUpdate = async(req,res)=>{
           // taking input fomr req.body which send by client
             const{id,status}= req.body;
             console.log(id);
             console.log(status);
             try{
                 var appointment= await Appointment.findById(id);
                 // fuure status 
                 appointment.status= status;
                 await appointment.save();
                   // sending json to client side
                 res.status(201).json({message:"status updated sucessfully"});
                    
             }catch(e)
             {
               console.log(e);
               res.status(422).json({message:"status NOT updated"});
             }
        }
        

// sending function info back to routes
    module.exports = {
        viewAppointmentPatient,
        viewAppointmentDoctor,
        statusUpdate,
    };
   
