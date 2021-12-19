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
<div class="home-content">
<div class="overview-boxes">
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
      <div class="box-topic">Appointments</div>
      <div class="number">7</div>
      <div class="indicator">
        <i class='bx bx-up-arrow-alt'></i>
        <span class="text">Today only</span>
      </div>
    </div>
    <span class="iconify" data-icon="clarity:list-line" data-width="50" data-height="50"></span>
  </div>
  <div class="box">
    <div class="right-side">
      <div class="box-topic">Total Profit</div>
      <div class="number">$12,876</div>
      <div class="indicator">
        <i class='bx bx-up-arrow-alt'></i>
        <span class="text">Up from yesterday</span>
      </div>
    </div>
    <i class='bx bx-cart cart three' ></i>
  </div>
  <div class="box">
    <div class="right-side">
      <div class="box-topic">Total Return</div>
      <div class="number">$1100</div>
      <div class="indicator">
        <i class='bx bx-down-arrow-alt down'></i>
        <span class="text">Down From Today</span>
      </div>
    </div>
    <i class='bx bxs-cart-download cart four' ></i>
  </div>
</div>

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
  <div class="top-sales box">
    <div class="title">Top Patients Reviews</div>
    <ul class="top-sales-details">
      <li>
      <a href="#">
        <img src="images/sunglasses.jpg" alt=""/>
        <span class="product">Vuitton Sunglasses</span>
      </a>
      <span class="price">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      </span>
    </li>
    <li>
      <a href="#">
         <img src="images/jeans.jpg" alt=""/>
        <span class="product">Hourglass Jeans </span>
      </a>
      <span class="price">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      </span>
    </li>
    <li>
      <a href="#">
       <img src="images/nike.jpg" alt=""/>
        <span class="product">Nike Sport Shoe</span>
      </a>
      <span class="price">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      </span>
    </li>
    <li>
      <a href="#">
        <img src="images/scarves.jpg" alt=""/>
        <span class="product">Hermes Silk Scarves.</span>
      </a>
      <span class="price">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      </span>
    </li>
    </ul>
  </div>
</div>
</div>
</>
  );
}

export default Dashboard