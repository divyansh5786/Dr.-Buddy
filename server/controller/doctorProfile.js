//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../module/doctorSchema");
const Patient = require("../module/patientSchema");
const Appointment= require("../module/appoitmentSchema")

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
      res.status(422).json({message:"Error in adding profession"});
    }
   

    
}
viewDoctor = async(req,res)=>{
 const{doctorId}= req.body;

 try{
const  doctor = await Doctor.findById(doctorId)
res.status(201).send(doctor);

}
catch(e)
{console.log(e);
  res.status(422).json({message:"Error in viewing doctor profile"});
}

}

updateDoctorProfile= async(req,res)=>{
  const {id,updatedDoctor}= req.body;
  try{
     var doctor= await Doctor.findById(id);
     console.log(doctor);
 
     doctor.firstname= updatedDoctor.firstname  
     doctor.lastname= updatedDoctor.lastname
     doctor.mobile= updatedDoctor.mobile
     doctor.email=updatedDoctor.email
     doctor.dateofbirth=updatedDoctor.dateofbirth
     doctor.gender=updatedDoctor.gender
     doctor.city= updatedDoctor.city
     doctor.state= updatedDoctor.state
     doctor.Address= updatedDoctor.Address
     await doctor.save();
    
   
     console.log('after update doctor profile ')
     res.status(201).json({message:"doctor profile updated sucessfully"});
 
     
    }catch(e)
    {
        console.log(e);
        res.status(422).json({message:"doctor profile NOT updated"});
    }
      
 }
 showDoctorsPatient= async( req,res)=>{

  const{doctorID}=req.body ;
        console.log(doctorID);
        try {
            var  result = await Appointment.find({doctorID}).populate('patientID',{ firstname: 1 ,lastname: 1, dateofbirth: 1, gender: 1}).select({patientID:1});
            console.log(result);
            console.log("patient of doctor with given id ,successfully ")
            res.status(201).json(result);
          } catch (e) {
            console.log(e);
            res.status(422).json({message:"patient of doctor is not show, Error"});
          }

 }

module.exports = {
   
    addProfession,
    viewDoctor,
    updateDoctorProfile,
    showDoctorsPatient,
};