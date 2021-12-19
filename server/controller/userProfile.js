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

    const {id, Online,Fees,Specialization,Patients,Appointments,Degree}= req.body;
   // const dummy= req.body;
    if(userLogin)
    {
      try{
          await Doctor.findByIdAndUpdate(id,
            {Online:Online},
            {Fees:Fees},
            {Specialization,Specialization},
            {Patients,Patients},
            {Appointments,Appointments},
            {Degree,Degree},
          )
          }catch(e){
              console.log(e);
          }
        
    }
    else
    {
        console.log('user not found')
        res.status(404);
    }
}

module.exports = {
    profile,
    addProfession,
};