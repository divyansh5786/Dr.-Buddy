
//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



LogIn = async (req, res) => {
  const { username, password, type } = req.body;

 
  console.log(username, password, type, '/userlogin 11');
  if (type == 'Doctor')
    check = false;
  else
    check = true;

  let user;
  if (!check)
   {
     try { 
       user = await Doctor.findOne({ username: username });
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
         res.status(400).json({ error: "Invalid credentials  " });
       }

    }catch(e){
      console.log(e);
    }
    }
  else
   { 
     try {user = await Patient.findOne({ username: username });
     const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
         res.status(400).json({ error: "Invalid credentials  password " });
       }

    }catch(e){
      console.log(e);
    }
    }

  if (!user || user === null) {
    console.log("user NOT found");
    return res.status(422).json({id:null});
  }
  else  {
    res.status(201);
    let token;
    try {

      token = await jwt.sign(
        { userId: user.id },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '1h' }
      );
      console.log("token   /userlogin")
   // console.log(token);
    return res.status(200).json({id:user.id,name:user.firstname+" "+user.lastname,token:token});

    } catch (err) {
      console.log(err)
      return  res.status(400).json({ error: "token is not generated" })
    }
    
  }
}
forgetPassword = async (req, res) => {
  const{username,password,email,type} = req.body;
  if(type==='Doctor')
  {
           const doctor= await Doctor.findOne({ $and: [ { username } , { email} ] })
           doctor.password=password;
           await doctor.save();
           res.status(201).json({message:'password changed sucessfully'})
  }
  else {
    const patient= await Patient.findOne({ $and: [ { username } , { email} ] })
    patient.password=password;
    await patient.save();
    res.status(201).json({message:'password changed sucessfully'})

  }

}


module.exports = {
  LogIn,
  forgetPassword,
};