import React from 'react';
import { useState,useEffect } from 'react';
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function Dashboard({id,setPage}) {
  useEffect(() => {
    setPage('Dashboard');

}, []);
  console.log('dashboard');
    console.log(id);

    
  return (
    <>
<div class="home-content"style={{"PaddingTop":"50%"}}>
<div class="overview-boxes" >
  <div class="box">
    <div class="right-side">
      <div class="box-topic">Total Patients</div>
      <div class="number">170</div>
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
      <div class="number">₹7</div>
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
      <div class="number">170</div>
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
      <div class="number">170</div>
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
      <div class="number">7</div>
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
      <div class="number">170</div>
      <div class="indicator">
        <i class='bx bx-up-arrow-alt'></i>
        <span class="text">Up from yesterday</span>
      </div>
    </div>
    <img src="https://img.icons8.com/external-wanicon-solid-wanicon/49/000000/external-appointment-health-checkup-wanicon-solid-wanicon.png"/>
  </div>
</div>
</div>
</>
  );
}

export default Dashboard