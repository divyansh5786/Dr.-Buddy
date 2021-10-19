import React from 'react'
import '../../src/dashboard.css';
import '../../src/bookapp.css';
import {NavLink} from 'react-router-dom';

function Bookapp() {
    return (
        <>
            <div class="sidebar">
    <div class="logo-details">
      <i></i>
      <span class="logo_name">Dr.Buddy</span>
    </div>
      <ul class="nav-links">
        <li>
        <a>
            <i class='bx bx-grid-alt' ></i>
            <NavLink class="links_name" to="/patients">Dashboard</NavLink>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-box' ></i>
            <NavLink class="links_name" to="/bookapp">Book Appointment</NavLink>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Settings</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Doctors</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search' ></i>
      </div>
      
    </nav>

<div class="home-content">
    

<div class="d-flex justify-content-center mt-50 mb-50">
    <div class="row">
        <div class="col-md-12">
            <div class="card blog-horizontal">
                <div class="card-body">
                    <div class="card-img-actions mr-sm-3 mb-3"><img src="https://i.imgur.com/OJHNsX9.jpg" class="img-fluid card-img" alt=""/></div>
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
            <div class="card blog-horizontal mt-4">
                <div class="card-body">
                    <div class="card-img-actions mr-sm-3 mb-3"><img src="https://i.imgur.com/OJHNsX9.jpg" class="img-fluid card-img" alt=""/> </div>
                    <div class="mb-3">
                        <h5 class="d-flex font-weight-semibold flex-nowrap my-1">Dr.Ayush Khalifa </h5>
                        <ul class="list-inline list-inline-dotted text-muted mb-0">
                            <li class="list-inline-item">Specialist :-<a href="#" class="text-muted" data-abc="true">Sexologist</a></li>
                        </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>
                <div class="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                    <ul class="list-inline list-inline-dotted mb-0">
                        <li class="list-inline-item"><i class="fa fa-user mr-1"></i>170</li>
                        <li class="list-inline-item"><i class="fa fa-calendar-check-o mr-1"></i> 14 hours</li>
                        <li class="list-inline-item"> 
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        <span class="text-muted ml-1">(27)</span> </li>
                    </ul>
                    <div class="mt-2 mt-sm-0"> <a href="#" data-abc="true" class="course-button"> Book Appointment</a> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  </section>
     

        </>
    )
}

export default Bookapp
