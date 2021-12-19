import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import PatientCard from '../utilities/patientCard';
import SearchDoctor from '../utilities/searchDoctor';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';

function AppConfirm({ doctor, id ,setPage}) {
    useEffect(() => {
        setPage('Confirm Appointment');
    }, []);
    const history = useHistory();
    const [appointment, setAppointment] = useState({
        date: "", time: "", concern: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAppointment({ ...appointment, [name]: value });
    }

    const postData = async (e) => {
        console.log(appointment);
        e.preventDefault();
        const patientId = id;
        const doctorId="hjvhj";
        const { date, time, concern } = appointment;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                patientId, doctorId, date, time, concern
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invailid Registration");
            console.log("Invailid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successfull");
            history.pop();
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
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" 
                                name="date"
                                value={appointment.date}
                                onChange={handleInputs} />
                            <label for="floatingInput">Date</label>
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
                        value={appointment.time}
                        onChange={handleInputs}  />
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