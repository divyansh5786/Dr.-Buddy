import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function SideBarDoctor() {
  return (
    <>
      <div class="sidebar">
        <div class="logo-details">
          <i></i>
          <span class="logo_name">Dr.Buddy</span>
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
          <li>
          <NavLink to="/doctors/messages">
              <i class='bx bx-message' ></i>
              <span class="links_name">Messages</span>
            </NavLink>
          </li>
          <li >
          <NavLink to="/doctors/logOut">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBarDoctor