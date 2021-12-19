import { useState, useEffect } from 'react';
import '../../css/prescriptions.css';
import React from 'react'
//import '../../css/style.css';
import { useHistory } from 'react-router-dom';


const fetchPatientData = async (id) => {
    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invailid Registration");
            console.log("Invailid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successfull");
            // history.replace("/");
        }
    }
    catch (e) {
        console.log("error occured in fetching" + e);
    }
    const tempdata = {
        "name": "Narendra Modi",
        "gender": "male",
        "age": "25",
        "Address": "118/22 Amar Enclave",
        "city": "ghaziabad",
        "state": "Uttar Pradesh",
        "mobile": "9990892500",
        "email": "bansal@gmail.com",
    };
    return tempdata;
}

function AddProfessional({id,setPage}) {
    
  
    const [mode, setmode] = useState([]);
    const [degrees, upadtedegree] = useState([]);
    const [specialisation, setspecialisation] = useState([]);
    const [fees, setfees] = useState(null);
    const [temporary, settemporary] = useState({mode:"",degreename:"",institute:"",duration:"",specialisation:"",fees:" "});
    

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
          let tempmed = {degreename:temporary.degreename,institute:temporary.institute,duration:temporary.duration}
        upadtedegree( arr => [...arr, tempmed]);
        settemporary({ ...temporary, degreename:"",institute:"",duration:""});
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
        let prescription={"mode":mode,"degree":degrees,"specialisation":specialisation,"fees":fees};
        console.log(prescription);
    }
    return (< >
    
        <div class="professionals" style={{ paddingTop: '10%', paddingInline: '10%' }}>
        <h4 style={{"paddingLeft":"10px"}}>Professional Details</h4>
            <div class="card">
                <div class="card-body pt-0">
                <div class="Mode" style={{ "paddingTop": "25px" }}>
                        <h4>Mode Up</h4>
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
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Degree Name"
                                        name="degreename" 
                                        value={temporary.degreename}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">Degree Name</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Institute Name"
                                        name="institute"
                                        value={temporary.institute}
                                        onChange={handleInputs} />
                                    <label for="floatingInput">Institute Name</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="duration"
                                        name="duration"
                                        value={temporary.duration}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">duration</label>
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
						</tr>
					</thead>
					<tbody>
                    {degrees.map((degree,index) => {
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{degree.degreename}</td>
                                    <td>{degree.institute}</td>
                                    <td>{degree.duration}</td>
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
			<a class="btn btn-success" onClick={postdata} style={{"width":"auto","color":"white"}}> SUBMIT</a>
		</div>
        </div>
    </>
    )
}

export default AddProfessional
