const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")

addAppointment = async(req, res) => {
    const{doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime}=req.body ;
    try {

        var newAppointment = new Appointment({ doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime });
        await newAppointment.save();
       
        res.status(201).json({message:"appointment booked"});
      } catch (e) {
        res.status(422).json({message:"Error occured while booking appointmnet"});
        console.log(e);
      }
    }
    module.exports = {
        addAppointment,
    };
   
