//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');



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
    }catch(e){
      console.log(e);
    }
    }
  else
   { 
     try {user = await Patient.findOne({ username: username });
    }catch(e){
      console.log(e);
    }
    }

  if (!user || user === null) {
    console.log("user NOT found");
    return res.status(422).json({id:null});
  }
  else if (user.password === password) {
    res.status(201);
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
    return res.status(200).json({id:user.id,name:user.firstname+" "+user.lastname,token});
  }
  
  else
  {
    console.log("password os wrong");
    return res.status(422).json({id:null});
  }
    

}



module.exports = {
  LogIn,
};