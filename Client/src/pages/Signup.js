import { useState,useEffect } from 'react';
import React from 'react'
import '../../src/css/style.css';
import {useHistory} from 'react-router-dom';
import validation from './validation';

var DateTransform = (date) => {
  let tareek = parseInt(date.substring(0,2));
  let month = parseInt(date.substring(3,5));
  let year = parseInt(date.substring(6));
  const d = new Date(year, month-1, tareek, 0, 0, 0, 0);
  console.log(year + " "+ month +" " + tareek +" " + d);
  return d;
}
function Signup({setDoctor,setalertapp}) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "", password: "", firstname: "", lastname: "", mobile: "", email: "", city: "", state: "", Address: "", type: "", dateofbirth:"", gender:""
  });


    const [errors,setErrors] = useState({});

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name + " " + value);
    setUser({ ...user, [name]: value });
    setErrors({});
  }

  const postData = async (e) => {
    e.preventDefault();
    var x = validation(user);
    
    console.log(errors);
    console.log(x);
    if(Object.keys(x).length !== 0){
      setErrors(x);
      return;
    }else{
    var { username, password, firstname, lastname, mobile, email, city, state, Address, type, dateofbirth, gender } = user;
    dateofbirth = DateTransform(dateofbirth);
    console.log(user);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password, firstname, lastname, mobile, email, city, state, Address, type, dateofbirth, gender
      })
    });
    const data = await res.json();
    if(res.status===406)
    {
      setalertapp({color:"red",message:"User already exists with this username"});
      console.log("User already exists with this username");
    }
    else if (res.status === 422 || !data) {
      setalertapp({color:"red",message:"Some details are invalid"});
      console.log("Invailid Registration");
    } else {
      setalertapp({color:"green",message:"Registeration Successfull"});
      console.log("Registration Successfull");
      console.log(type);
        history.replace("/");
    }
  }
  }


  return (
    <>

      <div className="signupd">

        <h2 className="text-center">Sign Up</h2>
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
            {errors.type && <p style={{"color":"red"}}>{errors.type}</p>}
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  name="username"
                  value={user.username}
                  onChange={handleInputs} />
                <label for="floatingInput">username</label>
                {errors.username && <p style={{"color":"red"}}>{errors.username}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs} />
                <label for="floatingpassword">password</label>
                {errors.password && <p style={{"color":"red"}}>{errors.password}</p>}
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="First Name"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleInputs} />
                <label for="floatingInput">First Name</label>
                {errors.firstname && <p style={{"color":"red"}}>{errors.firstname}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleInputs} />
                <label for="floatingInput">Last Name</label>
                {errors.lastname && <p style={{"color":"red"}}>{errors.lastname}</p>}
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
                {errors.dateofbirth && <p style={{"color":"red"}}>{errors.dateofbirth}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
            <select className="form-select" id="floatingSelectGrid"
              name="gender"
              value={user.gender}
              onChange={handleInputs}>
                <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label for="floatingInput">Gender</label>
            {errors.gender && <p style={{"color":"red"}}>{errors.gender}</p>}
          </div>
          </div>
</div>


          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Mobile Number"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleInputs} />
                <label for="floatingInput">Mobile Number</label>
                {errors.mobile && <p style={{"color":"red"}}>{errors.mobile}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email Id"
                  name="email"
                  value={user.email}
                  onChange={handleInputs} />
                <label for="floatingInput">Email Id</label>
                {errors.email && <p style={{"color":"red"}}>{errors.email}</p>}
              </div>         
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                  name="state"
                  value={user.state}
                  onChange={handleInputs}>
                  <option selected>Select</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
                <label for="floatingInput">state</label>
                {errors.state && <p style={{"color":"red"}}>{errors.state}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="city"
                  name="city"
                  value={user.city}
                  onChange={handleInputs} />
                <label for="floatingInput">city</label>
                {errors.city && <p style={{"color":"red"}}>{errors.city}</p>}
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea className="form-control" id="floatingTextarea2" placeholder="Address"
              name="Address"
              value={user.Address}
              onChange={handleInputs} />
            <label for="floatingTextarea2">Address</label>
            {errors.Address && <p style={{"color":"red"}}>{errors.Address}</p>}
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit" onClick={postData}>Submit</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default Signup
