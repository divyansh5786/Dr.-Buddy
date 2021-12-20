//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");



doctorlist = async (req, res) => {
  const { city, state, Specialization,Online } = req.body;
  await Doctor.find({city: city,state:state,Specialization:Specialization,Online:Online}, function(err, doctors) 
    {
       if (err)
       {
           console.log(err);
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