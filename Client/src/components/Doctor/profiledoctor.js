import React from 'react';
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect,useContext  } from 'react';
import { useHistory } from 'react-router-dom';
import AlertBar from '../utilities/alertbar';
import ProfileViewDoctor from './profileviewdoctor';
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


function ProfileDoctor({ id, setPage, setalert }) {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [profile, setprofile] = useState('view');
    const [temporary, settemporary] = useState({Name:"",Institute:"",Duration:""});
    const auth = useContext(AuthContext);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        if(name == "Name" ||name == "Institute" || name == "Duration")
        settemporary({ ...temporary, [name]: value });
        else
        setUser({ ...user, [name]: value });
    }
const updateDegree =()=>{
    user.Degree.push(temporary);
    settemporary({Name:"",Institute:"",Duration:""});
}
const deleteDegree = (index)=>{
    let tempdata={};
    console.log(index);
    user.Degree.splice(index, 1);
    Object.assign(tempdata, user);
    setUser(tempdata);
}
    // useEffect(() => {
    //     setPage('Profile');
    //     fetchData(id).then(tempdata => {
    //         setUser(tempdata);
    //     })
    // }, []);
    const postData = async (setalert) => {
        //e.preventDefault();
        //const { firstname, lastname, mobile, email, city, state, Address } = user;
        let updatedDoctor = user;
        updatedDoctor.dateofbirth = DateTransformtoobject(updatedDoctor.dateofbirth);
        updatedDoctor.Online = (updatedDoctor.Online=="false")?false:true;
        console.log(updatedDoctor);
        const res = await fetch("/updateDoctorProfile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
                id, updatedDoctor
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            setalert({color:"red",message:"Error Occured while saving updating prof"});
            console.log("Error Occured while saving new details");
        } else {
            setalert({color:"green",message:"Details saved Successfull"});
            console.log("Details saved Successfull");
            //   history.replace("/");
            console.log(profile +" "+ typeof(profile));
            history.replace("/doctors/dashboard");
        }
    }

    return (<>
        <div class="heelo" style={{ paddingTop: "8%", paddingInline: '10%' }} >
            <h3 className='text-center'>Profile Details</h3>
            {(profile === 'view') ? <ProfileViewDoctor id={id} setPage={setPage} user={user} setUser={setUser} setprofile={setprofile} /> : <div class="box">
                <div class="card">
                    <div class="card-body" >
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
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Fees</label>
                                                <input type="text" class="form-control" name="Fees"
                                                    value={user.Fees}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Online</label>
                                                <input type="text" class="form-control" name="Online"
                                                    value={user.Online}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Specialization</label>
                                                <input type="text" class="form-control"
                                                    name="Specialization"
                                                    value={user.Specialization}
                                                    onChange={handleInputs} />
                                            </div>
                                        </div>
                                        <div><label>Add Degree</label></div>
                                        <div className="row g-4" style={{ "justifyContent": "space-between", "paddingInline": "2%", "margin-top": "auto" }}>
                                            <div className="col-md">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                                                        name="Name"
                                                        value={temporary.Name}
                                                        onChange={handleInputs} />
                                                    <label for="floatingInput">Degree Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Institute Name"
                                                        name="Institute"
                                                        value={temporary.Institute}
                                                        onChange={handleInputs} />
                                                    <label for="floatingInput">Institute Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Duration"
                                                        name="Duration"
                                                        value={temporary.Duration}
                                                        onChange={handleInputs} />
                                                    <label for="floatingInput">Duration</label>
                                                </div>
                                            </div>
                                            <div style={{ "width": "auto" }}>
                                                <a class="add-new-btn" onClick={updateDegree} >Add Degree</a>
                                            </div>
                                        </div>

                                        <div style={{ "paddingInline": "10%" }}>
                                            <table class="table table-condensed nomargin" >
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Degree</th>
                                                        <th>Institute</th>
                                                        <th>Duration</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {user.Degree.map((degree, index) => {
                                                        return (<tr>
                                                            <td>{index + 1}</td>
                                                            <td>{degree.Name}</td>
                                                            <td>{degree.Institute}</td>
                                                            <td>{degree.Duration}</td>
                                                            <td><button class="deletebtn" onClick={()=>{deleteDegree(index)}}><i class="fa fa-trash"></i></button></td>
                                                        </tr>)
                                                    })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="submit-section" >
                                        <button type="submit" class="btn btn-primary submit-btn" onClick={()=>{postData(setalert)}}>Save Changes</button>
                                    </div>
                                </>
                            }

                    </div>
                </div>
            </div>}
        </div>
    </>
    )
}

export default ProfileDoctor;