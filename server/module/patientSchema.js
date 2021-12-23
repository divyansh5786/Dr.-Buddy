const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const patientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
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
        required: true,
        unique:true
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
    dateofbirth:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },


    medicalData:[{
        date:{
            type: String,
            required: false
        },
        bloodPressure: {
            type: String,
            required: false
        },
        bodyTempreture: {
            type: String,
            required: false
        },
        sugar: {
            type: String,
            required: false
        },
        pulse: {
            type: String,
            required: false
        },
        
    }],
    
 })



const patient = mongoose.model('Patient', patientSchema);

module.exports = patient;