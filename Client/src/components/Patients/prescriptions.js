import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import PatientViewPres from '../utilities/patientViewPres';
import { AuthContext } from '../../context/auth-context';

const fetchPrescriptions = async (id,auth) => {
  console.log(id);
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
      window.alert("Error while fetching appointments");
      console.log("Error while fetching appointments");
    } else {
      console.log(" Appointments fetched successfully");
      console.log(data);
      data.result.map((appointment) => {
        if (appointment.status == "complete") {
          let tempappoint = {
            id: appointment._id,
            doctorname: appointment.doctorID.firstname + appointment.doctorID.lastname,
            spec: appointment.doctorID.Specialization,
            dateOfAppointment: DateTransform(appointment.appointmentDate),
            diagnosis: appointment.diagnosis,
            medicine: appointment.medicine,
            followUp: DateTransform(appointment.followUp),
            tests: appointment.tests,
          };
          tempdata.push(tempappoint);
        }
      });
      console.log(tempdata);
    }
  }
  catch (e) {
    console.log("error occured in fetching" + e);
  }
  return tempdata;
}

var DateTransform = (date) => {
  let milliseconds = Date.parse(date);
  date = new Date(milliseconds)
  console.log(date);
  var d = (date.getDate()) + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear());
  return d;
}
function Prescriptions({ id, setPage }) {

  const auth = useContext(AuthContext);
  const history = useHistory();
  const [prescriptions, setPrescriptions] = useState(null);

  useEffect(() => {
    setPage('Prescription');
    fetchPrescriptions(id,auth).then(tempdata => {
      setPrescriptions(tempdata);
    })
  }, []);



  return (
    <div classname="prescriptions" style={{ paddingTop: '10%', paddingInline: '8%' }}>
      <div class="tab-content pt-0 box">
        <div id="pat_appointments" class="tab-pane fade show active ">
          <div class="card card-table mb-0 card-body table-responsive">
            <table class="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Appt Date</th>
                  <th>Diagnosis</th>
                  <th>Medicine</th>
                  <th>Dosage</th>
                  <th>Freq/Duaration</th>
                  <th>Tests</th>
                  <th>Follow Up</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {prescriptions === null ? "Loading..." : prescriptions.length === 0 ? "No prescription made" :
                  prescriptions.map((prescription) => {
                    //console.log(appointment.doctorname);
                    return (<PatientViewPres key={prescription.id} prescription={prescription} />
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

export default Prescriptions