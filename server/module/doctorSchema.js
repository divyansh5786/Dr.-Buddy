const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const contestSchema = new mongoose.Schema({
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
    Online: {
        type: Boolean,
        required: false
    },
    Fees: {
        type: Number,
        required: false
    },
    Degree:[{
        Name: {
            type: String,
            required: false
        },
        Institute: {
            type: String,
            required: false
        },
        Duration: {
            type: String,
            required: false
        },
        
    }],
    Specialization: {
        type: String,
        required: false
    },
    Patients:{
        type:Array,
        required:false
    },
    Appointments: {
        type: Array,
        required: false
    },

 })



const doctor = mongoose.model('Doctor', contestSchema);

module.exports = doctor;