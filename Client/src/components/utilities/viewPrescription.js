import { useState, useEffect,useContext  } from 'react';
import '../../css/prescriptions.css';
import React from 'react'
//import '../../css/style.css';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

var DateTransformtostring = (date) => {
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
	]
	let milliseconds = Date.parse(date);
	date = new Date(milliseconds)
	//console.log(date);
	var d = (date.getDate()) + "-" + monthNames[date.getMonth()] + "-" + (date.getFullYear());
	return d;
}



var calculateAge = (date) => {
	let milliseconds = Date.parse(date);
	let nowmilli = Date.parse(new Date());
	let age = Math.floor((nowmilli - milliseconds) / 1000 / 86400 / 365);
	return age;

}
const fetchPrescriptionData = async (id,auth) => {
	try {
		const res = await fetch("/viewPrescription", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: 'Bearer ' + auth.token,
			},
			body: JSON.stringify({
				id
			})
		});
		const data = await res.json();
		var tempdata = null;
		if (res.status === 422 || !data) {
			console.log("Error while fetching prescription");
		} else {
			console.log("prescription data fetched successfully");
			console.log(data.result);
			tempdata = {
				id: data.result._id,
				doctorname: "Dr." + data.result.doctorID.firstname + " " + data.result.doctorID.lastname,
				spec: data.result.doctorID.Specialization,
				degree: data.result.doctorID.Degree,
				doctorcity: data.result.doctorID.city,
				doctorstate: data.result.doctorID.state,
				doctoraddress: data.result.doctorID.Address,
				doctormobile: data.result.doctorID.mobile,
				doctoremail: data.result.doctorID.email,
				patientname: data.result.patientID.firstname + " " + data.result.patientID.lastname,
				patientage: calculateAge(data.result.patientID.dateofbirth),
				patientgender: data.result.patientID.gender,
				patientmobile: data.result.patientID.mobile,
				patientemail: data.result.patientID.email,
				patientaddress: data.result.patientID.Address,
				patientcity: data.result.patientID.city,
				patientstate: data.result.patientID.state,
				appointmentDate: DateTransformtostring(data.result.appointmentDate),
				appointmentTime: data.result.appointmentTime,
				diagnosis: data.result.diagnosis,
				medicine: data.result.medicine,
				tests: data.result.tests,
				followUp: DateTransformtostring(data.result.followUp),
			}

		}
	}
	catch (e) {
		console.log("error occured in fetching" + e);
	}
	return tempdata;
}
function ViewPrescription({ appointment }) {

	const [prescriptions, setprescriptions] = useState(null);
	const auth = useContext(AuthContext);
	useEffect(() => {
		//setPage('View Prescription');
		fetchPrescriptionData(appointment,auth).then(tempdata => {
			setprescriptions(tempdata);
		});
	}, []);

	return (<>
		{(prescriptions === null) ? <></> :
			<div class="prescription"  id="pres">
				<div class="panel-body">
					<div class="doctor-widget">
						<div class="doctor-info-left">
							<h4>{prescriptions.doctorname}</h4>
							<ul class="list-unstyled">
								<li>{prescriptions.spec}</li>
								<li><br /></li>
								<li><ul class="list-unstyled">
									{prescriptions.degree.map((degree) => {
										return <li>{degree.Name + " ( " + degree.Institute + "  " + degree.Duration + " )"}</li>
									})}
								</ul></li>

							</ul>
						</div>
						<div class="doctor-info-centre">
							<h4><strong>Dr.Buddy</strong></h4>
							<>Make life Simple</>
						</div>
						<div class="doctor-info-right">
							<h4>Address</h4>
							<h6>{prescriptions.doctoraddress}</h6>
							<ul class="list-unstyled rowmajor">
								<li>{prescriptions.doctorcity} , </li>
								<li>{prescriptions.doctorstate}</li>
							</ul>
							<ul class="list-unstyled">
								<li>Phone : {prescriptions.doctormobile}</li>
								<li>Email : {prescriptions.doctoremail}</li>
							</ul>

						</div>

					</div>
					<div class="patientDetail">
						<div class="patient-info-left">
							<ul class="list-unstyled">
								<li><ul class="list-unstyled rowmajor">
									<li>Patient : </li>
									<li>{prescriptions.patientname}</li>
									<li>({prescriptions.patientage}y, {prescriptions.patientgender})</li>
								</ul></li>
								<li>Phone Number: {prescriptions.patientmobile}</li>
								<li>Email Id: {prescriptions.patientemail}</li>
								<li>Address: {prescriptions.patientaddress}</li>
								<li>City/State: {prescriptions.patientcity + ", " + prescriptions.patientstate}</li>
							</ul>
						</div>
						<div class="patient-info-right">
							<ul class="list-unstyled">
								<li>Date: {prescriptions.appointmentDate}</li>
								<li>Time: {prescriptions.appointmentTime}</li>
							</ul>
						</div>
					</div>
					<div class="diagnosis">
						<ul class="list-unstyled rowmajor">
							<li><strong>Diagnosis : </strong></li>
							<li>{prescriptions.diagnosis.map((diagnosis) => {
								return <li>{" "+diagnosis+" ,"}</li>
							})}</li>
						</ul>
					</div>
					<div class="Medicines">
						<div><strong>Medicines</strong></div>
						<table class="table table-condensed nomargin">
							<thead>
								<tr>
									<th>S.No.</th>
									<th>Medicine</th>
									<th>Dosage</th>
									<th>Freq - Duration</th>
								</tr>
							</thead>
							<tbody>
								{prescriptions.medicine.map((medicine, index) => {
									return (<tr>
										<td>{index + 1}</td>
										<td>{medicine.medicinename}</td>
										<td>{medicine.dosage}</td>
										<td>{medicine.fd}</td>
									</tr>)
								})
								}
							</tbody>
						</table>
					</div>
					<div class="follow-up">
						<ul class="list-unstyled rowmajor">
							<li><strong>Follow Up:</strong></li>
							<li>{prescriptions.followUp}</li>
						</ul>
					</div>
					<div class="tests">
						<ul class="list-unstyled rowmajor">
							<li><strong>Tests : </strong></li>
							<li>{prescriptions.tests.map((test) => {
								return <>{" "+test+" ,"}</>
							})}</li>
						</ul>
					</div>
					<div>
						<ul ul class="list-unstyled">
							<li>Digital Signature</li>
							<li>{prescriptions.doctorname}</li>
						</ul>
					</div>

				</div>
	
			</div>
		}

	</>)
}

export default ViewPrescription;