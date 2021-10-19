import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import PatientList from './pages/PatientList';
import Signup from './pages/Signup';
import Bookapp from './pages/Bookapp';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/patients" component={Patients} />
        <Route exact path="/patientlist" component={PatientList} />
        <Route exact path="/bookapp" component={Bookapp} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
