import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';





const fetchData = async (id) => {
 
    try{
    // const { firstname, lastname, mobile, email, city, state, Address } = user;
    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
        window.alert("Invailid Registration");
        console.log("Invailid Registration");
    } else {
        window.alert("Registration Successful");
        console.log("Registration Successfull");
        }    
    // history.replace("/");
    }
    catch(e)
    {
        console.log(e+'error while fetching');
    }
    const tempdata = {
        "firstname":"prakhar",
        "lastname":"lohiaya",
        "mobile":"9318374795",
        "email":"prakhar@gmail.com",
        "city":"Unao", 
        "state":"Uttar Pradesh",
        "address":"paki gali unao"
      };
      return tempdata;
}

function Profile({id,setPage}) {
    const history = useHistory ();
    const [user, setUser] = useState(null);

    let name, value;
    const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
}

    useEffect(() => {
            setPage('Profile');
        fetchData(id).then(tempdata => {
            setUser(tempdata);
        })
    }, []);
    const postData = async (e) => {
        e.preventDefault();
        const { firstname, lastname, mobile, email, city, state, Address } = user;
        console.log(user);
        const res = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstname, lastname, mobile, email, city, state, Address
          })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
          window.alert("Invailid Registration");
          console.log("Invailid Registration");
        } else {
          window.alert("Registration Successful");
          console.log("Registration Successfull");
        //   history.replace("/");
        }
      }
    
    return (<>
        <div class="heelo" style={{paddingTop:"8%",paddingInline:'10%'}} >
            <h3 className='text-center'>Profile Details</h3>
            <div class="box">
            <div class="card">
                <div class="card-body" >

                    <form >
                        {user===null?"Loading":
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
                                    onChange={handleInputs}/>
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
                                    onChange={handleInputs}/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control"
                                    name="address"
                                    value={user.address}
                                    onChange={handleInputs} />
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="text" class="form-control" name="city"
                                        value={user.city}
                                        onChange={handleInputs}/>
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
            </div>
        </div>
    </>
    )
}

export default Profile