import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';


function AppointmentCard({appointment,appointments,setAppointments}) {
    let tempdata = [];
    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a href="doctor-profile.html">{appointment.patientname}</a>
                </h2>
            </td>
            <td>{appointment.dateOfAppointment}<span class="d-block text-info">{appointment.time}</span></td>
            <td>{appointment.type}</td>
            <td>{appointment.concern}</td>
            {appointment.status==="confirm"?
            <td><span class="badge badge-pill bg-success-light">Confirmed</span></td>:appointment.status=="pending"? <td><span class="badge badge-pill bg-warning-light">Pending</span></td>:<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
    }
            <td class="text-right">
                <div class="table-action">
                {appointment.status==="confirm"?
                <>
                    <a class="btn btn-sm bg-primary-light">Accepted
                    </a>
                    <a  class="btn btn-sm bg-danger-light" onClick={()=>{appointment.status="cancel"; Object.assign(tempdata, appointments);setAppointments(tempdata);}}>
                    <i class="fas fa-times"></i>Cancel
                    </a>
                    </>
                    :appointment.status=="pending"?
                    <>
                    <a class="btn btn-sm bg-success-light" onClick={()=>{appointment.status="confirm";Object.assign(tempdata, appointments);setAppointments(tempdata);}}>
                    <i class="fas fa-check"></i> Accept
                    </a>
                    <a  class="btn btn-sm bg-danger-light"onClick={()=>{appointment.status="cancel";Object.assign(tempdata, appointments);setAppointments(tempdata);}}>
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