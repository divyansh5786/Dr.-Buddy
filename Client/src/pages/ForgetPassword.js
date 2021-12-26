
import React from 'react'
import '../../src/css/style.css';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';


function ForgetPassword({setDoctor,setalertapp}) {

  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "",email:"",type:"" });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { username, password,email, type } = user;
    const res = await fetch("/forgetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password,email, type
      })
    });
    console.log(res);
    const data = await res.json();
   if (res.status === 422 || !data) {
    setalertapp({ color: "red", message: "Invalid Credentials" });
      console.log("Invailid Details");
    } else {
      setalertapp({ color: "green", message: "Password changed Successfully" });
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
                  name="email"
                  value={user.email}
                  onChange={handleInputs} />
                <label for="floatingInput">Email</label>
                
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
