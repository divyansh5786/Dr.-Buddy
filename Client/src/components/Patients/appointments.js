import { useState,useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/appointmentCardPatient';


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
        "id":"565465",
        "doctorname":"Dr. harish goyl",
        "spec":"Surgeon",
        "dateOfBooking":"22 Oct 2021",
        "dateOfAppointment":"24 Oct 2021",
        "time":"Evening",
        "fees":"250",
        "concern":"Stomach pain",  
        "status":"confirm"  
      },
      {
          "id":"165165",
        "doctorname":"Dr. kaunal bhardwaj",
        "spec":"Dentist",
        "dateOfBooking":"22 Oct 2021",
        "dateOfAppointment":"24 Oct 2021",
        "time":"Evening",
        "fees":"250",
        "concern":"Stomach pain", 
        "status":"pending"   
      },];
      return tempdata;
}

function Appointments ({id,setPage}) {

    const history = useHistory ();
    const [appointments, setAppointments] = useState(null);

    useEffect(() => {
        setPage('Appointments');
        fetchData(id).then(tempdata => {
            setAppointments(tempdata);
        })
      }, []);
      
    
    
    return (
        <div class="appointments" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div class="tab-content pt-0 box">

                <div id="pat_appointments" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Concern</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {appointments===null?"Loading..." :appointments.length===0?"No appointment made" :  
                    appointments.map((appointment)=>{
                        console.log(appointment.doctorname);
                        return (<AppointmentCard key={appointment.id} appointment={appointment} />   
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