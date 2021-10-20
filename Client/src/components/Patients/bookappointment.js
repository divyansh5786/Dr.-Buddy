import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/patientCard';


function bookappointment() {
return (
    <>
        <div class="home-content">
            <div class="d-flex justify-content-center mt-50 mb-50">
                <div class="row">
                    <div class="col-md-12">
                        <PatientCard />
                        <PatientCard />
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default bookappointment