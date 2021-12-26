import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/apppointmentCardDoctor'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AlertBar from '../utilities/alertbar';
import { AuthContext } from '../../context/auth-context';


const DateTransform = (date) => {
    let myDate = new Date(date.getUTCFullYear(),date.getMonth(),(date.getUTCDate()),0,0,0,0);
    console.log(date);
    console.log(myDate);
    return myDate;
}
var DateTransformtostring= (date) => {
    let milliseconds = Date.parse(date);
    date = new Date(milliseconds)
    //console.log(date);
    var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
    return d;
  }

  var calculateAge = (date)=>{
    let milliseconds = Date.parse(date);
    let nowmilli = Date.parse(new Date());
    let age = Math.floor((nowmilli-milliseconds)/1000/86400/365);
    return age;

  }

const fetchpending = async(id,auth) => {
    
    let doctorID = id;
    try {
        const res = await fetch("/doctorPendingAppointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
                doctorID
            })
        });
        const data = await res.json();
        var tempdata = [];
        if (res.status === 422 || !data) {
            console.log("Error while fetching appointments");
        } else {
          // console.log(" Appointments fetched successfully");
           console.log(data);
            data.map((appointment) => {
                //console.log("patient id "+appointment.patientID._id);
                let tempappoint = {
                    patientID:appointment.patientID._id,
                    id: appointment._id,
                    patientname: appointment.patientID.firstname + appointment.patientID.lastname,
                    dateOfAppointment: DateTransformtostring(appointment.appointmentDate),
                    time: appointment.appointmentTime,
                    fees: appointment.fee,
                    concern: appointment.concern,
                    status: appointment.status,
                    age:calculateAge(appointment.patientID.dateofbirth),
                    gender:appointment.patientID.gender,
                };
                tempdata.push(tempappoint);
            });
          //  console.log(tempdata);
        }
    }
    catch (e) {
        console.log("error occured in fetching" + e);
    }
    // tempdata = [{
    //     "id": "565465",
    //     "patientname": "Prakhar Lokhande",
    //     "dateOfAppointment": "24 Oct 2021",
    //     "time": "Evening",
    //     "type": "Old patient",
    //     "concern": "Cough",
    //     "status": "pending",
    // },
    // {
    //     "id": "165165",
    //     "patientname": "Himanshu Singh",
    //     "dateOfAppointment": "24 Oct 2021",
    //     "time": "Evening",
    //     "type": "Old patient",
    //     "concern": "Cough",
    //     "status": "confirm",
    // }, ,];
   // console.log("done");
    return tempdata;
   // console.log(typeof (tempdata));

}
function PendingAppointments({ id, setPage,setpatient,setappointment,alert,setalert }) {

    const history = useHistory();
    const [appointments, setAppointments] = useState(null);
    // const [status, setStatus] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const auth = useContext(AuthContext);

    
    useEffect(() => {
        setPage('Pending Appointments');
        fetchpending(id,auth).then(tempdata => {
            setAppointments(tempdata);
          });
    }, []);




    return (
        <div class="appointments" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <AlertBar alert = {alert} setalert={setalert}/>
            <div class="tab-content pt-0 box ">
                <div id="pat_appointments" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Appt Date</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Fees</th>
                                    <th>Concern</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments === null ? "Loading..." : appointments.length === 0 ? "No appointment made" :
                                    appointments.map((appointment) => {
                                       // console.log(appointment.doctorname);
                                        return (<AppointmentCard key={appointment.id} appointment={appointment} appointments={appointments} setAppointments={setAppointments} setpatient={setpatient} setappointment={setappointment} alert={alert} setalert={setalert}/>
                                        )
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default PendingAppointments