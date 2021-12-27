import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function NavBarDoctor({page,name}) {
  return (
    <nav style={{"position":"sticky","width":"auto"}}>
          <div class="sidebar-button">
            <span class="dashboard">{page}</span>
          </div>

          <NavLink to="/doctors/profile">
          <div class="profile-details">
            <box-icon name="user"></box-icon>
            <span class="admin_name">{name}</span>
          </div>
          </NavLink>
        </nav>
  )
}

export default NavBarDoctor

