const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  console.log(req.body);
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('token split Error');
    }
  
   
   

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    req.userData = { userId: decodedToken.userId };
    
    console.log("I am Middleware Authentication");
    next();
  } catch (err) {
    console.log("Authentication Failed ");
    console.log(err);
    return next(error);
  }
};