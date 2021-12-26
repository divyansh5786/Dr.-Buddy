//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


googleLogin = async (req, res) => {
  const {email,firstname,username,lastname,password,city,state,type } = req.body;
  console.log(req.body)
  let check = true;
  
   try{
       let   doctorgoogle= await Doctor.find({email});
        let   patientgoogle= await Patient.find({email});
        if(doctorgoogle!=0  || patientgoogle!=0)
        {    if(doctorgoogle!=0)
            {
                fxn(temp);
            }
            else {
                fxn(temp2)
            }
      
         
        }
        fxn(user)
        {
          
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
           // console.log(token);
            return res.status(200).json({id:user.id,name:user.firstname+" "+user.lastname,token:token});
        }
   }catch(e){
     console.log(e);
     res.status(422).json({message:"Error in selecting username"})

   }
  if(type==='Doctor')   check = false;
  if (!check) {
    try {
      var newDoctor = new Doctor({email,firstname,username,lastname,password,city,state,type });
      await newDoctor.save();
      
    } catch (e) {
      console.log(e);
      res.status(422).json({ error: "Error while creating doctor" });
  
    }
    res.status(201).json({ message: "user registered successfully as Doctor" });
  }
  else {
    try {
      var newPatient = new Patient({ email,firstname,username,lastname,password,city,state,type });
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
 googleLogin,
};