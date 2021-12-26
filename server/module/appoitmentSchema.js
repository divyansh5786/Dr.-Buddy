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
        type: Schema.Types.ObjectId,
        ref: "Patient"
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
    meetingID : {
        type:String,
        reuired: false
    },
    meetingpwd : {
        type:String,
        reuired: false
    },
    diagnosis: {
        type: Array,
        required: false
    },
    medicine: {
        type: Array,
        required: false
    },
    tests: {
        type: Array,
        required: false
    },
   followUp : {
        type: Date,
        required: false
    },
    
   

 })



const appointment = mongoose.model('Appointment', contestSchema);

module.exports = appointment;