
import React from 'react'
import '../../src/css/style.css';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';


function ForgetPassword({setDoctor}) {

  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "",dateofbirth:"",secret:"",type:"" });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { username, password,dateofbirth,secret, type } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password,dateofbirth,secret, type
      })
    });
    console.log(res);
    const data = await res.json();
   if (res.status === 422 || !data) {
      window.alert("Invailid Details");
      console.log("Invailid Details");
    } else {
      window.alert("Password change Successfully");
      console.log("Password change Successfully");
      console.log(type);
        history.replace("/");
    }
      
  }

    return (
    <>

      <div className="signupd">

        <h2 className="text-center">Forget Password</h2>
        <form method="POST" className="sign-in-form">

        <div className="form-floating mb-3">
            <select className="form-select" id="floatingSelectGrid"
              name="type"
              value={user.type}
              onChange={handleInputs}>
                <option value="Select">Select</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
            </select>
            <label for="floatingInput">Type</label>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  name="username"
                  value={user.username}
                  onChange={handleInputs} />
                <label for="floatingInput">username</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs} />
                <label for="floatingpassword">New password</label>
                
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="dateofbirth"
                  name="dateofbirth"
                  value={user.dateofbirth}
                  onChange={handleInputs} />
                <label for="floatingInput">Date of birth in (dd/mm/yyyy)</label>
                
              </div>
            </div>

          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit" onClick={postData}>Submit</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default ForgetPassword
