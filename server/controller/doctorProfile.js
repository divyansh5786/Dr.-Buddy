//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const jwt = require('jsonwebtoken');
addProfession = async(req, res) => {
    const {id,Online,Specialization,Fees,Degree}= req.body;
    
    let user;
      try{
        user= await Doctor.findById(id)
    }catch(e){console.log(e)}
   
    user.Specialization=Specialization;
    user.Online=Online;
    user.Fees=Fees;
    Degree.map((degree)=>{
    user.Degree.push(degree)});

    try{
      const result=  await  user.save();
    res.status(200).send(user);
    }catch(e){
      console.log(e);
    }
   
   
}

module.exports = {
   
    addProfession,
};