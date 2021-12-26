import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

function DashAppointPatient({appointment}) {
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
            <td>{appointment.concern}</td>
            {appointment.status==="complete"?<td><span class="badge badge-pill bg-primary-light">Completed</span></td>:appointment.status==="confirm"?
            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>:appointment.status=="pending"? <td><span class="badge badge-pill bg-warning-light">Pending</span></td>:<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
    }
        </tr>
    </>
    )
}

export default DashAppointPatient;