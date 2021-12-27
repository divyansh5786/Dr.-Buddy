import React from 'react'
import { useState, useEffect,useContext  } from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/dashboard.css';
import DashMedPatient from '../utilities/dashMedPatient';
import DashAppointPatient from '../utilities/dashAppointPatient';
import DashPresPatient from '../utilities/dashPresPatient';
import { NavLink } from 'react-router-dom';
import AlertBar from '../utilities/alertbar';
import { AuthContext } from '../../context/auth-context';


var DateTransform = (date) => {
  let milliseconds = Date.parse(date);
  date = new Date(milliseconds)
  console.log(date);
  var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
  return d;
}
const fetchMedicalData = async (id,auth) => {
  console.log(id);
  let patientID = id;
  let tempdata=null;
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
        let medical = data[data.length-1];
          tempdata = {date:DateTransform(medical.date),bp:medical.bloodPressure,sugar:medical.sugar,temp:medical.bodyTempreture,pulse:medical.pulse};
        console.log(tempdata);
        // history.replace("/patients/medicaldata");
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
      return tempdata;
}
const fetchAppointmentsData = async (id,auth) => {
  console.log(id);
  let patientID = id;
  try {
    const res = await fetch("/viewAppointmentPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + auth.token
      },
      body: JSON.stringify({
        patientID
      })
    });
    const data = await res.json();
    var tempdata = [];
    if (res.status === 422 || !data) {
      window.alert("Error while fetching appointments");
      console.log("Error while fetching appointments");
    } else {
      console.log(" Appointments fetched successfully");
      console.log(data);
      var len = data.result.length;
      for(var i=0;i<2;i++)
      {
        let appointment = data.result[len-i-1];
        let tempappoint = { id: appointment._id,
           doctorname: appointment.doctorID.firstname + appointment.doctorID.lastname, 
           spec: appointment.doctorID.Specialization,
           dateOfAppointment: DateTransform(appointment.appointmentDate),
           time: appointment.appointmentTime,
           concern:appointment.concern,
           status:appointment.status,
          };
          tempdata.push(tempappoint);
      }

    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  return tempdata;
}


const fetchPrescriptionData = async (id,auth) => {
  let patientID = id;
  try {
    const res = await fetch("/viewAppointmentPatient", {
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
    var tempdata = [];
    if (res.status === 422 || !data) {
      console.log("Error while fetching Patient data");
    } else {
      console.log("Patient data fetched successfully");
      console.log(data);
      var len = data.result.length;
      var count = 2;
      var i = len-1;
      while(count>0 && i>=0)
      {
        let appointment = data.result[i];
        if(appointment.status == "complete")
        {
          count--;
        let tempappoint = { id: appointment._id,
           doctorname: appointment.doctorID.firstname + appointment.doctorID.lastname, 
           spec: appointment.doctorID.Specialization,
           dateOfAppointment: DateTransform(appointment.appointmentDate),
           time: appointment.appointmentTime,
          };
          tempdata.push(tempappoint);
      }
      i--;
    }

    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  return tempdata;
}

function Dashboard({ id, setPage,alert,setalert,setappointment}) {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [medicalData, setmedicalData] = useState(null);
  const [prescriptions, setPrescriptions] = useState(null);
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    setPage('DashBoard');
    fetchMedicalData(id,auth).then(tempdata => {
      if (tempdata === null)
        tempdata = {
          "date": " ",
          "bp": " ",
          "sugar": " ",
          "temp": " ",
          "pulse": " ",
        };
      setmedicalData(tempdata);
    });
    fetchAppointmentsData(id,auth).then(tempdata => {
      setAppointments(tempdata);
    });
    fetchPrescriptionData(id,auth).then(tempdata => {
      setPrescriptions(tempdata);
    });

  }, []);

  

  return (
    <>

      <div class="home-content">
      <AlertBar alert = {alert} setalert={setalert}/>
        {medicalData === null ? "Loading..." : <DashMedPatient key={medicalData.id} data={medicalData} />
        }

        <div class="sales-boxes">
          <div class="recent-sales box">
            <div class="title">Doctor Appointment</div>
            <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Concern</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {appointments===null?"Loading..." :appointments.length===0?"No appointment made" :  
                    appointments.map((appointment)=>{
                        console.log(appointment.doctorname);
                        return (<DashAppointPatient key={appointment.id} appointment={appointment} />   
                     )
                 })
                    }
                                

                            </tbody>
                        </table>
                        </div>

            <div class="button">
              <a href="#">See All</a>
            </div>
          </div>
          <div class="top-sales box">
            <div class="title">Prescriptions</div>
            <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Created By</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {prescriptions===null?"Loading..." :prescriptions.length===0?"No prescription added" :  
                    prescriptions.map((prescription)=>{
                        console.log(prescription);
                        return (<DashPresPatient key={prescription.id} prescription={prescription} setappointment={setappointment} />   
                     )
                 })
                    }
                            </tbody>
                        </table>

                    </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard