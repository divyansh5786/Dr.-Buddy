const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const patientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: false
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
        required: false
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    Address: {
        type: String,
        required: false
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

 
 // We are hashing Password
 patientSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();

})



const patient = mongoose.model('Patient', patientSchema);

module.exports = patient;