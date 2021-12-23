import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';

function view(history,setappointment,prescription)
{
    setappointment(prescription.id);
    history.push('/patients/viewprescriptions');
}
function DashPresPatient({prescription,setappointment}) {
    const history = useHistory();
    return (
        <tr>
            <td>{prescription.dateOfAppointment}</td>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                    </a>
                    <a href="doctor-profile.html">{prescription.doctorname}<span>{prescription.spec}</span></a>
                </h2>
            </td>
            <td class="text-right">
                <div class="table-action">
                    <a  class="btn btn-sm bg-info-light" onClick={()=>{view(history,setappointment,prescription)}}>
                        <i class="far fa-eye"></i> View
                    </a>
                </div>
            </td>
        </tr>
    )
}

export default DashPresPatient;