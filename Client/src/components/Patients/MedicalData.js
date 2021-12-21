import { useState,useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { NavLink, useHistory } from 'react-router-dom';
import MedicaldDataCard from '../utilities/medicalDataCard';


const fetchData = async (id) => {
  console.log(id);
  let patientID = id;
    try{const res = await fetch("/patientviewMedicalData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          patientID
        })
      });
      const data = await res.json();
      console.log(data);
      
      if (res.status === 422 || !data) {
        window.alert("Invailid Registration");
        console.log("Invailid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successfull");
        // history.replace("/");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        const tempdata = [{
        "date":"12 Nov 2017",
        "bp":"120",
        "sugar":"120",
        "temp":"98.4",
        "pulse":"72", 
      },
      {
        "date":"13 Nov 2017",
        "bp":"118",
        "sugar":"110",
        "temp":"96.5",
        "pulse":"75", 
      },];
      return tempdata;
}

function MedicalData({id,setPage}) {

    const history = useHistory ();
    const [medicalData, setmedicalData] = useState(null);

    useEffect(() => {
        setPage('MedicalData');
        fetchData(id).then(tempdata => {
          setmedicalData(tempdata);
        })
      }, []);
      
    
    
    return (
        <div classname="med"style={{ paddingTop: '10%', paddingInline: '10%' }}>
            <div class="tab-content pt-0 ">
                <div id="pat_appointments " class="tab-pane fade show active ">
                  <div style={{display:'flex',justifyContent: "space-between"}}>
                  <span style={{fontSize:'x-large',fontWeight:'600'}}>Medical Data</span>
                  <NavLink to="/patients/addmedical"><button className="btn btn-primary" type="submit" >Submit</button></NavLink>
                  </div>
                  <div className="box">
                    <div class="card card-table mb-0 card-body table-responsive ">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Blood Presssure</th> 
                                    <th>Glucose Level</th>
                                    <th>Pulse</th>
                                    <th>Body Temerature</th>
                                </tr>
                            </thead>
                            <tbody>
                            {medicalData===null?"Loading..." :medicalData.length===0?"No appointment made" :  
                    medicalData.map((data)=>{
                        console.log(data);
                        return (<MedicaldDataCard key={data.id} data={data} />   
                     )
                 })
                    }
                            </tbody>
                        </table>

                    </div>
                    </div>
                </div>
            </div>
            </div>


    );
}

export default MedicalData