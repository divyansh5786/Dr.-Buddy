import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import { NavLink,useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/apppointmentCardDoctor'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrescriptionCard from '../utilities/prescriptionCard';
import { AuthContext } from '../../context/auth-context';



function Prescriptions({id,setPage}) {

    const history = useHistory();
    const [prescriptions, setPrescriptions] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const auth = useContext(AuthContext);

  
var DateTransformtostring = (date) => {
    let milliseconds = Date.parse(date);
    date = new Date(milliseconds)
    console.log(date);
    var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
    return d;
}
const DateTransform = (date) => {
    let myDate = new Date(date.getUTCFullYear(),date.getMonth(),(date.getUTCDate()),0,0,0,0);
    console.log(date);
    console.log(myDate);
    return myDate;
}
   
    const handleChange = async(id,date) => {
        console.log(date);
        setStartDate(date);
        let doctorID = id;
        let appointmentDate = DateTransform(date);
        try {
            const res = await fetch("/viewAppointmentDoctor", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
              },
              body: JSON.stringify({
                doctorID,appointmentDate
              })
            });
            const data = await res.json();
            var tempdata = [];
            if (res.status === 422 || !data) {
              window.alert("Error while fetching Prescription");
              console.log("Error while fetching Prescription");
            } else {
              console.log(" Prescription fetched successfully");
              console.log(data);
              data.map((appointment) => {
                if (appointment.status == "complete") {
                let tempappoint = { patientID:appointment.patientID._id,
                    id: appointment._id,
                    patientname: appointment.patientID.firstname + appointment.patientID.lastname,
                    dateOfAppointment: DateTransformtostring(appointment.appointmentDate),
                   diagnosis:appointment.diagnosis,
                   medicine:appointment.medicine,
                   followUp:DateTransformtostring(appointment.followUp),
                   tests:appointment.tests,
                  };
                  tempdata.push(tempappoint);
                }
              });
              console.log(tempdata);
            }
          }
          catch (e) {
            console.log("error occured in fetching" + e);
          }
        
        setPrescriptions(tempdata);

    }
    useEffect(() => {
        setPage('Prescriptions');
        handleChange(id,startDate);
    }, []);



    return (
        <div class="prescription" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div style={{display:'flex',justifyContent: "space-between"}}>
                  <span style={{fontSize:'x-large',fontWeight:'600'}}>Prescriptions</span>
                 
                  </div>
            <div class="tab-content pt-0 box ">
                <div style={{ display: 'flex', justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                    <span style={{ fontSize: 'x-large', fontWeight: '600', width: '100px' }}>Selectdate</span>
                    <span style={{ marginLeft: "15%" }}><DatePicker selected={startDate} onChange={(date) => handleChange(id,date)} /></span>
                </div>
                <div id="pat_prescription" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                    <th>Patient Name</th>
                                    <th>Date</th>
                                    <th>Diagnosis</th>
                                    <th>Medicines</th>
                                    <th>Dosage</th>
                                    <th>Freq/Duuration</th>
                                    <th>Tests</th>
                                    <th>Follow Up</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {prescriptions === null ? "Loading..." : prescriptions.length === 0 ? "No appointment made" :
                                    prescriptions.map((prescription) => {
                                        
                                        return (<PrescriptionCard key={prescription.id} prescription={prescription} />
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

export default Prescriptions