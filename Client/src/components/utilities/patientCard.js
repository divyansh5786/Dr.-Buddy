import React from 'react'
import '../../css/dashboard.css';
import '../../css/bookapp.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function PatientCard(props) {
    const history = useHistory();
    console.log(props);

    const book = () => {
        props.setDoctorBook(props.doctor);
        history.push("/patients/bookapp/confirm");
    }
    return (

        <>
        <div className="box" style={{marginTop:'20px'}}>
            <div className="card blog-horizontal mt-4" >
                <div className="card">
                    <div className="card-body">
                        <div className="doctor-widget">
                            <div className="doc-info-left">
                                <div className="doctor-img">
                                    <a href="doctor-profile.html">
                                        <img src="https://i.imgur.com/OJHNsX9.jpg" className="img-fluid card-img" alt="" />
                                    </a>
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name"><a href="doctor-profile.html">{props.doctor.name}</a></h4>
                                    <p className="doc-speciality">{props.doctor.degree}</p>
                                    <h5 className="doc-department"> {props.doctor.spec}</h5>
                                    <div className="clinic-details">
                                        <div className="doc-location"><i className="fas fa-map-marker-alt"></i> {props.doctor.Address}</div>
                                        <p className="doc-location"> {" " + props.doctor.city + ", " + props.doctor.state}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="doc-info-right">
                                {props.show === true ?
                                    <div className="clini-infos">
                                        <li><i className="far fa-money-bill-alt"></i>{props.doctor.fees}</li>
                                    </div> : <div className="clini-infos">

                                        <li><i className="far fa-money-bill-alt"></i>{props.doctor.fees}</li>
                                        <li><i className="fas fa-phone"></i>{props.doctor.mobile}</li>
                                        <li><i className="fas fa-envelope"></i>{props.doctor.email}</li>
                                    </div>}
                                {props.show === false ? " " :
                                    <div className="clinic-booking">
                                        <button className="btn btn-primary" style={{ width: 'auto' }} onClick={book}>Book Appointment</button>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PatientCard
