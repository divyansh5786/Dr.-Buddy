//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");

register = async(req, res) => {

    const username = req.query.username;
    const password = req.query.password;
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const mobile = req.query.mobile;
    
    console.log(req);
    var newDoctor = new Doctor({ username, password, firstname, lastname, mobile, });
    await newDoctor.save();
    res.send("doctor regsitered");


}

module.exports = {
    register,
};