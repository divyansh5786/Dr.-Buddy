import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/css/dashboard.css';
import SideBarPatient from '../components/Patients/sideBarPatient';
import NavBarPatient from '../components/Patients/navBarPatient';
import Dashboard from '../components/Patients/Dashboard';
import Bookappointment from '../components/Patients/bookappointment';
import Addmedical from '../components/Patients/addMedicalData';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppConfirm from '../components/Patients/appConfim';
import Appointments from '../components/Patients/appointments';
import Prescriptions from '../components/Patients/prescriptions';
import MedicalData from '../components/Patients/MedicalData';
import Profile from '../components/Patients/profile';
import ViewPrescription from '../components/utilities/viewPrescription';
import { useHistory } from 'react-router-dom';


function Patients({ patient, setPatient }) {
   const history = useHistory();
   console.log(patient);
   let id = patient.id;
   let name = patient.name;
   console.log(name);
   const [doctorBook, setDoctorBook] = useState(null);
   const [page, setPage] = useState('Dashboard');
   const [alert, setalert] = useState(null);
   const [appointment, setappointment] = useState(null);

   const logout = () => {
      setPatient(null); 
      setDoctorBook(null); 
      setPage('Dashboard'); 
      setalert(null);
      setappointment(null); 
      id = null; 
      name = null; 
      history.replace("/");
   }
   return (
      <div>
         <>
            <SideBarPatient />
            <section class="home-section">
               <NavBarPatient page={page} name={name} />

               <Switch>
                  <Route exact path="/patients/addmedical" render={() => { return (<Addmedical id={id} setPage={setPage} setalert={setalert} />) }}>
                  </Route>
                  <Route exact path="/patients/viewprescriptions" render={() => { return (<ViewPrescription appointment={appointment} />) }}>
                  </Route>
                  <Route exact path="/patients/profile" render={() => { return (<Profile id={id} setPage={setPage} alert={alert} setalert={setalert} />) }}>
                  </Route>
                  <Route exact path="/patients/appointments" render={() => { return (<Appointments id={id} setPage={setPage} />) }}>
                  </Route>
                  <Route exact path="/patients/prescription" render={() => { return (<Prescriptions id={id} setPage={setPage} />) }}>
                  </Route>
                  <Route exact path="/patients/medicaldata" render={() => { return (<MedicalData id={id} setPage={setPage} alert={alert} setalert={setalert} />) }}>
                  </Route>
                  <Route exact path="/patients/dashboard" render={() => { return (<Dashboard id={id} setPage={setPage} alert={alert} setalert={setalert} setappointment={setappointment} />) }}>
                  </Route>
                  <Route exact path="/patients/bookapp" render={() => { return (<Bookappointment setDoctorBook={setDoctorBook} setPage={setPage} />) }}>
                  </Route>
                  <Route exact path="/patients/" render={() => { return (<Dashboard id={id} setPage={setPage} />) }}>
                  </Route>
                  <Route exact path="/patients/bookapp/confirm" render={() => { return (<AppConfirm doctor={doctorBook} patient={id} setPage={setPage} setalert={setalert} />) }}>
                  </Route>
                  <Route exact path="/patients/logout" render={() => {logout()}}>
                  </Route>

                  {/* <Route exact path="/patients/bookapp/confirm" component={AppConfirm} /> */}
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
