//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


googleLogin = async (req, res) => {
  var { email, firstname, username, lastname, type } = req.body;
  //lastname = "chudasama"
  // console.log(req.body)
  let check = true;

  try {
    let doctorgoogle = await Doctor.findOne({ email });
    let patientgoogle = await Patient.findOne({ email });
    if (doctorgoogle != null || patientgoogle != null) {
      if (type === 'Doctor') check = false;
      if (!check && doctorgoogle!=null) {
        fxn(doctorgoogle, res);
        //  console.log(doctorgoogle)
      }
      else if(patientgoogle != null) {
        fxn(patientgoogle, res);
      }
      else
      {
        res.status(422).json({ error: "Registered with another type" });
      }


    }
    else {

      if (type === 'Doctor') check = false;
      if (!check) {
        try {
          var newDoctor = new Doctor({ email, firstname, username, lastname, type });
          console.log(newDoctor);
          await newDoctor.save();

        } catch (e) {
          console.log(e);
          res.status(422).json({ error: "Error while creating doctor" });

        }
        res.status(201).json({ message: "user registered successfully as Doctor" });
      }
      else {
        try {
          var newPatient = new Patient({ email, firstname, username, lastname, type });
          await newPatient.save();
          console.log("patient regestred successfully")
          res.status(201).json({ message: "user registered successfully as Patient" });
        } catch (e) {
          console.log(e);
          res.status(422).json({ error: "Error while creating doctor" });
        }

      }


    }

  } catch (e) {
    console.log(e);
    res.status(422).json({ message: "Error in selecting username" })

  }



}


async function fxn(user, res) {
  //console.log(user);
  let token;
  try {
    token = await jwt.sign(
      { userId: user.id },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: '1h' }
    );
  } catch (err) {
    console.log(err)
  }
  console.log("token   /userlogin")
  console.log(user);
  console.log(user.id);
  console.log(user.firstname);
  return res.status(200).json({ id: user.id, name: user.firstname + " " + user.lastname, token: token });
}
module.exports = {
  googleLogin,
};