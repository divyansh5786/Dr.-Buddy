import { useState, useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/apppointmentCardDoctor'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Appointments({ id,setPage}) {

    const history = useHistory();
    const [appointments, setAppointments] = useState(null);
   // const [status, setStatus] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
const DateTransform=(date)=>{
    let myDate = (date.getUTCFullYear()) + "/" + (date.getMonth() + 1)+ "/" + (date.getUTCDate());
    console.log(myDate);
    return myDate;
}

    const handleChange = (date) => {
        console.log(date);
        setStartDate(date);
        try {
            //setAppointment according to date from doctor json
        }
        catch (e) {
            console.log(e);
        }
        var tempdata = [];
        let date1 = DateTransform(date);
        let date2 = DateTransform(new Date());
        let status = date1.normalize() === date2.normalize();
        
        if(status===true)
        {
            tempdata=[{
                "id":"565465",
                "patientname":"Prakhar Lokhande",
                "dateOfAppointment":"24 Oct 2021",
                "time":"Evening",
                "type":"Old patient",
                "concern":"Cough",
                "status":"pending",
              },
              {
                "id":"165165",
                "patientname":"Himanshu Singh",
                "dateOfAppointment":"24 Oct 2021",
                "time":"Evening",
                "type":"Old patient",
                "concern":"Cough",
                "status":"confirm",
              },,];
        }
        console.log("done");
        setAppointments(tempdata);
        console.log(typeof(tempdata));

    }
    useEffect(() => {
        setPage('Appointments');
        handleChange(startDate);
    }, []);
     



    return (
        <div class="appointments" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div class="tab-content pt-0 box ">
                <div style={{ display: 'flex', justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                    <span style={{ fontSize: 'x-large', fontWeight: '600', width: '100px' }}>Selectdate</span>
                    <span style={{ marginLeft: "15%" }}><DatePicker selected={startDate} onChange={(date) => handleChange(date)} /></span>
                </div>
                <div id="pat_appointments" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Appt Date</th>
                                    <th>Type</th>
                                    <th>Concern</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments === null ? "Loading..." : appointments.length === 0 ? "No appointment made" :
                                    appointments.map((appointment) => {
                                        console.log(appointment.doctorname);
                                        return (<AppointmentCard key={appointment.id} appointment={appointment} appointments = {appointments} setAppointments ={setAppointments} />
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

export default Appointments