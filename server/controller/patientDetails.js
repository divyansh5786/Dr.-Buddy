const mongoose= require("mongoose");
const Patient= require("../module/patientSchema")
const Doctor= require("../module/doctorSchema")
const Appointment= require("../module/appoitmentSchema")

addMedicalData= async(req,res)=> { 
    const{id, bloodPressure,  bodyTempreture,sugar,pulse}= req.body;
    try{
        var patient= await Patient.findById(id);
    patient.medicalData.bloodPressure=bloodPressure;
    patient.medicalData.bodyTempreture=bodyTempreture;
    patient.medicalData.sugar=sugar;
    patient.medicalData.pulse=pulse;
      await patient.save();
      console.log(patient);
    }catch(e){
       console.log(e);
    }
    

}
viewMedicalData= async(req,res) =>{
    const {patientID}= req.body;
   try{
    const patient= await Patient.findById(patientID);
    res.status(201).json(patient.medicalData);
   }catch(e)
   {
       console.log(e);
   }
}
 module.exports={
     addMedicalData,
     viewMedicalData,
 }