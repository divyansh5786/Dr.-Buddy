import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { useHistory } from 'react-router-dom';

function MedicaldDataCard({data}) {
    return (<>
        <tr>
            <td>{data.date}</td>
            <td>{data.bp}</td>
            <td>{data.sugar}</td>
            <td>{data.temp}</td>
            <td>{data.pulse}</td>
        </tr>
    </>
    )
}

export default MedicaldDataCard;