import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';

function PrescriptionCard({ prescription }) {
    return (
        <tr>
            <td>{prescription.dateOfAppointment}</td>
            <td>{prescription.id}</td>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">
                    </a>
                    <a>{prescription.patientName}</a>
                </h2>
            </td>
            <td class="text-right">
                <div class="table-action">
                    <a  class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> Print
                    </a>
                    <a  class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> View
                    </a>
                </div>
            </td>
        </tr>
    )
}

export default PrescriptionCard;