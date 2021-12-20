const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    doctorID: {
        type: String,
        required: true
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
        type: Date,
        required: true
    },
    
   

 })



const appointment = mongoose.model('Appointment', contestSchema);

module.exports = appointment;