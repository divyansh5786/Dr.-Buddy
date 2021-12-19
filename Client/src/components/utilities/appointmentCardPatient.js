import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';

function AppointmentCard({appointment}) {
    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a href="doctor-profile.html">{appointment.doctorname}<span>{appointment.spec}</span></a>
                </h2>
            </td>
            <td>{appointment.dateOfBooking}<span class="d-block text-info">{appointment.time}</span></td>
            <td>{appointment.dateOfAppointment}</td>
            <td>{appointment.fees}</td>
            <td>{appointment.concern}</td>
            {appointment.status==="confirm"?
            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>:appointment.status=="pending"? <td><span class="badge badge-pill bg-warning-light">Pending</span></td>:<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
    }
            <td class="text-right">
                <div class="table-action">
                    <a class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> Print
                    </a>
                    <a  class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> View
                    </a>
                </div>
            </td>
        </tr>
    </>
    )
}

export default AppointmentCard;