import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function SideBarPatient() {
  return (
    <>
      <div class="sidebar">
        <div class="logo-details">
          <i></i>
          <span class="logo_name">Patient</span>
        </div>
        <ul class="nav-links">
          <li>
          <NavLink to="/patients/dashboard">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name" to="/patients/dashboard">Dashboard</span>
              </NavLink>
          </li>
          <li>
            <NavLink to="/patients/bookapp">
              <i class='bx bx-box' ></i>
              <span class="links_name" >Book Appointment</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/patients/appointments">
              <i class='bx bx-box' ></i>
              <span class="links_name" >Appointments</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/patients/prescription">
              <i class='bx bx-box' ></i>
              <span class="links_name" to="/patients/prescription">Prescriptions</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/patients/medicaldata">
              <i class='bx bx-cog' ></i>
              <span class="links_name" >Medical Data</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/patients/profile">
              <i class='bx bx-cog' ></i>
              <span class="links_name" >Profile</span>
            </NavLink>
          </li>
          <li >
          <NavLink to="/patients/logOut">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBarPatient