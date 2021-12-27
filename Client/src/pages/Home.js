import { useState, useContext } from 'react';
import React from 'react'
import '../../src/css/style.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-login';



function Home({ setPatient, setDoctor, setalertapp }) {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "", type: "" });

  const [errors, setErrors] = useState({});
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    setErrors({});
  }

  const postData = async (e) => {
    e.preventDefault();
    const { username, password, type } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password, type
      })
    });
    console.log(res);
    const data = await res.json();
    if (res.status == 422 || !data || !data.id || !data.token) {
      setalertapp({ color: "red", message: "Invalid Credentials" });
      console.log("Invailid Credentials");
    } else {
      //window.alert("Login Successful");
      console.log("Login Successfull", data.id);
      console.log("Token" + data.token);
      auth.token = data.token;
      if (type == 'Doctor') {
        setDoctor(data);
        history.replace("/doctors/dashboard");
      }
      else {
        //console.log(data.name);
        setPatient(data);
        history.replace("/patients/dashboard");
      }

    }
  }
  const valid = (x) => {
    let errors = {}
    if (!x.type) {
      errors.type = "Select a Type."
      setalertapp({ color: "red", message: "Select Type" });
    }
    return errors;
  }
  const responseSuccessGoogle = async (response) => {

    var x = valid(user);
    console.log(x);
    if (Object.keys(x).length !== 0) {
      setErrors(x);
      return;
    }
    else {

      const email = response.profileObj.email;
      var firstname = response.profileObj.givenName;
      var username = firstname + '_' + user.type +'_googleuser';
      const lastname = response.profileObj.familyName;
      const type = user.type;

      const res = await fetch("/googlelogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, firstname, username, lastname, type
        })
      });
      console.log(res);
      const data = await res.json();
      if (res.status == 422 || !data || !data.id || !data.token) {
        setalertapp({ color: "red", message: data.error });
        console.log(data.error);
      } else if(res.status===200){
        //window.alert("Login Successful");
        console.log("Login Successfull", data.id);
        console.log("Token" + data.token);
        auth.token = data.token;
        if (type == 'Doctor') {
          setDoctor(data);
          history.replace("/doctors/dashboard");
        }
        else {
          //console.log(data.name);
          setPatient(data);
          history.replace("/patients/dashboard");
        }

      }
      else
      {
        console.log("Login Successfull", data.id);
        console.log("Token" + data.token);
        auth.token = data.token;
        if (type == 'Doctor') {
          setDoctor(data);
          history.replace("/doctors/profile");
        }
        else {
          //console.log(data.name);
          setPatient(data);
          history.replace("/patients/profile");
        }
      }
    }
  }
  const responseErrorGoogle = (response) => {

  }

  return (
    <>

      
      <div className="container">
        
        <div className="forms-container">
          <div className="signin-signup">
            <form method="POST" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleInputs} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs} />
              </div>
              <div className="input-field dropdown">
                <i className="fas fa-user"></i>
                <select className="selectpicker"
                  name="type"
                  value={user.type}
                  onChange={handleInputs}>
                  <option>Select</option>
                  <option>Doctor</option>
                  <option>Patient</option>
                </select><br />
                {errors.type && <p className="error" style={{ "color": "red" }}>{errors.type}</p>}
              </div><br />
              <a href='/forgetpassword'>Forget Password ?</a>
              <div><button className="btn btn-primary" type="submit" onClick={postData}>Login</button>
              <a class="icon-social oauth_button oauth_button-medium connect" ><GoogleLogin
                clientId="1084728443379-1kmmbt96l1cj2n7kd7r8uvmvbtpamn23.apps.googleusercontent.com"
                buttonText='login with google'
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
              />
              </a>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
        

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Not Registered ?</h3>
              <p>
                Register Here
              </p>
              <NavLink to="/SignUp">
                <button type="submit" className="btn transparent" id="sign-up-btn" >
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
