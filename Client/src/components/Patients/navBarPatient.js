import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

function NavBarPatient({page}) {
  return (
    <>
    <nav>
          <div class="sidebar-button">
            <span class="dashboard">{page}</span>
          </div>

          <div class="profile-details">
            <box-icon name="user"></box-icon>
            <span class="admin_name">Lokahnde</span>
          </div>
        </nav>
    </>
  )
}

export default NavBarPatient
