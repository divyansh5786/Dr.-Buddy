const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const patientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
   

    // Appointments: {
    //     type: Array,
    //     required: true
    // },
    // Appointments:[gvhb,hhjb,64534],
    // prescription:[sfv,rsv,54]

 })



const patient = mongoose.model('Patient', patientSchema);

module.exports = patient;