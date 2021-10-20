import React from 'react'
import '../../src/css/dashboard.css';
import { NavLink } from 'react-router-dom';
import SideBarDoctor from '../components/Doctor/SideBarDoctor';
import NavBarDoctor from '../components/Doctor/navBarDoctor';
import Dashboard from '../components/Doctor/Dashboard';
import {Switch, Route, Redirect} from 'react-router-dom';
import patientlist from '../components/Doctor/patientList';

function Doctors() {
  return (
    <>
      <SideBarDoctor />
      <section class="home-section">
        <NavBarDoctor />
        <Switch>
        <Route exact path="/doctors/" component={Dashboard} />
        <Route exact path="/doctors/dashboard" component={Dashboard} />
        <Route exact path="/doctors/patientlist" component={patientlist} />
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
