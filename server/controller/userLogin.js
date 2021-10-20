//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');



LogIn = async(req, res) => {
const {username,password}= req.body;
let user;
  if(!check) user= await Doctor.findOne({username:username});
  else   user= await Patient.findOne({username:username});
  if(!user)
  {
      res.send(401);
  }
 //   mia bhabhi
  //   naughty america
  if(user.password===password)
  {
     res.send(user);

  }  
  let token;
    try {
      token =await  jwt.sign(
        { userId:user.id},
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '1h' }
      );
    } catch (err) {
      console.log(err)
    }
    console.log("token")
    console.log(token);
}



module.exports = {
    LogIn,
};