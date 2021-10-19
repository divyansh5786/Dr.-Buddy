import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../src/dashboard.css';

function Patients() {
    return (
        <div>
             <>
            <div class="sidebar">
    <div class="logo-details">
      <i></i>
      <span class="logo_name">Dr.Buddy</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
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
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search' ></i>
      </div>
      <div class="profile-details">
        <box-icon name="user"></box-icon>
        <span class="admin_name">Patient Name</span>
      </div>
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Heart Rate</div>
            <div class="number">12 bpm</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Uptill Now</span>
            </div>
          </div>
          <span class="iconify" data-icon="system-uicons:heart-rate" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Body Tempreture</div>
            <div class="number">18 c</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Today only</span>
            </div>
          </div>
          <span class="iconify" data-icon="emojione-v1:thermometer" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Blood Pressure</div>
            <div class="number">202/90</div>
            <div class="indicator">
              <span class="text">mg/dl</span>
            </div>
          </div>
          <span class="iconify" data-icon="healthicons:blood-pressure-2" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Glucose Level</div>
            <div class="number">70-90</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt up'></i>
              <span class="text">Today Only</span>
            </div>
          </div>
          <span class="iconify" data-icon="entypo:drop" data-width="50" data-height="50"></span>
        </div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Doctor Appointment</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">05 Jan 2021</a></li>
              
            </ul>
            <ul class="details">
            <li class="topic">Doctor Name</li>
            <li><a href="#">Alex Doe</a></li>
            <li><a href="#">David Mart</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Purpose</li>
            <li><a href="#">X-rays report</a></li>
            <li><a href="#">MRI Scan report</a></li>
            
          </ul>
          <ul class="details">
            <li class="topic">Paid Amount</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$124.55</a></li>
            
          </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Top Doctors</div>
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
  </section>
     

        </>
        </div>
    )
}

export default Patients
