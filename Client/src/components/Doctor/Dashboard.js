import React from 'react';
import { useState, useEffect,useContext  } from 'react';
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';
import AlertBar from '../utilities/alertbar';

import { AuthContext } from '../../context/auth-context';

const fetchPrescriptionData = async (id,auth) => {
  let doctorID = id;
  var tempdata = {};
  try {
    const res = await fetch("/doctorDashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + auth.token,
      },
      body: JSON.stringify({
        doctorID
      })
    });
    const data = await res.json();
    
    if (res.status === 422 || !data) {
      console.log("Error while fetching Patient data");
    } else {
      console.log("Patient data fetched successfully");
      console.log(data);
      tempdata = {
        "totalPatient":data.result.totalPatients,
        "totalincome":data.result.totalincome,
        "pendingPatient":data.result.pendingPatient,
        "todayPendingPatient":data.result.todayPendingPatient,
        "todayCompletedPatient":data.result.todayCompletedPatient,
        "completedPatient":data.result.completedPatient,
      }
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  console.log(tempdata);
  return tempdata;
}

function Dashboard({id,setPage,alert,setalert}) {
  const auth = useContext(AuthContext);
  const [details, setdetails] = useState(null);
  useEffect(() => {
    setPage('Dashboard');
    fetchPrescriptionData(id,auth).then(tempdata => {
      console.log(tempdata);
      setdetails(tempdata);
      console.log(details);
    })
}, []);
  console.log('dashboard');
    console.log(id);

    
  return (
    <>
   
<div class="home-content"style={{"PaddingTop":"50%"}}>
<AlertBar alert = {alert} setalert={setalert}/>
{(details===null)?<>Loading....</>: 
<>
<div class="overview-boxes" >
  <div class="box">

      <div class="right-side">
        <div class="box-topic">Total Patients</div>
        <div class="number">{details.totalPatient}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Up from yesterday</span>
        </div>
      </div>
      <span class="iconify" data-icon="clarity:list-line" data-width="50" data-height="50"></span>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic"> Today Earning</div>
        <div class="number">{details.totalincome}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Today only</span>
        </div>
      </div>
      <i class='bx bx-cart cart three' ></i>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Approval waiting</div>
        <div class="number">{details.pendingPatient}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Up from yesterday</span>
        </div>
      </div>
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-checklist-news-flatart-icons-outline-flatarticons.png"/>
    </div>
  </div>
  <br/>
  <br/>
  <div class="overview-boxes">
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Appointment left</div>
        <div class="number">{details.todayPendingPatient}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Up from yesterday</span>
        </div>
      </div>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/ingredients-list.png"/>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Appointment Served today</div>
        <div class="number">{details.todayCompletedPatient}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Today only</span>
        </div>
      </div>
      <img src="https://img.icons8.com/color/48/000000/checked-2--v1.png"/>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Total Appointment served</div>
        <div class="number">{details.completedPatient}</div>
        <div class="indicator">
          <i class='bx bx-up-arrow-alt'></i>
          <span class="text">Up from yesterday</span>
        </div>
      </div>
      <img src="https://img.icons8.com/external-wanicon-solid-wanicon/49/000000/external-appointment-health-checkup-wanicon-solid-wanicon.png"/>
    </div>
  </div>
</>
}
</div>
</>
  );
}

export default Dashboard