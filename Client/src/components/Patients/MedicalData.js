import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import { NavLink, useHistory } from 'react-router-dom';
import MedicaldDataCard from '../utilities/medicalDataCard';
import AlertBar from '../utilities/alertbar';
import { AuthContext } from '../../context/auth-context';

var DateTransform = (date) => {
  let milliseconds = Date.parse(date);
  date = new Date(milliseconds)
  console.log(date);
  var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
  return d;
}
const fetchData = async (id,auth) => {
  console.log(id);
  let patientID = id;
  let tempdata=[];
    try{const res = await fetch("/patientviewMedicalData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + auth.token,
        },
        body: JSON.stringify({
          patientID
        })
      });
      const data = await res.json();
      console.log(data);
      
      if (res.status === 422 || !data) {
        window.alert("Error Occured while fetching medical data");
        console.log("Error Occured while fetching medical data");
      } else {
        console.log("Medical fetch Successfull");
        console.log(data);
        data.map((medical)=>{
          let tempmedical = {date:DateTransform(medical.date),bp:medical.bloodPressure,sugar:medical.sugar,temp:medical.bodyTempreture,pulse:medical.pulse};
          tempdata.push(tempmedical);
        });
        console.log(tempdata);
        // history.replace("/patients/medicaldata");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
      return tempdata;
}

function MedicalData({id,setPage,alert,setalert}) {

    const history = useHistory ();
    const [medicalData, setmedicalData] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(() => {
        setPage('MedicalData');
        fetchData(id,auth).then(tempdata => {
          setmedicalData(tempdata);
        })
      }, []);
      
    
    
    return (
        <div classname="med"style={{ paddingTop: '10%', paddingInline: '10%' }}>
          <AlertBar alert = {alert} setalert={setalert}/>
            <div class="tab-content pt-0 ">
                <div id="pat_appointments " class="tab-pane fade show active ">
                  <div style={{display:'flex',justifyContent: "space-between"}}>
                  <span style={{fontSize:'x-large',fontWeight:'600'}}>Medical Data</span>
                  <NavLink to="/patients/addmedical" style={{"width":"auto"}}><button className="btn btn-primary" type="submit" >Add Data</button></NavLink>
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