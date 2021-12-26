const mongoose= require("mongoose");
const Patient= require("../../module/patientSchema")
const Doctor= require("../../module/doctorSchema")
const Appointment= require("../../module/appoitmentSchema")

// upating medical data og given Patient id ->client side
addMedicalData= async(req,res)=> { 
     // taking input fomr req.body which send by client
    const{id, medicalData}= req.body;
    console.log(medicalData);
    try{
        var patient= await Patient.findById(id);
        patient.medicalData.push(medicalData);
        // pushing medical data
        
        await patient.save();
       
      console.log(patient);
        // sending function info back to routes
      res.status(201).json({message:"medicalData sucessfully"});
    }catch(e){
       console.log(e);
       res.status(422).json({message:"MedicalData Not added"});
    }
    

}
viewMedicalData= async(req,res) =>{
     // taking input fomr req.body which send by client
    const {patientID}= req.body;
   try{
       // simply returning medical data of given patientID by serching in DB
    const patient= await Patient.findById(patientID);
      // sending function info back to routes
    res.status(201).json(patient.medicalData);
   }catch(e)
   {
       console.log(e);
       res.status(422);
   }
}


 // sending function info back to routes

 module.exports={
     addMedicalData,
     viewMedicalData,
    
 }
