import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect,useContext  } from 'react';
import { useHistory } from 'react-router-dom';
import AlertBar from '../utilities/alertbar';
import ProfileViewPatient from './profileviewPatient';
import { AuthContext } from '../../context/auth-context';

var DateTransformtoobject = (date) => {
    let tareek = parseInt(date.substring(0,2));
    let month = parseInt(date.substring(3,5));
    let year = parseInt(date.substring(6));
    const d = new Date(year, month-1, tareek, 0, 0, 0, 0);
    console.log(year + " "+ month +" " + tareek +" " + d);
    return d;
  }

var DateTransformtoString = (date) => {
    const d = new Date(date);
    //console.log(year + " "+ month +" " + tareek +" " + d);
    const res =  (d.getDate())+"/"+(d.getMonth()+1)+"/"+(d.getFullYear());
    //console.log(res);
    return res;
  }
const fetchData = async (id,auth) => {
    let patientID = id;
    let tempdata;
    try {
        // const { firstname, lastname, mobile, email, city, state, Address } = user;
        const res = await fetch("/viewpatient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({ patientID })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
           
            console.log("Error Occured while fetching details");
        } else {
            console.log("Details fetched Successfull");
            console.log(data);
            var dateofbirth=DateTransformtoString(data.dateofbirth);
            tempdata = {
                "firstname": data.firstname,
                "lastname": data.lastname,
                "dateofbirth":dateofbirth,
                "gender":data.gender,
                "mobile": data.mobile,
                "email": data.email,
                "city": data.city,
                "state": data.state,
                "Address": data.Address
            };
        }
        // history.replace("/");
    }
    catch (e) {
        console.log(e + 'error while fetching');
    }
     
    return tempdata;
}

function Profile({ id, setPage,alert,setalert, }) {
    const auth = useContext(AuthContext);
    const [profile, setprofile] = useState('view');
    const history = useHistory();
    const [user, setUser] = useState(null);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
        setPage('Profile');
        fetchData(id,auth).then(tempdata => {
            setUser(tempdata);
        })
    }, []);
    const postData = async (e) => {
        e.preventDefault();
        //const { firstname, lastname, mobile, email, city, state, Address } = user;
        let updatedPatient = user;
        updatedPatient.dateofbirth = DateTransformtoobject(updatedPatient.dateofbirth);
        console.log(user);
        const res = await fetch("/updatepatient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
                id,updatedPatient
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            setalert({color:"red",message:"Error Occured while saving new details"});
            console.log("Error Occured while saving new details");
        } else {
            setalert({color:"green",message:"Details saved Successfull"});
            console.log("Details saved Successfull");
            //   history.replace("/");
        }
    }

    return (<>
        <div class="heelo" style={{ paddingTop: "8%", paddingInline: '10%' }} >
        <AlertBar alert = {alert} setalert={setalert}/>
            <h3 className='text-center'>Profile Details</h3>
            {(profile === 'view') ? <ProfileViewPatient id={id} setPage={setPage} user={user} setUser={setUser} setprofile={setprofile} /> :<div class="box">
                <div class="card">
                    <div class="card-body" >

                        <form >
                            {user === null ? "Loading" :
                                <>
                                    <div class="row form-row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>First Name</label>
                                                <input type="text" class="form-control"
                                                    name="firstname"
                                                    value={user.firstname}
                                                    onChange={handleInputs}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Last Name</label>
                                                <input type="text" class="form-control"
                                                    name="lastname"
                                                    value={user.lastname}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Date of birth in (dd/mm/yyyy)</label>
                                                <input type="text" class="form-control" name="dateofbirth"
                                                    value={user.dateofbirth}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Gender</label>
                                                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                                    name="gender"
                                                    value={user.gender}
                                                    onChange={handleInputs}>
                                                    <option selected>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Email ID</label>
                                                <input type="email" class="form-control"
                                                    name="email"
                                                    value={user.email}
                                                    onChange={handleInputs}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Mobile</label>
                                                <input type="text" class="form-control"
                                                    name="mobile"
                                                    value={user.mobile}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="text" class="form-control"
                                                    name="Address"
                                                    value={user.Address}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="text" class="form-control" name="city"
                                                    value={user.city}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>State</label>
                                                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                                    name="state"
                                                    value={user.state}
                                                    onChange={handleInputs}>
                                                    <option selected>Select</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section" >
                                        <button type="submit" class="btn btn-primary submit-btn" onClick={postData}>Save Changes</button>
                                    </div>
                                </>
                            }
                        </form>

                    </div>
                </div>
            </div>}
        </div>
    </>
    )
}

export default Profile