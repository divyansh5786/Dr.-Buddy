import { useEffect, useState,useContext } from 'react';
import React from 'react'
import '../../css/style.css';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

function Addmedical({id,setPage,setalert}) {
  const auth = useContext(AuthContext);
  useEffect(() => {
    setPage('Add Medical data');
}, []);
    const history = useHistory();
    const [med, setMed] = useState({
      pulse: "", bp: "", sugar: "", temp: ""
    });
  
    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      console.log(name + " " + value);
      setMed({ ...med, [name]: value });
    }
  
    const postData = async (e) => {
      e.preventDefault();
      let date = new Date();
      let medicalData = {date:date,bloodPressure:med.bp,bodyTempreture:med.temp,sugar:med.sugar,pulse:med.pulse};
     console.log(id);
     console.log("here");
      const { pulse, bp, sugar, temp } = med;
      const res = await fetch("/patientAddMedicalData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + auth.token,
        },
        body: JSON.stringify({
          id, medicalData
        })
      });
      console.log(pulse);
      const data = await res.json();
      if (res.status === 422 || !data) {
        setalert({color:"red",message:"Error Occure while adding medical data"});
        history.replace("/patients/medicaldata");
      } else {
        setalert({color:"green",message:"medical data added successfully"});
        console.log("Successfully updated");
        history.replace("/patients/medicaldata");
      }
    }
    return (
        <>
    
          <div className="addMedical">
    
            <h2 className="text-center">Add Medical Data</h2>
            <form method="POST" className="sign-in-form">
            <div className="box">
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="pulse"
                    name="pulse"
                    value={med.pulse}
                    onChange={handleInputs}
                     />
                    <label for="floatingInput">Pulse</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="bp"
                    name="bp"
                    value={med.bp}
                    onChange={handleInputs}/>
                    <label for="floatingpassword">Blood Pressure</label>
                  </div>
                </div>
              </div>
    
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="sugar"
                    name="sugar"
                    value={med.sugar}
                    onChange={handleInputs}/>
                    <label for="floatingInput">Glucose Level</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="temp" 
                    name="temp"
                    value={med.temp}
                    onChange={handleInputs}/>
                    <label for="floatingInput">Body Temperature</label>
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
    
    export default Addmedical
    