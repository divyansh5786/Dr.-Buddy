const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")
// simply  booking new appointmnet -> by data given by clinet side
// form req.body
addAppointment = async(req, res) => {
    // taking input fomr req.body which send by client
    const{doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime}=req.body ;
    try {

        var newAppointment = new Appointment({ doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime });
        await newAppointment.save();
         // sending json to client side
        res.status(201).json({message:"appointment booked"});
      } catch (e) {
        res.status(422).json({message:"Error occured while booking appointmnet"});
        console.log(e);
      }
    }
    

// sending function info back to routes
    module.exports = {
        addAppointment,
    };
   
