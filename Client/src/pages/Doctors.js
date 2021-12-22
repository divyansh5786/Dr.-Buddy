import React from 'react'
import '../../src/css/dashboard.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBarDoctor from '../components/Doctor/SideBarDoctor';
import Navbar from './Navbar';
import NavBarDoctor from '../components/Doctor/navBarDoctor';
import Dashboard from '../components/Doctor/Dashboard';
import {Switch, Route, Redirect} from 'react-router-dom';
import patientlist from '../components/Doctor/patientList';
import Appointments from '../components/Doctor/appointments';
import ViewPrescription from '../components/Doctor/viewPrescription';
import AddPrescription from '../components/Doctor/addPrescription';
import AddProfessional from '../components/Doctor/addprofessional';
import Prescriptions from '../components/Doctor/prescription';
import MyPatient from '../components/Doctor/myPatients';
import PatientView from '../components/Doctor/patientView';

function Doctors(doctor) {
  let id = doctor.doctor.id;
  let name = doctor.doctor.name;
  const [page,setPage] = useState('Dashboard');
  return (
    <>
      <SideBarDoctor />
      <section class="home-section">
      <NavBarDoctor page={page} name={name}/>
        <Switch>
        <Route exact path="/doctors/" render={()=>{
            return(<Dashboard id={id} />)
          }}> 
           </Route>
           <Route exact path="/doctors/dashboard" render={()=>{
            return(<Dashboard id={id} setPage={setPage}/>)
          }}> 
           </Route>
           <Route exact path="/doctors/viewprescription"render={()=>{return(<ViewPrescription id={id} setPage={setPage} />)}}/>
           <Route exact path="/doctors/addprescription"render={()=>{return(<AddPrescription id={id} setPage={setPage} />)}} />
           <Route exact path="/doctors/addprofessional"render={()=>{return(<AddProfessional id={id} setPage={setPage} />)}} />
        <Route exact path="/doctors/patientview" render={()=>{return(<PatientView id={id} setPage={setPage} />)}} />
        <Route exact path="/doctors/patientlist" component={patientlist} />
        <Route exact path="/doctors/mypatient" render={()=>{return(<MyPatient id={id} setPage={setPage} />)}} />
        <Route exact path="/doctors/appointments" render={()=>{return(<Appointments id={id} setPage={setPage} />)}} />
        <Route exact path="/doctors/prescription" render={()=>{return(<Prescriptions id={id} setPage={setPage} />)}} />
        {/* <Route exact path="/patients" component={Patients} />
        <Route exact path="/patientlist" component={PatientList} />
        <Route exact path="/bookapp" component={Bookapp} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />  */}
      </Switch>
        
      </section>


    </>
  )
}

export default Doctors
