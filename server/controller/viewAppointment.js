const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")


viewAppointmentPatient = async(req, res) => {
    const{patientID}=req.body ;
    try {
        var  result = await Appointment.find({patientID:patientID}).populate('doctorID',{ firstname: 1 ,lastname: 1,Specialization:1});
        
        console.log("patient Appointment genreated   //viewAppointment - 11");
        console.log(result);
        res.status(201).json({appointments:result});
      } catch (e) {
       
        console.log(e);
        res.status(422).json({message:"Appointment view Error"});
      }
    }

    viewAppointmentDoctor = async(req, res) => {
        const{doctorID,appointmentDate}=req.body ;
        console.log(doctorID+ " "+appointmentDate);
        try {
            var  result = await Appointment.find({doctorID:doctorID,appointmentDate:appointmentDate})
            .populate('patientID',{ firstname: 1 ,lastname: 1, dateofbirth: 1, gender: 1});
            console.log(result);
            console.log("doctor Appointment genreated   //viewAppointment - 11")
            res.status(201).json(result);
          } catch (e) {
            console.log(e);
            res.status(422).json({message:"Appointment view Error"});
          }
        }




        statusUpdate = async(req,res)=>{
             const{id,status}= req.body;
             console.log(id);
             console.log(status);
             try{
                 var appointment= await Appointment.findById(id);
                 appointment.status= status;
                 await appointment.save();
                 res.status(201).json({message:"status updated sucessfully"});
                    
             }catch(e)
             {
               console.log(e);
               res.status(422).json({message:"status NOT updated"});
             }
        }
    module.exports = {
        viewAppointmentPatient,
        viewAppointmentDoctor,
        statusUpdate,
    };
   
