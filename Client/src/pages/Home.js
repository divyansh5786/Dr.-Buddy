import { useState } from 'react';
import React from 'react'
import '../../src/css/style.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Home({setPatient,setDoctor}) {
  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "",type:"" });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
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
    if (res.status == 422 || !data) {
      window.alert("Invailid Credentials");
      console.log("Invailid Credentials");
    } else {
      //window.alert("Login Successful");
      console.log("Login Successfull",data.id);
      
      if(type=='Doctor')
      {
        setDoctor(data);
        history.replace("/doctors/dashboard");
      }
      else
      {
        //console.log(data.name);
        setPatient(data);
        history.replace("/patients/dashboard");
      }
      
    }
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
                </select>
              </div>
            <button className="btn btn-primary" type="submit" onClick={postData}>Login</button>

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
