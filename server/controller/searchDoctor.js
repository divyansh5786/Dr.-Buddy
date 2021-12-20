//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');



doctorlist = async (req, res) => {
  const { city, state, Specialization,Online } = req.body;
  Doctor.find({city: city,state:state,Specialization:Specialization,Online:Online}, function(err, doctors) 
    {
       if (err)
       {
           res.send(err);
       }
       else{
       console.log(doctors);
       res.send(doctors);
       }
   
    });

}



module.exports = {
    doctorlist,
};