import { useState, useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/appointmentCardPatient';

var DateTransform = (date) => {
  let milliseconds = Date.parse(date);
  date = new Date(milliseconds)
  console.log(date);
  var d = (date.getDate())+"/"+(date.getMonth()+1)+"/"+(date.getFullYear());
  return d;
}
const fetchData = async (id) => {
  console.log(id);
  let patientID = id;
  try {
    const res = await fetch("/viewAppointmentPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
      data.result.map((appointment) => {
        let tempappoint = { id: appointment._id,
           doctorname: appointment.doctorID.firstname + appointment.doctorID.lastname, 
           spec: appointment.doctorID.Specialization,
           dateOfBooking: DateTransform(appointment.bookingDate),
           dateOfAppointment: DateTransform(appointment.appointmentDate),
           time: appointment.appointmentTime,
           fees: appointment.fee,
           concern:appointment.concern,
           status:appointment.status,
          };
          tempdata.push(tempappoint);
      });
      console.log(tempdata);
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  // data.map((appointment)=>{
  //   let appoint = {id:_id,};
  //  });
  // tempdata = [{
  //   "id": "565465",
  //   "doctorname": "Dr. harish goyl",
  //   "spec": "Surgeon",
  //   "dateOfBooking": "22 Oct 2021",
  //   "dateOfAppointment": "24 Oct 2021",
  //   "time": "Evening",
  //   "fees": "250",
  //   "concern": "Stomach pain",
  //   "status": "confirm"
  // },
  // {
  //   "id": "165165",
  //   "doctorname": "Dr. kaunal bhardwaj",
  //   "spec": "Dentist",
  //   "dateOfBooking": "22 Oct 2021",
  //   "dateOfAppointment": "24 Oct 2021",
  //   "time": "Evening",
  //   "fees": "250",
  //   "concern": "Stomach pain",
  //   "status": "pending"
  // },];
  return tempdata;
}

function Appointments({ id, setPage }) {

  const history = useHistory();
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    console.log("here");
    setPage('Appointments');
    fetchData(id).then(tempdata => {
      setAppointments(tempdata);
    })
  }, []);



  return (
    <div class="appointments" style={{ paddingTop: '10%', paddingInline: '8%' }}>
      <div class="tab-content pt-0 box">

        <div id="pat_appointments" class="tab-pane fade show active ">
          <div class="card card-table mb-0 card-body table-responsive">
            <table class="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Appt Date</th>
                  <th>Booking Date</th>
                  <th>Amount</th>
                  <th>Concern</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {appointments === null ? "Loading..." : appointments.length === 0 ? "No appointment made" :
                  appointments.map((appointment) => {
                    console.log(appointment.doctorname);
                    return (<AppointmentCard key={appointment.id} appointment={appointment} />
                    )
                  })
                }


              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Appointments