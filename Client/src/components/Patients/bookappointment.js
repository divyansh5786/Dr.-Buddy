import React from 'react';
import { useState,useEffect } from 'react';
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/patientCard';
import SearchDoctor from '../utilities/searchDoctor';
import { AuthContext } from '../../context/auth-context';

function Bookappointment({setDoctorBook,setPage}) {

    const [doctors,setDoctors] = useState(null);
    useEffect(() => {
        setPage('Book Appointment');
    }, []);

return (
    <>
        <div className="home-content">
        <SearchDoctor setDoctors={setDoctors} />
            {/* <SearchDoctor /> */}
            <div style={{marginInline:'10%'}}>
                <div className="row">
                    <div className="col-md-12">
                    {doctors===null?"Select the feilds" :doctors.length===0?"No Doctors to show" :  
                    doctors.map((doctor)=>{
                        console.log(doctor.name);
                        return (<PatientCard doctor={doctor} setDoctorBook={setDoctorBook} show={true}/>   
                     )
                 })
                    } 
                       
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Bookappointment