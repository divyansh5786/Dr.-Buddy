//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');

register = async (req, res) => {
  const { username, password, firstname, lastname, mobile, email, city, state, Address, type, dateofbirth, gender } = req.body;
  let check = true;

  if(type==='Doctor')

   check = false;
  if (!username || !password || !firstname || !lastname || !mobile || !email || !city || !state || !Address) {
    return res.status(422).json({ error: "please fill all the fields properly" });
  }
  if (!check) {
    try {
      var newDoctor = new Doctor({ username, password, firstname, lastname, mobile, email, city, state, Address, dateofbirth, gender });
      await newDoctor.save();
    } catch (e) {
      console.log(e);
      res.status(422).json({ error: "Error while creating doctor" });
  
    }
    res.status(201).json({ message: "user registered successfully as Doctor" });
  }
  else {
    try {
      var newPatient = new Patient({ username, password, firstname, lastname, mobile, email, city, state, Address, dateofbirth, gender });
      await newPatient.save();
      console.log("done")
      res.status(201).json({ message: "user registered successfully as Patient" });
    } catch (e) {
      console.log(e);
      res.status(422).json({ error: "Error while creating doctor" });
    }

  }
}

module.exports = {
  register,
};