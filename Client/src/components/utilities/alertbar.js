import React from 'react'
import '../../css/dashboard.css';
import { NavLink } from 'react-router-dom';

const changealert = (setalert)=>{
    setTimeout(()=>{
        setalert(null);
    }, 5000);

}


function AlertBar({ alert, setalert }) {
    console.log(alert);
    return (
        <>
            {(alert === null || !alert) ? <></> : (alert.color === "green") ? <div class="alert alert-success" role="alert" style={{"marginInline":"5%"}}>
                {alert.message}
            </div> : <div class="alert alert-danger" role="alert">
                {alert.message}
            </div>
            }
            {changealert(setalert)}

        </>
    )
}

export default AlertBar

