//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const jwt = require('jsonwebtoken');



profile = async(req, res) => {

    const {username,password}= req.body;
  const user= await Doctor.findOne({username:username});
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
  
}



module.exports = {
    profile,
};