import { useState, useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { NavLink,useHistory } from 'react-router-dom';
import AppointmentCard from '../utilities/apppointmentCardDoctor'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrescriptionCard from '../utilities/prescriptionCardDoctor';



function Prescriptions({id,setPage}) {

    const history = useHistory();
    const [prescriptions, setPrescriptions] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
const DateTransform=(date)=>{
    let myDate = (date.getUTCFullYear()) + "/" + (date.getMonth() + 1)+ "/" + (date.getUTCDate());
    console.log(myDate);
    return myDate;
}

    const handleChange = (date) => {
        console.log(date);
        setStartDate(date);
        try {
            //setAppointment accordingto date from doctor json
        }
        catch (e) {
            console.log(e);
        }
        var tempdata = [];
        let date1 = DateTransform(date);
        let date2 = DateTransform(new Date());
        let status = date1.normalize() === date2.normalize();
        
        if(status===true)
        {
            tempdata = [{
                "id":"565465",
                "patientName":"Prakhar Khandelwal",
                "spec":"Surgeon",
                "dateOfAppointment":"24 Oct 2021", 
              },
              {
                "id":"165165",
                "patientName":"Prakhar Khandelwal",
                "spec":"Dentist",
                "dateOfAppointment":"24 Oct 2021", 
              },];
        }
        console.log("done");
        setPrescriptions(tempdata);

    }
    useEffect(() => {
        setPage('Prescriptions');
        handleChange(startDate);
    }, []);



    return (
        <div class="prescription" style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div style={{display:'flex',justifyContent: "space-between"}}>
                  <span style={{fontSize:'x-large',fontWeight:'600'}}>Prescriptions</span>
                 
                  </div>
            <div class="tab-content pt-0 box ">
                <div style={{ display: 'flex', justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                    <span style={{ fontSize: 'x-large', fontWeight: '600', width: '100px' }}>Selectdate</span>
                    <span style={{ marginLeft: "15%" }}><DatePicker selected={startDate} onChange={(date) => handleChange(date)} /></span>
                </div>
                <div id="pat_prescription" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                    <th>Date</th>
                                    <th>Id</th>
                                    <th>Patient Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {prescriptions === null ? "Loading..." : prescriptions.length === 0 ? "No appointment made" :
                                    prescriptions.map((prescription) => {
                                        
                                        return (<PrescriptionCard key={prescription.id} prescription={prescription} />
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