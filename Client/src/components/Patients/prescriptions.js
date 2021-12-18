import { useState,useEffect } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import PrescriptionCard from '../utilities/prescriptionCard';


const fetchData = async (id) => {
    try{const res = await fetch("/register", {
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
      }}
      catch(e)
      {
          console.log("error occured in fetching"+e);
      }
        const tempdata = [{
        "id":"565465",
        "doctorName":"Dr. harish goyl",
        "spec":"Surgeon",
        "dateOfAppointment":"24 Oct 2021", 
      },
      {
          "id":"165165",
        "doctorName":"Dr. kaunal bhardwaj",
        "spec":"Dentist",
        "dateOfAppointment":"24 Oct 2021", 
      },];
      return tempdata;
}

function Prescriptions({id,setPage}) {

    const history = useHistory ();
    const [prescriptions, setPrescriptions] = useState(null);

    useEffect(() => {
        setPage('Prescription');
        fetchData(id).then(tempdata => {
            setPrescriptions(tempdata);
        })
      }, []);
      
    
    
    return (
        <div classname="prescriptions"style={{ paddingTop: '10%', paddingInline: '8%' }}>
            <div class="tab-content pt-0 box">
                <div id="pat_appointments" class="tab-pane fade show active ">
                    <div class="card card-table mb-0 card-body table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Id</th>
                                    <th>Created By</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {prescriptions===null?"Loading..." :prescriptions.length===0?"No appointment made" :  
                    prescriptions.map((prescription)=>{
                        console.log(prescription);
                        return (<PrescriptionCard key={prescriptions.id} prescription={prescription} />   
                     )
                 })
                    }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            </div>


    );
}

export default Prescriptions