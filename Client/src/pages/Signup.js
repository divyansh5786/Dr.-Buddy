import React from 'react'
import '../../src/style.css';

function Signup() {
    return (
        <>
      <div class="forms-container">
        <div class="signupd">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign Up</h2>
            
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            
            <div class="row">
              <div class="col">
              <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="First Name" />
              </div>
              </div>
              <div class="col">
              <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Last Name" />
              </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <div class="input-field">
              <i class="fas fa-mobile-alt"></i>
              <input type="text" placeholder="Mobile Number" />
              </div>
              </div>
              <div class="col">
              <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
              </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <div class="input-field dropdown">
              <i class="fas fa-map-marker"></i>
              <input type="text" placeholder="State" />
              </div>
              </div>
              <div class="col">
              <div class="input-field">
              <i class="fas fa-map-marker"></i>
              <input type="text" placeholder="City" />
              </div>
              </div>
            </div>

            <div class="input-field">
              <i class="fas fa-map-marked-alt"></i>
              <input type="text" placeholder="Address" />
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
        </>
    )
}

export default Signup
