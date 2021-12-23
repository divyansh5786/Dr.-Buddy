import React from 'react'
import '../../css/dashboard.css';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/myPatientCard';

var calculateAge = (date)=>{
  let milliseconds = Date.parse(date);
  let nowmilli = Date.parse(new Date());
  let age = Math.floor((nowmilli-milliseconds)/1000/86400/365);
  return age;

}
const fetchData = async (id) => {
  let doctorID = id;
    try{const res = await fetch("/showDoctorspatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
         doctorID
        })
      });
      const data = await res.json();
      var tempdata = [];
      if (res.status === 422 || !data) {
        console.log("Invailid Registration");
      } else {
        console.log(data);
        // history.replace("/");
        data.map((patient)=>{
          let temppatient =  {
            id:patient.patientID._id,
            patientname:patient.patientID.firstname +' '+patient.patientID.lastname,
            age:calculateAge(patient.patientID.dateofbirth),
            gender:patient.patientID.gender,
            mobile:patient.patientID.mobile,
            email:patient.patientID.email,
          };
          tempdata.push(temppatient);
        });
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        
      return tempdata;
}

function MyPatient({id,setPage}) {
    const history = useHistory();
    const [patients, setPatients] = useState(null);

    useEffect(() => {
        setPage('My Patients');
        fetchData(id).then(tempdata => {
            setPatients(tempdata);
        })
      }, []);

    return (
        <div class="appointments" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div class="tab-content pt-0 box ">
                <div id="pat_appointments" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients === null ? "Loading..." : patients.length === 0 ? "No appointment made" :
                                patients.map((patient) => {
                                        //console.log(appointment.doctorname);
                                        return (<PatientCard key={patient.id} patient={patient} />
                                        )
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default MyPatient