const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")

addAppointment = async(req, res) => {
    const{doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime}=req.body ;
    try {
        var newAppointment = new Appointment({ doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime });
        await newAppointment.save();
        console.log("new Appointment is save  // search doctor -32")
        res.status(201).json({ message: "new Appointment is save" });
      } catch (e) {
        console.log(e);
      }
    }
    module.exports = {
        addAppointment,
    };
   
