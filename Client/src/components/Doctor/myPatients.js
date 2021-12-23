import React from 'react'
import '../../css/dashboard.css';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/myPatientCard';

const fetchData = async (id) => {
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
        console.log("Invailid Registration");
      } else {
        console.log("Registration Successfull");
        // history.replace("/");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        const tempdata = [{
        "id":"565465",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },
      {
        "id":"565465",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },
      {
        "id":"165165",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },
      {
        "id":"565465",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },
      {
        "id":"565465",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },
      {
        "id":"565465",
        "patientname":"Prakhar Lokhande",
        "Address":"Ghaziaad,Up",
        "mobile":"8282829696",
        "gender":"male",
      },];
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
                                    <th>Id</th>
                                    <th>Address</th>
                                    <th>Mobile</th>
                                    <th>Gender</th>
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