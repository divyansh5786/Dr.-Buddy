const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { stringify } = require('nodemon/lib/utils');
// const doctor = require("../module/doctorSchema");

const contestSchema = new mongoose.Schema({
    doctorID: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    patientID: {
        type: String,
        required: true
    },
    concern: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    appointmentDate: {
        type:Date,
        required: true
    },
    appointmentTime : {
        type: String,
        required: true
    },
    
   

 })



const appointment = mongoose.model('Appointment', contestSchema);

module.exports = appointment;