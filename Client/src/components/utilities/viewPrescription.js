import { useState, useEffect } from 'react';
import '../../css/prescriptions.css';
import React from 'react'
//import '../../css/style.css';
import { useHistory } from 'react-router-dom';


const fetchPrescriptionData = async (id) => {
	try {
	  const res = await fetch("/viewPrescription", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify({
		  id
		})
	  });
	  const data = await res.json();
	  var tempdata = [];
	  if (res.status === 422 || !data) {
		console.log("Error while fetching prescription");
	  } else {
		console.log("prescription data fetched successfully");
		console.log(data);
  
	  }
	}
	catch (e) {
	  console.log("error occured in fetching" + e);
	}
	return tempdata;
  }
function ViewPrescription({appointment}) {

	useEffect(() => {
       //setPage('View Prescription');
	   fetchPrescriptionData(appointment);
    }, []);
    return (<>
	<div class="prescription">
		<div class="panel-body">
			<div class="doctor-widget">
				<div class="doctor-info-left">
					<h4>Dr. Onkar Singh</h4>
					<ul class="list-unstyled">
						<li><ul class="list-unstyled rowmajor">
						<li>M.B.B.S. ,</li>
						<li>M.D. ,</li>
						<li>M.S. </li>
					</ul></li>
					<li>Reg No. 27098</li>
					</ul>
				</div>
				<div class="doctor-info-centre">
					<h4><strong>Dr.Buddy</strong></h4>
					<>Make life Simple</>
				</div>
				<div class="doctor-info-right">
					<h4>Address</h4>
					<h6>118/22 Amar Enclve Model Town East</h6>
					<ul class="list-unstyled rowmajor">
						<li>Ghaziabad , </li>
						<li>Uttar Pardesh</li>
					</ul>
					<ul class="list-unstyled">
						<li>Phone : 9990892500</li>
						<li>Email : bansal@mail.com</li>
					</ul>

				</div>

			</div>
			<div class="patientDetail">
				<div class="patient-info-left">
					<ul class="list-unstyled">
						<li><ul class="list-unstyled rowmajor">
						<li>ID : 1120193845 : </li>
						<li>UNNATI BANSAL</li>
						<li>(22y, Female)</li>
						</ul></li>
						<li>Phone Number: 8826501470</li>
						<li>Email Id: unnati@gmail.com</li>
						<li>Address: 118/22 Amar Encalve Model Town east Ghaziabd UttarPradesh</li>
						</ul>
				</div>
				<div class="patient-info-right">
					Date: 03-Mar-2021
				</div>
			</div>
			<div class="diagnosis">
				<ul class="list-unstyled rowmajor">
					<li><strong>Diagnosis : </strong></li>
					<li>Diffuse Alopecia,</li>
					<li>Hair Loss</li>
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
						<tr>
							<td>1)</td>
							<td><strong>BEROCIN CZ-CAPSULE</strong></td>
							<td>0-0-1</td>
							<td>daily,10days</td>
						</tr>
						<tr>
							<td>2)</td>
							<td><strong>BEROCIN CZ-CAPSULE</strong></td>
							<td>0-0-1</td>
							<td>daily,10days</td>
						</tr>
						<tr>
							<td>2)</td>
							<td><strong>BEROCIN CZ-CAPSULE</strong></td>
							<td>0-0-1</td>
							<td>daily,10days</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="follow-up">
				<ul class="list-unstyled rowmajor">
					<li><strong>Follow Up:</strong></li>
					<li>17-Mar-2021</li>
				</ul>
			</div>
			<div class="tests">
				<ul class="list-unstyled rowmajor">
					<li><strong>Tests</strong></li>
					<li>Tpd</li>
					<li>Bp CC</li>
				</ul>
			</div>
			<div>
				<ul ul class="list-unstyled">
					<li>Digital Signature</li>
					<li>Dr. Onkar Singh</li>
				</ul>
			</div>
			
		</div>
		<div class="panel-body2">
			<a class="btn btn-success" href="page-invoice-print.html" target="_blank" style={{"width":"auto"}}><i class="fa fa-print"></i> PRINT</a>
		</div>
	</div>

	
    </>)
}

export default ViewPrescription;