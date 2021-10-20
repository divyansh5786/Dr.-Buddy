//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const jwt = require('jsonwebtoken');



LogIn = async (req, res) => {
  const { username, password, type } = req.body;
  console.log(username, password, type);
  if (type == 'Doctor')
    check = false;
  else
    check = true;

  let user;
  if (!check)
    user = await Doctor.findOne({ username: username });
  else
    user = await Patient.findOne({ username: username });

  if (!user || user === null) {
    return res.status(422).json({id:null});
  }
  //   mia bhabhi
  //   naughty america
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
    console.log("token")
    console.log(token);
    return res.json({id:user.id});
  }
  
  else
    return res.status(422).json({id:null});

}



module.exports = {
  LogIn,
};