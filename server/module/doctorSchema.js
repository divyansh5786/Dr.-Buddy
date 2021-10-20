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
    // email: {
    //     type: String,
    //     required: true
    // },
    // cityCode: {
    //     type: String,
    //     required: true
    // },
    // AddLine1: {
    //     type: String,
    //     required: true
    // },
    // AddLine2: {
    //     type: String,
    //     required: true
    // },
    // Online: {
    //     type: Boolean,
    //     required: true
    // },
    // Fees: {
    //     type: Number,
    //     required: true
    // },
    // Degree:[{
    //     Name: {
    //         type: String,
    //         required: true
    //     },
    //     Institute: {
    //         type: String,
    //         required: true
    //     },
    //     From: {
    //         type: String,
    //         required: true
    //     },
    //     To: {
    //         type: String,
    //         required: true
    //     },
    // }],
    // Specialization: {
    //     type: Array,
    //     required: true
    // },
    // Schedule:{
    //     type:Object,
    //     required:false
    // },
    // Patients:{
    //     type:Array,
    //     required:false
    // },
    // Appointments: {
    //     type: Array,
    //     required: true
    // },

 })



const doctor = mongoose.model('Doctor', contestSchema);

module.exports = doctor;