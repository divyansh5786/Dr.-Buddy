import React from 'react'
import '../../src/css/style.css';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field dropdown">
                <i class="fas fa-user"></i>
                <select class="selectpicker">
                  <option>Doctor</option>
                  <option>Patient</option>
                </select>
              </div>

              <input type="submit" value="Login" class="btn solid" />

            </form>


          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Not Registered ?</h3>
              <p>
                Register Here
              </p>
              <NavLink to="/SignUp">
              <button type ="submit" class="btn transparent" id="sign-up-btn" >
                Sign Up
              </button>
            </NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
