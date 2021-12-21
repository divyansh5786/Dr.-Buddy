const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")

viewAppointmentPatient = async(req, res) => {
    const{patientID}=req.body ;
    try {
        const  result = await Appointment.find({patientID:patientID});

        console.log("patient Appointment genreated   //viewAppointment - 11")
        res.status(201).json(result);
      } catch (e) {
        console.log(e);
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
          }
        }
    module.exports = {
        viewAppointmentPatient,
        viewAppointmentDoctor,
    };
   
