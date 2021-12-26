const mongoose= require("mongoose");
const Patient= require("../../module/patientSchema")
const Doctor= require("../../module/doctorSchema")
const Appointment= require("../../module/appoitmentSchema")



viewPatientProfile = async(req,res)=>{
    // taking input fomr req.body which send by client
   const {patientID}= req.body;
   try{
    const patient= await Patient.findById(patientID);
    console.log('viewpatient run sucessfully')
      // sending function info back to routes
    res.status(201).json(patient);
   }catch(e)
   {
       console.log(e);
       res.status(422).json({message:"patient profile NOT view"});
   }
}

updatePatientProfile= async(req,res)=>{
    // taking input fomr req.body which send by client
const {id,updatedPatient}= req.body;
try{
   var patient= await Patient.findById(id);
   //console.log(patient);

    // upating basic info in Patient
   patient.firstname= updatedPatient.firstname  
   patient.lastname= updatedPatient.lastname
   patient.mobile= updatedPatient.mobile
   patient.email=updatedPatient.email
   patient.dateofbirth=updatedPatient.dateofbirth
   patient.gender=updatedPatient.gender
   patient.city= updatedPatient.city
   patient.state= updatedPatient.state
   patient.Address= updatedPatient.Address
   await patient.save();
  
   console.log(patient);
   console.log('after update patient profile  / patientdetails ')
     // sending function info back to routes
   res.status(201).json({message:"patient profile updated sucessfully"});

   
  }catch(e)
  {
      console.log(e);
      res.status(422).json({message:"patient profile NOT updated"});
  }
    
}
 module.exports={
    viewPatientProfile,
    updatePatientProfile,
     
 }