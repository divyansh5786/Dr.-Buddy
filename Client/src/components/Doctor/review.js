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



function ViewReview({ id, setPage }) {

    let doctorID = id;
    const [prevreviews, setprevreviews] = useState(null);
    const auth = useContext(AuthContext);
    const [totalRating, settotalRating] = useState(null);
    const [totalReviews, settotalReviews] = useState(null);
    useEffect(() => {
        setPage('View Review');
        fectchReviews(doctorID, auth).then(tempdata => {
            setprevreviews(tempdata.review);
            settotalRating(tempdata.totalRating.toFixed(1));
            settotalReviews(tempdata.totalReviews);
            console.log(tempdata.review);
        })
    }, []);


    return (
        <div class="doctorview" style={{ paddingTop: '10%', paddingInline: '10%' }}>
            <div>


                <div class="card">
                    <div class="card-body pt-0">
                        <div class ="Review-details" style={{"paddingLeft":"10px","paddingTop":"25px"}}>
                        <div><strong>Average Rating : </strong>{(totalRating === null) ? <>Loading..</> : <>{(totalRating >= 1) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                            {(totalRating >= 2) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                            {(totalRating >= 3) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                            {(totalRating >= 4) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}
                            {(totalRating >= 5) ? <i class="fas fa-star filled" style={{ "color": "#f4c150" }}></i> : <i class="fas fa-star" style={{ "color": "#dedfe0" }}></i>}</>} ({totalRating})
                        </div>
                        <div><strong>Total Reviews : </strong>{(totalReviews === null) ? <>Loading..</> : <>{totalReviews} </>}
                        </div>
                        </div>
                        <div class="user-tabs">
                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                                <li class="nav-item">
                                    <a class="nav-link" href="#doc_reviews" data-bs-toggle="tab"><span class="med-records">ratings & Review</span></a>
                                </li>

                            </ul>
                        </div>
                        <div class="tab-content">
                            <div role="tabpanel" id="doc_reviews" class="tab-pane fade show active">

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

                            </div>

                        </div>
                    </div>
                </div>

            </div></div>


    );
}

export default ViewReview;