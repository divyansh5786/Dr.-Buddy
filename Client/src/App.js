import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Signup from './pages/Signup';
import {Switch, Route, Redirect} from 'react-router-dom';
import './css/App.css';
import Profile from './components/utilities/patientProfileForDoctor';


function App() {
  const [doctor,setDoctor] = useState(null);
  const [patient,setPatient] = useState(null);
  const id='';
  return (
    <>
      <Navbar/>
      <Switch>
      <Route  path="/doctors" render={()=>{
            return(<Doctors doctor={doctor} />)
          }}> 
           </Route>
           <Route  path="/patients" render={()=>{
            return(<Patients patient={patient} setPatient={setPatient}  />)
          }}> 
           </Route>
           <Route exact path="/SignUp" render={()=>{return(<Signup setDoctor={setDoctor} />)}}/> 
        <Route exact path="/patientProfile" component={Profile} />
        <Route exact path="/" render={()=>{return(<Home setPatient={setPatient} setDoctor={setDoctor} />)}}> 
           </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
