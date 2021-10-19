import React from 'react'
import '../../src/dashboard.css';
import {NavLink} from 'react-router-dom';

function Doctors() {
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
            <NavLink class="links_name" to="/doctors">Dashboard</NavLink>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-box' ></i>
            <span class="links_name">Appointments</span>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-list-ul' ></i>
            <NavLink class="links_name" to="/patientlist">Patients list</NavLink>
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
        <span class="admin_name">Dr. Nayan</span>
      </div>
    </nav>

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
  </section>
     

        </>
    )
}

export default Doctors
