import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';

function PatientCard() {
  return (
    <>
<div class="card blog-horizontal mt-4">
    <div class="card-body">
        <div class="card-img-actions mr-sm-3 mb-3"><img src="https://i.imgur.com/OJHNsX9.jpg" class="img-fluid card-img" alt="" /></div>
        <div class="mb-3">
            <h5 class="d-flex font-weight-semibold flex-nowrap my-1">Dr. Nayan Sins</h5>
            <ul class="list-inline list-inline-dotted text-muted mb-0">
                <li class="list-inline-item">Specialist :-<a href="#" class="text-muted" data-abc="true"> Cardeologist</a></li>
                <li class="list-inline-item"></li>
            </ul>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    </div>
    <div class="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
        <ul class="list-inline list-inline-dotted mb-0">
            <li class="list-inline-item"><i class="fa fa-user mr-1"></i> 272</li>
            <li class="list-inline-item"><i class="fa fa-calendar-check-o mr-1"></i> 15 hours</li>
            <li class="list-inline-item">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="text-muted ml-1">(12)</span> </li>
        </ul>
        <div class="mt-2 mt-sm-0"> <a href="#" class="course-button">Book Appointment</a> </div>
    </div>
</div>

</>
  )}

  export default PatientCard