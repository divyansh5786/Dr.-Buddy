import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect,useContext  } from 'react';
import { useHistory } from 'react-router-dom';
import AlertBar from '../utilities/alertbar';
import { AuthContext } from '../../context/auth-context';

var DateTransformtoobject = (date) => {
    let tareek = parseInt(date.substring(0, 2));
    let month = parseInt(date.substring(3, 5));
    let year = parseInt(date.substring(6));
    const d = new Date(year, month - 1, tareek, 0, 0, 0, 0);
    console.log(year + " " + month + " " + tareek + " " + d);
    return d;
}

var DateTransformtoString = (date) => {
    const d = new Date(date);
    //console.log(year + " "+ month +" " + tareek +" " + d);
    const res = (d.getDate()) + "/" + (d.getMonth() + 1) + "/" + (d.getFullYear());
    //console.log(res);
    return res;
}
const fetchData = async (id,auth) => {
    let doctorID = id;
    console.log("here" + id);
    let tempdata;
    try {
        // const { firstname, lastname, mobile, email, city, state, Address } = user;
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
            console.log(data);
            data.dateofbirth = DateTransformtoString(data.dateofbirth);
            tempdata = data;
            if(data.Online==false)
            data.Online="false";
            else
            data.Online="true";
        }
        // history.replace("/");
    }
    catch (e) {
        console.log(e + 'error while fetching');
    }

    return tempdata;
}

function ProfileViewDoctor({ id, setPage, user, setUser,setprofile }) {
    const auth = useContext(AuthContext);
    useEffect(() => {
        setPage('Profile');
        fetchData(id,auth).then(tempdata => {
            setUser(tempdata);
        })
    }, []);

    return (<>

        <div class="box">
            <div class="card">
                <div class="card-body" >

                    <form >
                        {user === null ? "Loading" :
                            <>
                                <div class="row form-row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>First Name</strong> : <span>{user.firstname}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Last Name</strong> : <span>{user.lastname}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Date of birth</strong> : <span>{user.dateofbirth}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Gender</strong> : <span>{user.gender}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Email ID</strong> : <span>{user.email}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Mobile</strong> : <span>{user.mobile}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label><strong>Address</strong> : <span>{user.Address}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>City</strong> : <span>{user.city}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>State</strong> : <span>{user.state}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Fees</strong> : <span>{user.Fees}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Online</strong> : <span>{user.Online}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label><strong>Specialization</strong> : <span>{user.Specialization}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label><strong>Degree</strong> : </label>
                                        </div>
                                    </div>
                                    <div style={{"paddingInline":"10%"}}>
                                    <table class="table table-condensed nomargin" >
					<thead>
						<tr>
							<th>S.No.</th>
							<th>Degree</th>
							<th>Institute</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
                    {user.Degree.map((degree,index) => {
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{degree.Name}</td>
                                    <td>{degree.Institute}</td>
                                    <td>{degree.Duration}</td>
                                </tr>)
                            })
                        }
					</tbody>
				</table>
                </div>
                                </div>
                                <div class="submit-section" >
                                    <button type="submit" class="btn btn-primary submit-btn" onClick = {()=>{setprofile('update')}}style={{"width":"auto"}} >Upadte Changes</button>
                                </div>
                            </>
                        }
                    </form>

                </div>
            </div>
        </div>

    </>
    )
}

export default ProfileViewDoctor;