//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");

// searching docotr with given attributes like city, state, Specialization,Online


doctorlist = async (req, res) => {
    // taking input fomr req.body which send by client
  const { city, state, Specialization,Online } = req.body;
  await Doctor.find({city: city,state:state,Specialization:Specialization,Online:Online}, function(err, doctors) 
  // those dcotor retunr in json we have all 4 same with request ID
    {
       if (err)
       {
           console.log(err);
           // sending json to client side
           res.send(err);
       }
       else{
       console.log(doctors);
       res.send(doctors);
       }
   
    });

}



// sending function info back to routes
module.exports = {
    doctorlist,
};