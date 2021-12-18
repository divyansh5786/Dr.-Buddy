import { useState, useEffect } from 'react';
import '../../css/prescriptions.css';
import React from 'react'
import PatientDetails from '../utilities/patientDetails';
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

function AddPrescription({id,setPage}) {
    
  
    const [patientData, setpatientData] = useState(null);
    const [diagnoisis, upadtediagnoisis] = useState([]);
    const [medicines, upadtemedicines] = useState([]);
    const [tests, upadtetest] = useState([]);
    const [followup, setfollowup] = useState(null);
    const [temporary, settemporary] = useState({diagnos:"",medicinename:"",dosage:"",fd:"",test:"",followup:" "});
    

    useEffect(() => {
        setPage('Add Prescription');
        fetchPatientData(id).then(tempdata => {
            setpatientData(tempdata);
        })
    }, []);

    const handleInputs = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        // console.log(name+" "+value);
        settemporary({ ...temporary, [name]: value });
      }
      const addDiagnos =()=>{
        upadtediagnoisis( arr => [...arr, temporary.diagnos]);
        settemporary({ ...temporary, diagnos: "" });
      }
      const addmedicine =()=>{
          let tempmed = {medicinename:temporary.medicinename,dosage:temporary.dosage,fd:temporary.fd}
        upadtemedicines( arr => [...arr, tempmed]);
        settemporary({ ...temporary, name:"",dosage:"",fd:""});
      }
      const addtest =()=>{
        upadtetest( arr => [...arr, temporary.test]);
        settemporary({ ...temporary, test: "" });
    }
    const addfollowup =()=>{
        setfollowup(temporary.followup);
        settemporary({ ...temporary, followup: "" });
    }
    const postdata =()=>{
        let prescription={"diagnosis":diagnoisis,"medcines":medicines,"tests":tests,"followup":followup};
        console.log(prescription);
    }
    return (< >
    
        <div class="prescription" style={{ paddingTop: '10%', paddingInline: '10%' }}>
        <h3 style={{"textAlign":"center"}}>Make Prescription</h3>
        <h4 style={{"paddingLeft":"10px"}}>Patient Details</h4>
            {patientData === null ? "Loading..." : <PatientDetails patient={patientData} />}
            <br />
        <h4 style={{"paddingLeft":"10px"}}>Prescription Details</h4>
            <div class="card">
                <div class="card-body pt-0">
                    <div class="Diagnosis" style={{ "paddingTop": "25px" }}>
                        <h4>Diagnosis</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Diagnosis"
                                        name="diagnos" value={temporary.diagnos}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">Add Diagnos</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn" onClick={addDiagnos}>Add Diagnos</a>
                        </div>
                        </div>
                        <ul style={{"paddingInline":"2%"}}>
                        {diagnoisis.map((diagnos) => {
                                return (<li>{diagnos}</li>)
                            })
                        }
						</ul>
                    </div>
                    <div class="Medicine" style={{ "paddingTop": "25px" }}>
                        <h4>Medicine</h4>
                        <hr />
                        <h6 style={{ "paddingLeft": "10px" }}> Add Medicine</h6>
                        <div className="row g-4" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                        <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Medicine Name"
                                        name="medicinename" 
                                        value={temporary.medicinename}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">Medicine Name</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Dosage Eg:(1-1-0)"
                                        name="dosage"
                                        value={temporary.dosage}
                                        onChange={handleInputs} />
                                    <label for="floatingInput">Dosage Eg:(1-1-0)</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="freq/duration"
                                        name="fd"
                                        value={temporary.fd}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput">freq/duration</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn" onClick={addmedicine}>Add Medicine</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"25px"}}>
                        <table class="table table-condensed nomargin" >
					<thead>
						<tr>
							<th>S.No.</th>
							<th>Medicine</th>
							<th>Dosage</th>
							<th>Freq - Duration</th>
						</tr>
					</thead>
					<tbody>
                    {medicines.map((medicine,index) => {
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{medicine.medicinename}</td>
                                    <td>{medicine.dosage}</td>
                                    <td>{medicine.fd}</td>
                                </tr>)
                            })
                        }
					</tbody>
				</table>
                </div>
                    </div>
                    <div class="Tests" style={{ "paddingTop": "25px" }}>
                        <h4>Tests</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Test"
                                        name="test" value={temporary.test}
                                        onChange={handleInputs}/> 
                                    <label for="floatingInput">Add Test</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn" onClick={addtest}>Add Test</a>
                        </div>
                        </div>
                        <ul style={{"paddingInline":"2%"}}>
						{tests.map((test) => {
                                return (<li>{test}</li>)
                            })
                        }
						</ul>
                    </div>
                    <div class="Followup" style={{ "paddingTop": "25px" }}>
                        <h4>Follow Up</h4>
                        <hr />
                        <div className="row g-2" style={{"justifyContent":"space-between","paddingInline":"2%"}}>
                            <div style={{"width":"50%"}}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Followup"
                                        name="followup" value={temporary.followup}
                                        onChange={handleInputs}/>
                                    <label for="floatingInput" >Add Follow Up</label>
                                </div>
                            </div>
                            <div  style={{"width":"auto"}}>
                            <a class="add-new-btn"onClick={addfollowup}>Add Follow Up</a>
                        </div>
                        </div>
                        <div style={{"paddingInline":"2%"}}>
                            {(followup===null)?"":followup}
						</div>
                    </div>
                </div>
            </div>
            <div class="panel-body2" >
			<a class="btn btn-success" onClick={postdata} style={{"width":"auto","color":"white"}}><i class="fa fa-print"></i> SUBMIT</a>
		</div>
        </div>
    </>
    )
}

export default AddPrescription
