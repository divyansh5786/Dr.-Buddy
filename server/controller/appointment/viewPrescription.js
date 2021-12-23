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

viewPrescriptions = async(req, res) => {
    const{id}=req.body ;
    try {
        var  result = await Appointment.findById(id).populate('patientID').populate('doctorID')

        
        console.log("view Appointment genreated ");
        console.log(result);
        res.status(200).json({result});
      } catch (e) {
       
        console.log(e);
        res.status(422).json({message:"Appointment view Error"});
      }
    }

module.exports = {
   
    addPrescription,
    viewPrescriptions,
};