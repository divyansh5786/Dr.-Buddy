const mongoose= require("mongoose");
const Patient= require("../module/patientSchema")
const Doctor= require("../module/doctorSchema")
const Appointment= require("../module/appoitmentSchema")

addMedicalData= async(req,res)=> { 
    const{id, medicalData}= req.body;
    console.log(medicalData);
    try{
        var patient= await Patient.findById(id);
        patient.medicalData.push(medicalData);
        
      await patient.save();
      console.log(patient);
      res.status(201).json({message:"medicalData sucessfully"});
    }catch(e){
       console.log(e);
       res.status(422).json({message:"MedicalData Not added"});
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
       res.status(422);
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
        res.status(422).json({message:"patient profile NOT view"});
    }
}

updatePatientProfile= async(req,res)=>{
 const {id,updatedPatient}= req.body;
 try{
    var patient= await Patient.findById(id);
    //console.log(patient);

    patient.firstname= updatedPatient.firstname  
    patient.lastname= updatedPatient.lastname
    patient.mobile= updatedPatient.mobile
    patient.email=updatedPatient.email
    patient.city= updatedPatient.city
    patient.state= updatedPatient.state
    patient.Address= updatedPatient.Address
    await patient.save();
    console.log(patient);
    console.log('after update patient profile  / patientdetails - 51')
    res.status(201).json({message:"patient profile updated sucessfully"});

    
   }catch(e)
   {
       console.log(e);
       res.status(422).json({message:"patient profile NOT updated"});
   }
     
}

 module.exports={
     addMedicalData,
     viewMedicalData,
     viewPatientProfile,
     updatePatientProfile,
 }
