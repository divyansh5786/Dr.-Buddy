import React from 'react'
import { useState, useEffect } from 'react';
import '../../css/dashboard.css';
import PatientViewPres from '../utilities/patientViewPres';
import MedicaldDataCard from '../utilities/medicalDataCard';
import { NavLink } from 'react-router-dom';
import PatientDetails from '../utilities/patientDetails';

const fetchPrescriptions = async (id) => {
    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invailid Registration");
            console.log("Invailid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successfull");
            // history.replace("/");
        }
    }
    catch (e) {
        console.log("error occured in fetching" + e);
    }
    const tempdata = [{
        "id": "565465",
        "doctorname": "Dr. harish goyl",
        "spec": "Surgeon",
        "dateOfAppointment": "24 Oct 2021",
        "diagnosis": ['Diffuse Alopicia', 'Hair Loss'],
        "medicines": [{ "Name": "Berocin CZ Capsule", "Dosage": "0-0-1", "fd": "daily,10 days" }],
        "tests": ["tpds", "rps"]
    },
    {
        "id": "565465",
        "doctorname": "Dr. Ramesh Sharma",
        "spec": "Skin Doctor",
        "dateOfAppointment": "16 Oct 2021",
        "diagnosis": ['Diffuse Alopicia', 'Hair Loss'],
        "medicines": [
            { "Name": "Berocin CZ Capsule", "Dosage": "0-0-1", "fd": "daily,10 days" },
            { "Name": "Ibugesic Plus", "Dosage": "0-1-0", "fd": "daily,5 days" },
            { "Name": "HCQS", "Dosage": "1-0-1", "fd": "daily,10 days" }
        ],
        "tests": ["tpds", "rps"]
    },];
    return tempdata;
}
const fetchMedicalData = async (id) => {
    try{const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id
        })
      });
      const data = await res.json();
      
      if (res.status === 422 || !data) {
        window.alert("Invailid Registration");
        console.log("Invailid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successfull");
        // history.replace("/");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        const tempdata = [{
        "date":"12 Nov 2017",
        "bp":"120",
        "sugar":"120",
        "temp":"98.4",
        "pulse":"72", 
      },
      {
        "date":"13 Nov 2017",
        "bp":"118",
        "sugar":"110",
        "temp":"96.5",
        "pulse":"75", 
      },];
      return tempdata;
}
const fetchPatientData = async (id) => {
    try{const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id
        })
      });
      const data = await res.json();
      
      if (res.status === 422 || !data) {
        window.alert("Invailid Registration");
        console.log("Invailid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successfull");
        // history.replace("/");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        const tempdata = {
        "name":"Narendra Modi",
        "gender":"male",
        "age":"25",
        "Address":"118/22 Amar Enclave",
        "city":"ghaziabad", 
        "state":"Uttar Pradesh",
        "mobile":"9990892500",
        "email":"bansal@gmail.com",
      };
      return tempdata;
}

function PatientView({id, setPage}) {
    console.log('Patient View');
    console.log(id);
    const [prescriptions, setPrescriptions] = useState(null);
    const [medicalData, setmedicalData] = useState(null);
    const [patientData, setpatientData] = useState(null);
    useEffect(() => {
        setPage('Patient Details');
        fetchPrescriptions(id).then(tempdata => {
            setPrescriptions(tempdata);
        })
   
    fetchMedicalData(id).then(tempdata => {
        setmedicalData(tempdata);
    })
    fetchPatientData(id).then(tempdata => {
        setpatientData(tempdata);
    })
}, []);

    return (<div class="patientview" style={{ paddingTop: '10%', paddingInline: '10%' }}>
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