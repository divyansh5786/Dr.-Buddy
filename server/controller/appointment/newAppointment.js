const mongoose = require('mongoose');
const Doctor = require("../../module/doctorSchema");
const Patient = require("../../module/patientSchema");
const Appointment= require("../../module/appoitmentSchema")

const jwt = require("jsonwebtoken");
const rp = require("request-promise");

var createZoomMeeting = async() =>{
  const payload = {
    iss: "7JqB9DRXSMSk_UeS-luIUg",
    exp: new Date().getTime() + 5000,
  };
  const token = jwt.sign(payload, "PEF8elFhiMXF1We8lqzcXecoaWxV5JrD4HXy");
  let meetingDetails = {};
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + "divyanshbansal13@gmail.com" + "/meetings",
    body: {
      topic: "Meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  await rp(options)
    .then(function (response) {
      console.log("response is: ", response.join_url);
      var url = "abc"+response.join_url;
       meetingDetails = {
        meetingID: url.substring(29,url.indexOf('?')),
        meetingpwd: url.substring(url.indexOf('?')+5),
      };
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
      meetingDetails = {
        meetingID: null,
        meetingpwd: null
      };
});
return meetingDetails;
}


addAppointment = async(req, res) => {
    // taking input fomr req.body which send by client
    const{doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime}=req.body ;
        try{
        var meetingDetails = await createZoomMeeting();
        if(meetingDetails=={} ||meetingDetails.meetingID === null || meetingDetails.meetingpwd ==null)
          res.status(422).json({message:"Error occured while booking appointmnet"});
        else{
          console.log(meetingDetails);
          let meetingID = meetingDetails.meetingID;
          let meetingpwd = meetingDetails.meetingpwd;
        var newAppointment = new Appointment({ doctorID,patientID,concern,status,fee, bookingDate, appointmentDate,appointmentTime, meetingID,meetingpwd});
        await newAppointment.save();
         // sending json to client side
        res.status(201).json({message:"appointment booked"});
      } }catch (e) {
        res.status(422).json({message:"Error occured while booking appointmnet"});
        console.log(e);
      }
    }
    

// sending function info back to routes
    module.exports = {
        addAppointment,
    };
   
