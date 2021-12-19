import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function PatientDetails({patient}) {
    const history = useHistory();
    return (
    <>
        <div className="box" style={{marginBottom:'20px'}}>
            <div className="card card-table mb-0" style={{"padding":"10px"}}>
                <div className="doctor-widget">
                    <div className="doc-info-cont">
                                    <div style={{"font-weight":"550"}}>Patient Name : <span style={{"font-weight":"400"}}>{patient.name}</span> </div>
                                    <div style={{"font-weight":"550"}}>Gender : <span style={{"font-weight":"400"}}>{patient.gender}</span></div>
                                    <div style={{"font-weight":"550"}}>Age : <span style={{"font-weight":"400"}}>{patient.age + "years"}</span></div>
                                    
                    </div>
                    <div className="doc-info-right">
                                <div style={{"font-weight":"550"}}>Address : <span style={{"font-weight":"400"}}>{patient.Address}</span></div>
                                <div>{"      " + patient.city + ", " + patient.state}</div>
                                <br/>
                                <div style={{"font-weight":"550"}}>Phone Number : <span style={{"font-weight":"400"}}>{patient.mobile}</span></div>
                                <div style={{"font-weight":"550"}}>Email : <span style={{"font-weight":"400"}}> {patient.email}</span></div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default PatientDetails
