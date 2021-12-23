const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")

addPrescription = async(req, res) => {
    var{id,diagnosis, medicine,tests, followUp}= req.body;
    try{
       const result= await Appointment.findByIdAndUpdate(id,
        { $push:{
            diagnosis:diagnosis,
                medicine:medicine,
                tests:tests,
                
            }, followUp,
        }
        )
       //   console.log(result);
      
        res.status(201).json({message:"prescription added "});
        }catch(e){
            console.log(e);
            res.status(422).json({message:"prescription NOT added "});
        }
      
}

module.exports = {
   
    addPrescription,
};