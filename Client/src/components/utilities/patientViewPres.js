import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';


function PatientViewPres({prescription}) {

    return (<>
        <tr>
            <td>
                <h2 class="table-avatar">
                    <a href="doctor-profile.html" class="avatar avatar-sm mr-2">

                    </a>
                    <a href="doctor-profile.html">{prescription.doctorname}<span>{prescription.spec}</span></a>
                </h2>
            </td>
            <td>{prescription.dateOfAppointment}</td>
            <td><ul style={{"list-style-type":"none","padding-inline-start": "0px"}}>{(prescription.diagnosis==null ||prescription.diagnosis.length==0 )?"":prescription.diagnosis.map((diagnos) => {
                                        return <li>{diagnos}</li>;
                                        })
                                    }</ul></td>
            <td><ul style={{"list-style-type":"none","padding-inline-start": "0px"}}>{(prescription.medicines==null ||prescription.medicines.length==0 )?"":prescription.medicines.map((medicine) => {
                                        return <li>{medicine.Name}</li>;
                                        })
                                    }</ul></td>
            <td><ul style={{"list-style-type":"none","padding-inline-start": "0px"}}>{(prescription.medicines==null ||prescription.medicines.length==0 )?"":prescription.medicines.map((medicine) => {
                                        return <li>{medicine.Dosage}</li>;
                                        })
                                    }</ul></td>
            <td><ul style={{"list-style-type":"none","padding-inline-start": "0px"}}>{(prescription.medicines==null ||prescription.medicines.length==0 )?"":prescription.medicines.map((medicine) => {
                                        return <li>{medicine.fd}</li>;
                                        })
                                    }</ul></td>
            <td><ul style={{"list-style-type":"none","padding-inline-start": "0px"}}>{(prescription.tests==null ||prescription.tests.length==0 )?"":prescription.tests.map((test) => {
                                        return <li>{test}</li>;
                                        })
                                    }</ul></td>
        </tr>
    </>
    )
}

export default PatientViewPres;