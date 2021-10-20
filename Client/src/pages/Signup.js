import { useState } from 'react';
import React from 'react'
import '../../src/css/style.css';

function Signup() {

  const [user, setUser] = useState({
    username: "", Password: "", firstName: "", LastName: "", MobileNo: "", EmailId: "", City: "", State: "", Address: "", Mode: ""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();

    const { username, Password, firstName, LastName, MobileNo, EmailId, City, State, Address, Mode } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, Password, firstName, LastName, MobileNo, EmailId, City, State, Address, Mode
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invailid Registration");
      console.log("Invailid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successfull");
      // history.push('/login');
    }


  }


  return (
    <>

      <div className="signupd">

        <h2 className="text-center">Sign in</h2>
        <form method="POST" className="sign-in-form">

          <div className="form-floating mb-3">
            <select className="form-select" id="floatingSelectGrid" 
            name="Mode" 
            value={user.Mode} 
            onChange={handleInputs}>
              <option value="0">Doctor</option>
              <option value="1">Patient</option>
            </select>
            <label for="floatingInput">Type</label>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                name="username" 
                value={user.username} 
                onChange={handleInputs}/>
                <label for="floatingInput">username</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                name="Password" 
                value={user.Password} 
                onChange={handleInputs} />
                <label for="floatingPassword">Password</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="First Name"
                name="firstName" 
                value={user.firstName} 
                onChange={handleInputs} />
                <label for="floatingInput">First Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" 
                name="LastName" 
                value={user.LastName} 
                onChange={handleInputs}/>
                <label for="floatingInput">Last Name</label>
              </div>
            </div>
          </div>



          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Mobile Number" 
                name="MobileNo" 
                value={user.MobileNo} 
                onChange={handleInputs}/>
                <label for="floatingInput">Mobile Number</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email Id"
                name="EmailId" 
                value={user.EmailId} 
                onChange={handleInputs} />
                <label for="floatingInput">Email Id</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                name="State" 
                value={user.State} 
                onChange={handleInputs}>
                  <option selected>Select</option>
                  <option value="0">Delhi</option>
                  <option value="1">Uttar Pradesh</option>
                  <option value="2">Gujarat</option>
                  <option value="3">Rajasthan</option>
                </select>
                <label for="floatingInput">State</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="City"
                name="City" 
                value={user.City} 
                onChange={handleInputs} />
                <label for="floatingInput">City</label>
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea className="form-control" id="floatingTextarea2" placeholder="Address" 
            name="Address" 
            value={user.Address} 
            onChange={handleInputs} />
            <label for="floatingTextarea2">Address</label>
          </div>
          <div className="text-center">
            <button class="btn btn-primary" type="submit" onClick={postData}>Submit</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default Signup
