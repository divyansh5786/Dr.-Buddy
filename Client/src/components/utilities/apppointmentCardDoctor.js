import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';




function AppointmentCard({appointment,appointments,setAppointments,setpatient,setappointment}) {
    setpatient(null);
    const history = useHistory();

    const viewpatient = async(patientID,id)=>{
        if(patientID!=null &&setpatient!=null ){
            setpatient(patientID);
            setappointment(id);
            console.log(patientID);
            history.push("/doctors/patientview");
        }
        

    }
    const changestatus = async(id,status)=>{
        const res = await fetch("/statusUpdate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id, status
            })
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            // setalert({color:"red",message:"Error Occure while changing status"});
          } else {
            alert("Status Changed successfully");
            // console.log("Successfully updated");
            appointment.status=status;
            Object.assign(tempdata, appointments);
            setAppointments(tempdata);
    
          }
        }
    let tempdata = [];
    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a  onClick={()=>{viewpatient(appointment.patientID,appointment.id)}} >{appointment.patientname}</a>
                </h2>
            </td>
            <td>{appointment.dateOfAppointment}<span class="d-block text-info">{appointment.time}</span></td>
            <td>{appointment.age}</td>
            <td>{appointment.gender}</td>
            <td>{appointment.fees}</td>
            <td>{appointment.concern}</td>
            {appointment.status==="complete"?<td><span class="badge badge-pill bg-primary-light">Completed</span></td>:appointment.status==="confirm"?
            <td><span class="badge badge-pill bg-success-light">Confirmed</span></td>:appointment.status=="pending"? <td><span class="badge badge-pill bg-warning-light">Pending</span></td>:<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
    }
            <td class="text-right">
                <div class="table-action">
                {appointment.status==="confirm"?
                <>
                    <a class="btn btn-sm bg-primary-light">Accepted
                    </a>
                    <a  class="btn btn-sm bg-danger-light" onClick={()=>{changestatus(appointment.id,"cancel")}}>
                    <i class="fas fa-times"></i>Cancel
                    </a>
                    <a class="btn btn-sm bg-warning-light" onClick={()=>{changestatus(appointment.id,"complete")}}>
                    <i class="fas fa-check"></i> Complete
                    </a>
                    </>
                    :appointment.status=="pending"?
                    <>
                    <a class="btn btn-sm bg-success-light" onClick={()=>{changestatus(appointment.id,"confirm")}}>
                    <i class="fas fa-check"></i> Accept
                    </a>
                    <a  class="btn btn-sm bg-danger-light"onClick={()=>{changestatus(appointment.id,"cancel")}}>
                    <i class="fas fa-times"></i>Cancel
                    </a></>:
                    <></>}
                </div>
            </td>
        </tr>
    </>
    )
}

export default AppointmentCard;