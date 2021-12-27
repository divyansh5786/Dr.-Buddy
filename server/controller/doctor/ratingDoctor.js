//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


ratingDoctor = async (req, res) => {
    const{ doctorID,text,rating,title,date, patientName }=req.body;
    try{
        var review =[{patientName,rating,text,title,date}];
        console.log(review);
       // console.log(review)
        var doctor= await Doctor.findById(doctorID);

        review.map((e) => {
            doctor.review.push(e)
          });
         // console.log(doctor)
         await doctor.save();
         console.log('rating updated sucessfully')
          res.status(201).json({meassge:'rating update sucessfully'})

    }catch(e)
    {
        console.log(e);
        res.send(422).json({message:'rating not updated '})
    }


}

viewRating= async(req,res)=>{
    const{doctorID}=req.body
    // i have to send rating,patientname,Date and all thing in review and total rating
    //total start/users
    try{
           const doctor= await Doctor.findById(doctorID);
           const review= doctor.review;
           var totalRating=0;
           review.map((e) => {
             totalRating+=e.rating
          });
          totalRating= totalRating/(review.length);
          console.log(review);
                 console.log('view reviews suceesfull')
                 var totalReviews=review.length
         res.status(200).json({review, totalRating,totalReviews})
    }catch(e)
    {
        console.log(e);
        res.send(422).json({message:'Error while showing rating '})
    }



}
module.exports = {
 ratingDoctor,
 viewRating,
};
