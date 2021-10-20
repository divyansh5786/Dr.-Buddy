import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../src/css/dashboard.css';
import SideBarPatient from '../components/Patients/sideBarPatient';
import NavBarPatient from '../components/Patients/navBarPatient';
import Dashboard from '../components/Patients/Dashboard';
import bookappointment from '../components/Patients/bookappointment';
import {Switch, Route, Redirect} from 'react-router-dom';
function Patients() {
  return (
    <div>
      <>
      <SideBarPatient />
      <section class="home-section">
        <NavBarPatient />
        <Switch>
        
        <Route exact path="/patients/dashboard" component={Dashboard} />
        <Route exact path="/patients/bookapp" component={bookappointment} />
        <Route exact path="/patients/" component={Dashboard} />
        {/* <Route exact path="/patients" component={Patients} />
        <Route exact path="/patientlist" component={PatientList} />
        <Route exact path="/bookapp" component={Bookapp} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />  */}
      </Switch>
        
      </section>
      </>
    </div>
  )
}

export default Patients
