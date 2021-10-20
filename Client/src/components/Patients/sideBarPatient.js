import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function SideBarPatient() {
  return (
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
              <NavLink class="links_name" to="/patients/dashboard">Dashboard</NavLink>
            </a>
          </li>
          <li>
            <a>
              <i class='bx bx-box' ></i>
              <NavLink class="links_name" to="/patients/bookapp">Book Appointment</NavLink>
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
    </>
  )
}

export default SideBarPatient