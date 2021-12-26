//to get the contestlist from mongo db and sending it to client
const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment = require("../../module/appoitmentSchema")

addProfession = async (req, res) => {
  // taking input fomr req.body which send by client
  const { id, Online, Specialization, Fees, Degree } = req.body;
// updating proffesion simply by search doctorID 
  let user;
  try {
    user = await Doctor.findById(id)
  } catch (e) { console.log(e) }

  user.Specialization = Specialization;
  user.Online = Online;
  user.Fees = Fees;
  Degree.map((degree) => {
    user.Degree.push(degree)
  });

  try {
    const result = await user.save();
    // sending json to client side
    console.log('add professional sucess')
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(422).json({ message: "Error in adding profession" });
  }



}
viewDoctor = async (req, res) => {
  // taking input fomr req.body which send by client
  const { doctorID } = req.body;
  try {
    const doctor = await Doctor.findById(doctorID);
    console.log(doctor);
    // sending json to client side
    res.status(201).send(doctor);

  }
  catch (e) {
    console.log(e);
    res.status(422).json({ message: "Error in viewing doctor profile" });
  }

}

// upaditn doctor by searching ID and upadting atributes from req.body
// only accesable items
updateDoctorProfile = async (req, res) => {

  // taking input fomr req.body which send by client
  const { id, updatedDoctor } = req.body;
  try {
    var doctor = await Doctor.findById(id);
    // console.log(doctor);
    // console.log(updatedDoctor);
    // 
    // upating basic info in doctor
    doctor.firstname = updatedDoctor.firstname,
    doctor.lastname = updatedDoctor.lastname,
    doctor.email = updatedDoctor.email,
    doctor.dateofbirth = updatedDoctor.dateofbirth,
    doctor.gender = updatedDoctor.gender,
    doctor.city = updatedDoctor.city,
    doctor.state = updatedDoctor.state,
    doctor.Address = updatedDoctor.Address,
    doctor.Fees = updatedDoctor.Fees,
    doctor.Online = updatedDoctor.Online,
    doctor.Degree = updatedDoctor.Degree,
    doctor.Specialization = updatedDoctor.Specialization,
    await doctor.save();


    console.log('after update doctor profile ')
    // sending json to client side
    res.status(201).json({ message: "doctor profile updated sucessfully" });


  } catch (e) {
    console.log(e);
    res.status(422).json({ message: "doctor profile NOT updated" });
  }

}

    // we searching in appointment schema for doctorID which is Gievn  and poulating patient schema to give basic 
    // of each patient that had doctor whose id is given.
    // by populating two clusters
showDoctorsPatient = async (req, res) => {
  // taking input fomr req.body which send by client
  const { doctorID } = req.body;
  console.log(doctorID);
  try {
    var result = await Appointment.find({ doctorID })
      .populate('patientID', { firstname: 1, lastname: 1, dateofbirth: 1, gender: 1, mobile: 1, email: 1 }).select({ patientID: 1 });
// using map coz we need to show only patient ones ,NO same patient can repat
    function uniqueByKey(result, key) {
      return [...new Map(result.map((x) => [x[key], x])).values()];
    }

    const list = uniqueByKey(result, 'patientID');

    // console.log(list);
    console.log("patient of doctor with given id ,successfully ")
    // sending json to client side
    res.status(201).json(list);
  } catch (e) {
    console.log(e);
    res.status(422).json({ message: "patient of doctor is not show, Error" });
  }

}


// sending function info back to routes
module.exports = {

  addProfession,
  viewDoctor,
  updateDoctorProfile,
  showDoctorsPatient,
};