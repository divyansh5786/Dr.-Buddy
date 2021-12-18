import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import {useHistory} from 'react-router-dom';

function SearchDoctor({setDoctors}) {
    const history = useHistory();
    const [search, setSearch] = useState({
      state: "", city: "", type: "", spec: ""
    });
  
    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setSearch({ ...search, [name]: value });
    }
  
    const postData = async (e) => {
      e.preventDefault();
    
      const { state, city, type, spec } = search;
      console.log(state);
      console.log(city);
      console.log(type);
      console.log(spec);
      const tempdata = [{
        "name":"Harish Goyal",
        "spec":"Surgeon",
        "Address":"118/22 Amar Enclave",
        "city":"Ghaziabad",
        "state":"up",
        "fees":"250",
        "degree":"Md,Mbbs",
        "mobile":"9990892500",
        "email":"bansal@gmail.com"     
      },
      {
        "name":"mukesh vampanthy",
        "spec":"Dentist",
        "Address":"118/22 Amar Enclave",
        "city":"Delhi",
        "state":"Up",
        "fees":"250",
        "degree":"Mds,Bds",
        "mobile":"8826501470",
        "email":"nayanchuda@gmail.com"        
      }];
      setDoctors(tempdata);
      console.log(tempdata);
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          state, city, type, spec
        })
      });
      const data = await res.json();
      
      if (res.status === 422 || !data) {
        window.alert("Invailid Registration");
        console.log("Invailid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successfull");
        history.replace("/");
      }
    }
    return (
        <>
    
          <div className="Book Appointment">
    
            <h2 className="text-center">Book Appointment</h2>
            <form method="POST" className="sign-in-form">
            <div className="box">
            <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                 name="state"
                 value={search.state}
                 onChange={handleInputs}>
                  <option selected>Select</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
                <label for="floatingInput">state</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="city"
                  name="city"
                  value={search.city}
                  onChange={handleInputs} />
                <label for="floatingInput">city</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                  name="type"
                  value={search.type}
                  onChange={handleInputs}>
                  <option selected>Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <label for="floatingInput">Type</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="specialisation"
                  name="spec"
                  value={search.spec}
                  onChange={handleInputs}/>
                <label for="floatingInput">specialisation</label>
              </div>
            </div>
          </div>
    
    
              
              <div className="text-center">
                <button className="btn btn-primary" type="submit" onClick={postData}>Submit</button>
              </div>
              </div>
            </form>
    
          </div>
    
        </>
      )
    }
    
    export default SearchDoctor

    