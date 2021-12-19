import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function patientlist() {
  return (
    <>

<div class="home-content">

<div class="sales-boxes">
  <div class="recent-sales box">
    <div class="title">Patient Appointment</div>
    <div class="sales-details">
      <ul class="details">
        <li class="topic">Date</li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
      </ul>
      <ul class="details">
        <li class="topic">Patient Name</li>
        <li><a href="#">Alex Doe</a></li>
        <li><a href="#">David Mart</a></li>
        <li><a href="#">Roe Parter</a></li>
        <li><a href="#">Diana Penty</a></li>
      </ul>
      <ul class="details">
        <li class="topic">Purpose</li>
        <li><a href="#">X-rays report</a></li>
        <li><a href="#">MRI Scan report</a></li>
        <li><a href="#">General CheckUp</a></li>
        <li><a href="#">Dental CheckUp</a></li>
      </ul>
      <ul class="details">
        <li class="topic">Earn Amount</li>
        <li><a href="#">$204.98</a></li>
        <li><a href="#">$24.55</a></li>
        <li><a href="#">$25.88</a></li>
        <li><a href="#">$170.66</a></li>
      </ul>
    </div>
    <div class="button">
      <a href="#">See All</a>
    </div>
  </div>

</div>
</div>

</>
  )
}

export default patientlist;