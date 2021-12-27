import { useState, useEffect, useContext } from 'react';
import React from 'react'
import '../../css/style.css';
import { NavLink, useHistory } from 'react-router-dom';
import MedicaldDataCard from '../utilities/medicalDataCard';
import AlertBar from '../utilities/alertbar';
import { AuthContext } from '../../context/auth-context';

var DateTransform = (date) => {
    let milliseconds = Date.parse(date);
    date = new Date(milliseconds)
    console.log(date);
    var d = (date.getDate()) + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear());
    return d;
}


const fetchDoctorData = async (doctorID, auth) => {
    console.log(doctorID);
    let tempdata = [];
    try {
        const res = await fetch("/viewdoctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({ doctorID })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("Error Occured while fetching details");
        } else {
            console.log("Details fetched Successfull");
            tempdata = data;
            var degreestring = "";
            data.Degree.map((degree) => {
                degreestring = degreestring + degree.Name + " , ";
            });
            degreestring = degreestring.substring(0, degreestring.length - 2);
            data.degreestring = degreestring;
            if (data.Online == false)
                data.Online = "false";
            else
                data.Online = "true";
            console.log(data);
        }
        // history.replace("/");
    }
    catch (e) {
        console.log(e + 'error while fetching');
    }

    return tempdata;
}
const fectchReviews = async (doctorID, auth) => {
    console.log(doctorID);
    let tempdata = [];
    try {
        const res = await fetch("/viewRatingDoctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({ doctorID })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("Error Occured while fetching details");
        } else {
            console.log("Reviews fetched Successfull");
            tempdata = data;
            console.log(data);
        }
        // history.replace("/");
    }
    catch (e) {
        console.log(e + 'error while fetching');
    }

    return tempdata;
}

const postReviews = async (doctorID, patientName, rating, time, text, title, auth, history) => {
    console.log(doctorID + " " + patientName + " " + rating + " " + time + " " + text + " " + title, auth);
    console.log(doctorID);
    let date = time;
    try {
        const res = await fetch("/ratingDoctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({ doctorID, text, rating, title, date, patientName })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("Error Occured while fetching details");
            window.alert("Error Occured while fetching details");
        } else {
            console.log("Reviews stored Successfully");
            console.log(data);
            window.alert("Review saved succesfully");
        }
        history.replace("/patients/viewdoctor");
    }
    catch (e) {
        console.log(e + 'error while fetching');
    }
}

function ViewDoctor({ doctorBook, patientname, setPage }) {

    const history = useHistory();
    // const [medicalData, setmedicalData] = useState(null);
    // console.log(doctorBook);
    // console.log("patient name" + patientname);
    let doctorID = doctorBook;
    const [doctor, setdoctor] = useState(null);
    const [prevreviews, setprevreviews] = useState(null);
    const auth = useContext(AuthContext);
    const [totalRating, settotalRating] = useState(null);
    const [totalReviews, settotalReviews] = useState(null);
    useEffect(() => {
        setPage('View Doctor');
        fetchDoctorData(doctorID, auth).then(tempdata => {
            setdoctor(tempdata);
        })
        fectchReviews(doctorID, auth).then(tempdata => {
            setprevreviews(tempdata.review);
            if(tempdata.totalRating)
            settotalRating(tempdata.totalRating.toFixed(1));
            settotalReviews(tempdata.totalReviews);
        })
    }, []);
    const [review, setreview] = useState({
        rating: 0, time: "", text: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        if (name === "rating")
            value = parseInt(value);
        setreview({ ...review, [name]: value });
    }
    const handlesubmit = (e) => {
        var time = new Date();
        postReviews(doctorID, patientname, review.rating, time, review.text, review.title, auth, history);
    }

    return (
        <div class="doctorview" style={{ paddingTop: '10%', paddingInline: '10%' }}>
            {(doctor === null) ? <></> : <div>
                <div className="box" style={{ marginTop: '20px' }}>
                    <div className="card blog-horizontal mt-4" >
                        <div className="card" style={{ "fontSize": "20px" }}>
                            <div className="card-body">
                                <div className="doctor-widget">
                                    <div className="doc-info-left">
                                        <div className="doc-info-cont">
                                            <h3 className="doc-name"><a href="doctor-profile.html" style={{ "fontSize": "25px", "color": "black" }}>{doctor.firstname + " " + doctor.lastname}</a></h3>
                                            <p className="doc-speciality" style={{ "fontSize": "20px" }}>{doctor.degreestring}</p>
                                            <h5 className="doc-department" style={{ "fontSize": "20px" }}>{doctor.Specialization}</h5>
                                            <div className="clinic-details">
                                                <div className="doc-location" style={{ "fontSize": "20px" }}><i className="fas fa-map-marker-alt"></i>{doctor.Address}</div>
                                                <p className="doc-location" style={{ "fontSize": "20px" }}>{doctor.city + " ," + doctor.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doc-info-right">

                                        <div className="clini-infos">

                                            <li><i className="far fa-money-bill-alt"></i>{doctor.Fees}</li>
                                            <li><i className="fas fa-phone"></i>{doctor.mobile}</li>
                                            <li><i className="fas fa-envelope"></i>{doctor.email}</li>
                                            <li><br /></li>
                                            <li><span>Average Rating : {(totalRating === null) ? <>Loading..</> : <><div>{(totalRating >= 1) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                {(totalRating >= 2) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                {(totalRating >= 3) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                {(totalRating >= 4) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                {(totalRating >= 5) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>} ({totalRating})</div></>}
                                            </span>  </li>
                                            <li><div>Total Reviews :{(totalReviews === null) ? <>Loading..</> : <>{totalReviews} </>}
                                            </div></li>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-body pt-0">
                        <div class="user-tabs">
                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#doc_overview" data-bs-toggle="tab">Overview</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#doc_reviews" data-bs-toggle="tab"><span class="med-records">ratings & Review</span></a>
                                </li>

                            </ul>
                        </div>
                        <div class="tab-content">
                            <div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
                                <div class="row">
                                    <div class="col-md-12 col-lg-9">
                                        <div class="widget education-widget">
                                            <h4 class="widget-title">Education</h4>
                                            <div class="experience-box">
                                                <ul class="experience-list">
                                                    {doctor.Degree.map((degree) => {
                                                        return (<li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">{degree.Institute}</a>
                                                                    <div>{degree.Name}</div>
                                                                    <span class="time">{degree.Duration}</span>
                                                                </div>
                                                            </div>
                                                        </li>);
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" id="doc_reviews" class="tab-pane fade">

                                <div class="widget review-listing">
                                    <ul class="experience-list">
                                        {(prevreviews === null) ? "Loading..." : (prevreviews.length === 0) ? <>No Reviews Made</> : prevreviews.map((single_review) => {
                                            return (<li><div class="experience-user">
                                                <div class="before-circle"></div>
                                            </div>
                                                <div class="experience-content">
                                                    <div class="comment">
                                                        <div class="comment-body">
                                                            <div class="meta-data">
                                                                <span class="comment-author">{single_review.patientName}</span>
                                                                <span class="comment-date">{DateTransform(single_review.date)}</span>
                                                                <span class="comment-date">{single_review.title}</span>
                                                                <div class="review-count rating">

                                                                    {(single_review.rating >= 1) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                                    {(single_review.rating >= 2) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                                    {(single_review.rating >= 3) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                                    {(single_review.rating >= 4) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                                    {(single_review.rating >= 5) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                                </div>
                                                            </div>
                                                            <p class="comment-content">
                                                                {single_review.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>);
                                        })}
                                        {/* <li><div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                            <div class="experience-content">
                                                <div class="comment">
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <span class="comment-author">Charlene Reed</span>
                                                            <span class="comment-date">Reviewed 3 Days ago</span>
                                                            <div class="review-count rating">
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>
                                                                <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam.
                                                            Curabitur non nulla sit amet nisl tempus
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}

                                        {/* <li><div class="experience-user">
                                                <div class="before-circle"></div>
                                            </div>
                                            <div class="experience-content">
                                                <div class="comment">
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <span class="comment-author">Travis Trimble</span>
                                                            <span class="comment-date">Reviewed 4 Days ago</span>
                                                            <div class="review-count rating">
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i>
                                                                <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>
                                                                <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                                            Curabitur non nulla sit amet nisl tempus
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}

                                    </ul>
                                </div>


                                <div class="write-review">
                                    <h4 style={{ "text-align": "center" }}>Write a review for <strong>{doctor.firstname + " " + doctor.lastname}</strong></h4>

                                    <div className="review_form">
                                        <div class="form-group">
                                            <label>Review</label>
                                            <span class="star-rating">
                                                <input id="star-5" type="radio" name="rating" value="1" onChange={handleInputs} />
                                                <label for="star-5" title="5 stars">
                                                    {(review.rating >= 1) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                </label>
                                                <input id="star-4" type="radio" name="rating" value="2" onChange={handleInputs} />
                                                <label for="star-4" title="4 stars">
                                                    {(review.rating >= 2) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                </label>
                                                <input id="star-3" type="radio" name="rating" value="3" onChange={handleInputs} />
                                                <label for="star-3" title="3 stars">
                                                    {(review.rating >= 3) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                </label>
                                                <input id="star-2" type="radio" name="rating" value="4" onChange={handleInputs} />
                                                <label for="star-2" title="2 stars">
                                                    {(review.rating >= 4) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                </label>
                                                <input id="star-1" type="radio" name="rating" value="5" onChange={handleInputs} />
                                                <label for="star-1" title="1 star">
                                                    {(review.rating >= 5) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                                                </label>
                                            </span>
                                        </div>
                                        <div class="form-group">
                                            <label>Title of your review</label>
                                            <input class="form-control" type="text" placeholder="add review title" name="title" value={review.title} onChange={handleInputs} />
                                        </div>
                                        <div class="form-group">
                                            <label>Your review</label>
                                            <textarea id="review_desc" maxlength="100" class="form-control" name="text" value={review.text} onChange={handleInputs}></textarea>
                                            <div class="d-flex justify-content-between mt-3"><small class="text-muted"><span id="chars">{100 - review.text.length}</span> characters remaining</small></div>
                                        </div>
                                        <hr />
                                        <div class="submit-section" style={{ "text-align": "center" }}>
                                            <button type="submit" class="btn btn-primary submit-btn" style={{ "width": "auto" }} onClick={handlesubmit}>Add Review</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>}</div>


    );
}

export default ViewDoctor