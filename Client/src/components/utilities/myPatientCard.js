import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';



function PatientCard({patient}) {
    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a>{patient.patientname}</a>
                </h2>
            </td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.mobile}</td>
            <td>{patient.email}</td>
        </tr>
    </>
    )
}

export default PatientCard;