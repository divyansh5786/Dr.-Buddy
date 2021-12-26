const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")

addPrescription = async(req, res) => {
      // taking input fomr req.body which send by client
    var{id,diagnosis, medicine,tests, followUp}= req.body;
    try{
        // now here we were updating our prescription 
       const result= await Appointment.findByIdAndUpdate(id,
        { $push:{
            diagnosis:diagnosis,
                medicine:medicine,
                tests:tests,
                
            }, followUp,
        }
        )
       //   console.log(result);
        // sending json to client side
        res.status(201).json({message:"prescription added "});
        }catch(e){
            console.log(e);
            res.status(422).json({message:"prescription NOT added "});
        }
      
}

viewPrescriptions = async(req, res) => {
      // taking input fomr req.body which send by client
    const{id}=req.body ;
    try {
        var  result = await Appointment.findById(id).populate('patientID').populate('doctorID')

        
        console.log("view Appointment genreated ");
        console.log(result);
          // sending json to client side
        res.status(200).json({result});
      } catch (e) {
       
        console.log(e);
        res.status(422).json({message:"Appointment view Error"});
      }
    }

    // sending back info to routes
module.exports = {
   
    addPrescription,
    viewPrescriptions,
};