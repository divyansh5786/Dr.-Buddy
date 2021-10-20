import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Signup from './pages/Signup';
import {Switch, Route, Redirect} from 'react-router-dom';
import './css/App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        
        <Route path="/doctors" component={Doctors} />
        <Route path="/patients" component={Patients} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
