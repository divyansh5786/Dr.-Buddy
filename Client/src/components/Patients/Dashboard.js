import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/dashboard.css';
import DashMedPatient from '../utilities/dashMedPatient';
import DashAppointPatient from '../utilities/dashAppointPatient';
import DashPresPatient from '../utilities/dashPresPatient';
import { NavLink } from 'react-router-dom';

const fetchMedicalData = async (id) => {
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invailid Registration");
      console.log("Invailid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successfull");
      // history.replace("/");
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  const tempdata = [{
    "date": "12 Nov 2017",
    "bp": "138",
    "sugar": "120",
    "temp": "98.4",
    "pulse": "72",
  },
  {
    "date": "13 Nov 2017",
    "bp": "118",
    "sugar": "110",
    "temp": "96.5",
    "pulse": "75",
  },];
  return tempdata;
}

const fetchAppointmentsData = async (id) => {
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invailid Registration");
      console.log("Invailid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successfull");
      // history.replace("/");
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  const tempdata = [{
    "id": "565465",
    "doctorname": "Dr. harish goyl",
    "spec": "Surgeon",
    "dateOfBooking": "22 Oct 2021",
    "dateOfAppointment": "24 Oct 2021",
    "time": "Evening",
    "fees": "250",
    "concern": "Stomach pain",
    "status": "confirm"
  },
  {
    "id": "165165",
    "doctorname": "Dr. kaunal bhardwaj",
    "spec": "Dentist",
    "dateOfBooking": "22 Oct 2021",
    "dateOfAppointment": "24 Oct 2021",
    "time": "Evening",
    "fees": "250",
    "concern": "Stomach pain",
    "status": "pending"
  },];
  return tempdata;
}

const fetchPrescriptionData = async (id) => {
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invailid Registration");
      console.log("Invailid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successfull");
      // history.replace("/");
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  const tempdata = [{
    "id": "565465",
    "doctorName": "Dr. harish goyl",
    "spec": "Surgeon",
    "dateOfAppointment": "24 Oct 2021",
  },
  {
    "id": "165165",
    "doctorName": "Dr. kaunal bhardwaj",
    "spec": "Dentist",
    "dateOfAppointment": "24 Oct 2021",
  },];
  return tempdata;
}

function Dashboard({ id, setPage }) {
  const history = useHistory();
  const [medicalData, setmedicalData] = useState(null);
  const [prescriptions, setPrescriptions] = useState(null);
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    setPage('DashBoard');
    fetchMedicalData(id).then(tempdata => {
      if (tempdata.length === 0)
        tempdata = [{
          "date": " ",
          "bp": " ",
          "sugar": " ",
          "temp": " ",
          "pulse": " ",
        },];
      setmedicalData(tempdata);
    });
    fetchAppointmentsData(id).then(tempdata => {
      setAppointments(tempdata);
    });
    fetchPrescriptionData(id).then(tempdata => {
      setPrescriptions(tempdata);
    });

  }, []);
  return (
    <>

      <div class="home-content">
        {medicalData === null ? "Loading..." : <DashMedPatient key={medicalData[0].id} data={medicalData[0]} />
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
                                    <th>Id</th>
                                    <th>Created By</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {prescriptions===null?"Loading..." :prescriptions.length===0?"No appointment made" :  
                    prescriptions.map((prescription)=>{
                        console.log(prescription);
                        return (<DashPresPatient key={prescription.id} prescription={prescription} />   
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