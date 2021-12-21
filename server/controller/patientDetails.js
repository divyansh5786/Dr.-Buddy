const mongoose= require("mongoose");
const Patient= require("../module/patientSchema")
const Doctor= require("../module/doctorSchema")
const Appointment= require("../module/appoitmentSchema")

addMedicalData= async(req,res)=> { 
    const{id, medicalData}= req.body;
    try{
        var patient= await Patient.findById(id);
        medicalData.map((element)=>{
            patient.medicalData.push(element)});
        
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


viewPatientProfile = async(req,res)=>{
    const {patientID}= req.body;
    try{
     const patient= await Patient.findById(patientID);
     res.status(201).json(patient);
    }catch(e)
    {
        console.log(e);
    }
}

updatePatientProfile= async(req,res)=>{
 const {patient}= req.body;

}

 module.exports={
     addMedicalData,
     viewMedicalData,
     viewPatientProfile,
     updatePatientProfile,
 }
