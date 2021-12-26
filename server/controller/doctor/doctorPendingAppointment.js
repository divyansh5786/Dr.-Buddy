const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")


    // we searching in appointment schema for doctorID which is Gievn and status->pending ,coz we need pending patients list
    // by populating two clusters
PendingAppointment = async (req,res)=>{
// taking input fomr req.body which send by client
    const {doctorID }= req.body;
    const status="pending";
    try {
        var  result = await Appointment.find({ $and: [ { doctorID } , { status }  ] } )
        .populate('patientID',{ firstname: 1 ,lastname: 1, dateofbirth: 1, gender: 1});
        console.log(result);
        console.log("doctor Appointment ,suceess")
        // sending json to client side
        res.status(201).json(result);
      } catch (e) {
        console.log(e);
        res.status(422).json({message:"doctor Appointment ,fails"});
      }
}
// sending function info back to routes
    module.exports = {
        PendingAppointment,
    };
   
