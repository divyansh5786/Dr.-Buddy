import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';

const startmeeting = (appointment)=>{
    const url = 'https://us04web.zoom.us/j/'+appointment.meetingID+'?pwd='+appointment.meetingpwd;
    window.open(url);
}
function AppointmentCard({ appointment }) {
    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a href="doctor-profile.html">{appointment.doctorname}<span>{appointment.spec}</span></a>
                </h2>
            </td>
            <td>{appointment.dateOfAppointment}<span class="d-block text-info">{appointment.time}</span></td>
            <td>{appointment.dateOfBooking}</td>
            <td>{appointment.fees}</td>
            <td>{appointment.concern}</td>
            {appointment.status === "complete" ? <td><span class="badge badge-pill bg-primary-light">Completed</span></td> : appointment.status === "confirm" ?
                <td><span class="badge badge-pill bg-success-light">Confirm</span></td> : appointment.status == "pending" ? <td><span class="badge badge-pill bg-warning-light">Pending</span></td> : <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
            }
            {(appointment.status === "confirm" && appointment.meetingID) ? <td> <a class="btn btn-primary" style={{"width":"auto","color":"white"}} onClick={()=>{startmeeting(appointment);}} >
                <i class="fas fa-phone"></i> Call
            </a></td> : <td></td>}

        </tr>
    </>
    )
}

export default AppointmentCard;