const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")

PendingAppointment = async (req,res)=>{

    const {doctorID }= req.body;
    const status="pending";
    try {
        var  result = await Appointment.find({ $and: [ { doctorID } , { status }  ] } )
        .populate('patientID',{ firstname: 1 ,lastname: 1, dateofbirth: 1, gender: 1});
        console.log(result);
        console.log("doctor Appointment ,suceess")
        res.status(201).json(result);
      } catch (e) {
        console.log(e);
        res.status(422).json({message:"doctor Appointment ,fails"});
      }
}
    module.exports = {
        PendingAppointment,
    };
   
