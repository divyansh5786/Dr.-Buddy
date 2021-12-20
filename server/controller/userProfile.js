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

  if(user.password===password)
  {
     res.send(user);

  }  
  
}

addProfession = async(req, res) => {
    const {id,Online,Specialization,Fees,Degree}= req.body;
    let user;
      try{
        user= await Doctor.findById(id)
    }catch(e){console.log(e)}
   
    user.Specialization=Specialization;
    user.Online=Online;
    user.Fees=Fees;

    const result=  await  user.save();
    res.status(200).send(user);
   
   
}

module.exports = {
    profile,
    addProfession,
};