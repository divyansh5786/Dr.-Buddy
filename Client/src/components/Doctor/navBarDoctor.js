import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function NavBarDoctor() {
  return (
    <>
    <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn'></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class='bx bx-search' ></i>
          </div>
          <div class="profile-details">
            <box-icon name="user"></box-icon>
            <span class="admin_name">Dr. Nayan</span>
          </div>
        </nav>
    </>
  )
}

export default NavBarDoctor

