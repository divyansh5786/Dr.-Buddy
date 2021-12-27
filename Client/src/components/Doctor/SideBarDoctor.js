import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function SideBarDoctor() {
  return (
    <>
      <div class="sidebar">
        <div class="logo-details">
          <i></i>
          <span class="logo_name">Doctor</span>
        </div>
        <ul class="nav-links">
          <li>
          <NavLink to="/doctors/dashboard">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name" to="/doctors/dashboard">Dashboard</span>
              </NavLink>
          </li>
          <li>
          <NavLink to="/doctors/mypatient">
              <i class='bx bx-box' ></i>
              <span class="links_name" >My Patients</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/doctors/appointments">
              <i class='bx bx-box' ></i>
              <span class="links_name" >Appointments</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/doctors/prescription">
              <i class='bx bx-box' ></i>
              <span class="links_name" to="/doctors/prescription">Prescriptions</span>
            </NavLink>
          </li>
          <li><NavLink to="/doctors/profile">
              <i class='bx bx-cog' ></i>
              <span class="links_name" >Profile</span>
            </NavLink>
          </li>
          <li><NavLink to="/doctors/addprofessional">
              <i class='bx bx-cog' ></i>
              <span class="links_name" >Add Professional</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/doctors/Pendingappointemnt">
              <i class='bx bx-message' ></i>
              <span class="links_name">Pending</span>
            </NavLink>
          </li>
          <li >
          <NavLink to="/doctors/logout">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </NavLink>
          </li>
          <li >
          <NavLink to="/doctors/review">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Reviews</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBarDoctor