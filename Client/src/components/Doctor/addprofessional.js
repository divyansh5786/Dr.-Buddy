import { useState, useEffect,useContext  } from 'react';
import '../../css/prescriptions.css';
import React from 'react'
//import '../../css/style.css';
import {useHistory} from 'react-router-dom';
import AlertBar from '../utilities/alertbar';

import { AuthContext } from '../../context/auth-context';

const saveDetails = async (details,history,setalert,auth) => {
    
    const { id, Online, Specialization, Fees, Degree } = details;
    try {
        const res = await fetch("/addprofession", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
                id,Online,Specialization,Fees,Degree
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data || res.status === 404 ) {
            setalert({color:"red",message:"Error Occure while saving professional details"});
            history.replace("/doctors/dashboard");
            console.log("Error Occurred");
        } else {
            console.log("Details saved successfully"+data);
            setalert({color:"green",message:" Professional Details Saved Successfully"});
            history.replace("/doctors/dashboard");
        }
    }
    catch (e) {
        console.log("error occured in fetching" + e);
    }
}

function AddProfessional({id,setPage,alert,setalert}) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    console.log(id);
    // if(id==null)
    // history.replace("/");
    
    const [mode, setmode] = useState([]);
    const [degrees, upadtedegree] = useState([]);
    const [specialisation, setspecialisation] = useState([]);
    const [fees, setfees] = useState(null);
    const [temporary, settemporary] = useState({mode:"",Name:"",Institute:"",Duration:"",specialisation:"",fees:" "});
    const handleNULLId = ()=>{
        
    }
    const deleteDegree = (index)=>{
        console.log(index);
        degrees.splice(index, 1);
        let tempdata = degrees.map(obj => ({...obj}));
        if(tempdata===null)
        upadtedegree([]);
        else
        upadtedegree(tempdata);
        console.log(degrees);
    }
    useEffect(() => {
        setPage('Add Professional');
    }, []);

    const handleInputs = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        // console.log(name+" "+value);
        settemporary({ ...temporary, [name]: value });
      }
      const addmode =()=>{
        setmode(temporary.mode);
        settemporary({ ...temporary, mode: "" });
    }
      const adddegree =()=>{
          let tempmed = {Name:temporary.Name,Institute:temporary.Institute,Duration:temporary.Duration}
        upadtedegree( arr => [...arr, tempmed]);
        settemporary({ ...temporary, Name:"",Institute:"",Duration:""});
      }
      const addspecialisation =()=>{
        setspecialisation(temporary.specialisation);
        settemporary({ ...temporary, specialisation: "" });
    }
    const addfees =()=>{
        setfees(temporary.fees);
        settemporary({ ...temporary, fees: "" });
    }
    const postdata =()=>{
        let online;
        if (mode=="online")
        online=false;
        else
        online=true;
        let details={"id":id,"Online":online,"Specialization":specialisation,"Fees":fees,"Degree":degrees};
        console.log(details);
        console.log(id);
        saveDetails(details,history,setalert,auth);
    }
    console.log(degrees);
    return (< >
        <div class="professionals" style={{ paddingTop: '10%', paddingInline: '10%' }}>
        <h4 style={{"paddingLeft":"10px"}}>Professional Details</h4>
            <div class="card">
                <div class="card-body pt-0">
                <div class="Mode" style={{ "paddingTop": "25px" }}>
                        <h4>Mode</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Mode"
                                        name="mode" value={temporary.mode}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput" >Add Mode</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn"onClick={addmode}>Add Mode</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"2%"}}>
                            {(mode===null)?"":mode}
						</div>
                    </div>
                <div class="Degree" style={{ "paddingTop": "25px" }}>
                        <h4>Degree</h4>
                        <hr />
                        <h6 style={{ "paddingLeft": "10px" }}> Add Degree</h6>
                        <div className="row g-4" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                        <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                                        name="Name" 
                                        value={temporary.Name}
                                        onChange={handleInputs}/>
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
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">Duration</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn" onClick={adddegree}>Add Degree</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"25px"}}>
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
                    {
                    degrees.map((degree,index) => {
                                return (<tr>
                                    <td>{index+1}</td>
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
                <div class="Specialisation" style={{ "paddingTop": "25px" }}>
                        <h4>Specialisation</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Specialisation"
                                        name="specialisation" value={temporary.specialisation}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput" >Add Specialisation</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn"onClick={addspecialisation}>Add Specialisation</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"2%"}}>
                            {(specialisation===null)?"":specialisation}
						</div>
                    </div>
                <div class="Fees" style={{ "paddingTop": "25px" }}>
                        <h4>Fees</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Fees"
                                        name="fees" value={temporary.fees}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput" >Add Fees</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn"onClick={addfees}>Add Fees</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"2%"}}>
                            {(fees===null)?"":fees}
						</div>
                    </div>
                </div>
            </div>
            <div class="panel-body2" >
			<a class="btn btn-success" onClick={()=>{postdata()}} style={{"width":"auto","color":"white"}}> SUBMIT</a>
		</div>
        </div>
    </>
    )
}

export default AddProfessional
