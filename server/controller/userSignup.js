//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');



register = async(req, res) => {
const {username, Password, firstName, LastName, MobileNo, EmailId, City, State, Address, Mode}= req.body;
   let password = Password;
   let firstname = firstName;
   let lastname = LastName;
   let mobile = MobileNo;
   let check=true;
console.log("request made via react");
    if (!username|| !password || !firstname || !lastname || !mobile) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    }
 if(!check)
 { try{
  var newDoctor = new Doctor({ username, password, firstname, lastname, mobile, });
  await newDoctor.save();
 } catch(e) {
   console.log(e);
 }
 res.status(201).json({ message: "user registered successfully as Doctor" });
  }
  else {
    try{
      var newPatient = new Patient ({ username, password, firstname, lastname, mobile, });
    await newPatient.save();
    }catch(e) {
      console.log(e);
    }
    res.status(201).json({ message: "user registered successfully as Patient" });
  }
   
    
    
}



module.exports = {
    register,
};