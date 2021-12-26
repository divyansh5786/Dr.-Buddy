//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


register = async (req, res) => {
  const { username, password, firstname, lastname, mobile, email, city, state, Address, type, dateofbirth, gender } = req.body;
  let check = true;
   try{
       
        let   temp= await Doctor.find({username});
        let   temp2= await Patient.find({username});
        if(temp.length!=0  || temp2.length!=0)
        {
          console.log('username allready taken ')
          return res.status(406).json({message:"username allready taken"})
        
          // 406   ---Not accesstable
        }
   }catch(e){
     console.log(e);
     res.status(422).json({message:"Error in selecting username"})

   }
  if(type==='Doctor')

   check = false;
  if (!username || !password  || !firstname || !lastname || !mobile|| !email || !city || !state || !Address  || password.length<7 || mobile.length<10  ) {
   {return res.status(422).json({ error: "please fill all the fields properly" });
     
  }
  
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
      console.log("patient regestred successfully")
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