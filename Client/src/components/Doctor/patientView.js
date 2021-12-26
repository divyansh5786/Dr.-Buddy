import React from 'react'
//import { useState, useEffect } from 'react';
import '../../css/dashboard.css';
import { useHistory } from 'react-router-dom';
import PatientViewPres from '../utilities/patientViewPres';
import MedicaldDataCard from '../utilities/medicalDataCard';
import { NavLink } from 'react-router-dom';
import PatientDetails from '../utilities/patientDetails';
import AlertBar from '../utilities/alertbar';
import { useState, useEffect,useContext  } from 'react';

import { AuthContext } from '../../context/auth-context';

const fetchPrescriptions = async (id,auth) => {
    console.log(id);
    let patientID = id;
    try {
      const res = await fetch("/viewAppointmentPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + auth.token,
        },
        body: JSON.stringify({
          patientID
        })
      });
      const data = await res.json();
      var tempdata = [];
      if (res.status === 422 || !data) {
        window.alert("Error while fetching appointments");
        console.log("Error while fetching appointments");
      } else {
        console.log(" Appointments fetched successfully");
        console.log(data);
        data.result.map((appointment) => {
          if (appointment.status == "complete") {
          let tempappoint = { id: appointment._id,
             doctorname: appointment.doctorID.firstname + appointment.doctorID.lastname, 
             spec: appointment.doctorID.Specialization,
             dateOfAppointment: DateTransform(appointment.appointmentDate),
             diagnosis:appointment.diagnosis,
             medicine:appointment.medicine,
             followUp:DateTransform(appointment.followUp),
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
    return tempdata;
  }
  
var DateTransform = (date) => {
    let milliseconds = Date.parse(date);
    date = new Date(milliseconds)
    console.log(date);
    var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
    return d;
  }
  const fetchMedicalData = async (id,auth) => {
    console.log(id);
    let patientID = id;
    let tempdata=[];
      try{const res = await fetch("/patientviewMedicalData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + auth.token,
          },
          body: JSON.stringify({
            patientID
          })
        });
        const data = await res.json();
        console.log(data);
        
        if (res.status === 422 || !data) {
          window.alert("Error Occured while fetching medical data");
          console.log("Error Occured while fetching medical data");
        } else {
          console.log("Medical fetch Successfull");
          console.log(data);
          data.map((medical)=>{
            let tempmedical = {date:DateTransform(medical.date),bp:medical.bloodPressure,sugar:medical.sugar,temp:medical.bodyTempreture,pulse:medical.pulse};
            tempdata.push(tempmedical);
          });
          console.log(tempdata);
          // history.replace("/patients/medicaldata");
        }}
        catch(e)
        {
            console.log("error occured in fetching"+e);
        }
        return tempdata;
  }
  
const fetchPatientData = async (id,history,auth) => {
    var calculateAge = (date)=>{
        let milliseconds = Date.parse(date);
        let nowmilli = Date.parse(new Date());
        let age = Math.floor((nowmilli-milliseconds)/1000/86400/365);
        return age;

      }
      var tempdata = null;
    let patientID = id;
    try{
        const res = await fetch("/viewpatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + auth.token,
        },
        body: JSON.stringify({
            patientID
        })
      });
      const data = await res.json();
      
      if (res.status === 422 || !data) {
        window.alert("Error Occured while fetchinf patient details");
        console.log("Invailid Registration");
        history.back();
      } else {
        console.log("Patient Details Fectched Successfully");
        console.log(data);
        tempdata = {
            "name":data.firstname+" "+data.lastname,
            "gender":data.gender,
            "age":calculateAge(data.dateofbirth),
            "Address":data.Address,
            "city":data.city, 
            "state":data.state,
            "mobile":data.mobile,
            "email":data.email,
          };
        // history.replace("/");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        
      return tempdata;
}

function PatientView({patient,id, setPage,alert,setalert}) {
  const auth = useContext(AuthContext);  
  console.log(patient);
    console.log('Patient View');
    console.log(id);
    const history = useHistory();
    const [prescriptions, setPrescriptions] = useState(null);
    const [medicalData, setmedicalData] = useState(null);
    const [patientData, setpatientData] = useState(null);
    useEffect(() => {
        setPage('Patient Details');
        fetchPrescriptions(patient,auth).then(tempdata => {
            setPrescriptions(tempdata);
        })
   
    fetchMedicalData(patient,auth).then(tempdata => {
        setmedicalData(tempdata);
    })
    fetchPatientData(patient,history,auth).then(tempdata => {
        setpatientData(tempdata);
    })
}, []);

    return (<div class="patientview" style={{ paddingTop: '10%', paddingInline: '10%' }}>
      <AlertBar alert = {alert} setalert={setalert}/>
        {patientData === null ? "Loading..." : <PatientDetails patient={patientData}/>}
        <div class="card">
            <div class="card-body pt-0">
                <div class="user-tabs">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link active" href="#pat_appointments" data-bs-toggle="tab">Appointments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#medical" data-bs-toggle="tab"><span class="med-records">Medical Records</span></a>
                        </li>

                    </ul>
                </div>
                <div class="tab-content">

                    <div id="pat_appointments" class="tab-pane fade active show">
                        <div class="text-end">
                            <a class="add-new-btn"><NavLink  to="/doctors/addprescription">Add Prescription</NavLink></a>
                        </div>
                        <div class="card card-table mb-0">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor</th>
                                                <th>Appt Date</th>
                                                <th>Diagnosis</th>
                                                <th>Medicine</th>
                                                <th>Dosage</th>
                                                <th>Freq/Duaration</th>
                                                <th>Tests</th>
                                                <th>Follow Up</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {prescriptions === null ? "Loading..." : prescriptions.length === 0 ? "No prescription made" :
                                                prescriptions.map((prescription) => {
                                                    //console.log(appointment.doctorname);
                                                    return (<PatientViewPres key={prescription.id} prescription={prescription} />
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="tab-pane fade" id="medical">
                        <div class="card card-table mb-0">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Blood Presssure</th>
                                                <th>Glucose Level</th>
                                                <th>Pulse</th>
                                                <th>Body Temerature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {medicalData===null?"Loading..." :medicalData.length===0?"No appointment made" :  
                    medicalData.map((data)=>{
                        console.log(data);
                        return (<MedicaldDataCard key={data.id} data={data} />   
                     )
                 })
                    }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>);
}

export default PatientView