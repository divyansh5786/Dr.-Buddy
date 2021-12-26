import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/patientCard';
import DatePicker from "react-datepicker";
import SearchDoctor from '../utilities/searchDoctor';
import { useHistory } from 'react-router-dom';
import { useState, useEffect,useContext  } from 'react';
import { AuthContext } from '../../context/auth-context';


var DateTransform = (date) => {
    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    return d;
}
function AppConfirm({ doctor, patient, setPage,setalert }) {
    const auth = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        setPage('Confirm Appointment');
    }, []);
    const history = useHistory();
    const [appointment, setAppointment] = useState({
        date: "", time: "", concern: ""
    });
    const handleDateChange = (appdate) => {
        console.log(appdate);
        setStartDate(appdate);
        setAppointment({ ...appointment, date : appdate });
    }
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAppointment({ ...appointment, [name]: value });
    }

    const postData = async (e) => {
        console.log(appointment);
        e.preventDefault();
        const patientID = patient;
        const doctorID = doctor.id;
        const bookingDate = DateTransform(new Date());
        const { date, time, concern } = appointment;
        console.log(date);
        if(date=="" || date==null)
        window.alert("Date is not selected");
        else if(time=="" || time==null)
        window.alert("time is not selected");
        else if(concern=="" || concern==null)
        window.alert("concern is not written");
        else
        {
        const appointmentTime = time;
        const appointmentDate = DateTransform(date);
        const status = "pending"
        const fee = doctor.fees;
        console.log(doctorID);
        console.log(patientID);
        console.log(bookingDate);
        console.log(appointmentDate);
        const res = await fetch("/newAppointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
                doctorID, patientID, concern, status, fee,bookingDate,appointmentDate,appointmentTime
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            setalert({color:"red",message:"Error Occure while booking appointment"});
            console.log("Error Occure while booking appointment");
            history.replace("/patients/dashboard");
        } else {
            console.log("Appointment Booked Succesfully" );
            setalert({color:"green",message:"Appointment Booked Succesfully"});
            history.replace("/patients/dashboard");
        }
    }
    }
    return (
        <>
            <div className="home-content">
                <h3 className="text-center">Appointment Details</h3>
                <div className="box" style={{ marginInline: '10%' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <PatientCard doctor={doctor} show={false} />
                        </div>
                    </div>
                    <div className="timeSlot">
                        <h5 className="text-start">Schedule Appointment</h5>
                        <div style={{ display: 'flex', justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                            <span style={{ fontSize: 'x-large', fontWeight: '600', width: '100px' }}>Selectdate</span>
                            <span style={{ marginLeft: "15%" }}><DatePicker selected={startDate} onChange={(date) => handleDateChange(date)} /></span>
                        </div>
                        <h6 className="text-start">Select Time Slot</h6>

                        <input type="radio" className="btn-check" name="options-outlined" id="option1" autocomplete="off"
                            name="time"
                            value="Morning"
                            onChange={handleInputs} />
                        <label className="btn btn-outline-primary" for="option1">Morning</label>

                        <input type="radio" className="btn-check" name="options-outlined" id="option2" autocomplete="off"
                            name="time"
                            value="Evening"
                            onChange={handleInputs} />
                        <label className="btn btn-outline-primary" for="option2">Evening</label>
                        <br />
                        <br />
                        <h5 className="text-start">Concern</h5>
                        <div className="text-center">
                            <textarea className="form-control" id="floatingTextarea2" placeholder="Add Concern"
                                name="concern"
                                value={appointment.concern}
                                onChange={handleInputs} />
                            <button className="btn btn-primary" type="submit" onClick={postData} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppConfirm