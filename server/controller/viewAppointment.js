const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")

makearray = async(result)=>{
  
}
viewAppointmentPatient = async(req, res) => {
    const{patientID}=req.body ;
    try {
        var  result = await Appointment.find({patientID:patientID}).populate('doctorID',{ firstname: 1 ,lastname: 1,Specialization:1});
        
        console.log("patient Appointment genreated   //viewAppointment - 11");
        console.log(result);
        res.status(201).json({appointments:result});
      } catch (e) {
        res.status(422).json({message:"error occured"});
        console.log(e);
        res.status(422).json({message:"Appointment view Error"});
      }
    }

    viewAppointmentDoctor = async(req, res) => {
        const{doctorID,appointmentDate}=req.body ;
        try {
            const  result = await Appointment.find({doctorID:doctorID},{appointmentDate:appointmentDate});
    
            console.log("doctor Appointment genreated   //viewAppointment - 11")
            res.status(201).json(result);
          } catch (e) {
            console.log(e);
            res.status(422).json({message:"Appointment view Error"});
          }
        }
    module.exports = {
        viewAppointmentPatient,
        viewAppointmentDoctor,
    };
   
