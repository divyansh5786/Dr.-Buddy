import { useState } from 'react';
import React from 'react'
import '../../css/style.css';

import { useHistory } from 'react-router-dom';

function DashMedPatient({data}) {
    return (<>
    <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Heart Rate</div>
            <div class="number">{data.pulse}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">{data.date}</span>
            </div>
          </div>
          <span class="iconify" data-icon="system-uicons:heart-rate" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Body Tempreture</div>
            <div class="number">{data.temp}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">{data.date}</span>
            </div>
          </div>
          <span class="iconify" data-icon="emojione-v1:thermometer" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Blood Pressure</div>
            <div class="number">{data.bp}</div>
            <div class="indicator">
              <span class="text">{data.date}</span>
            </div>
          </div>
          <span class="iconify" data-icon="healthicons:blood-pressure-2" data-width="50" data-height="50"></span>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Glucose Level</div>
            <div class="number">{data.sugar}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt up'></i>
              <span class="text">{data.date}</span>
            </div>
          </div>
          <span class="iconify" data-icon="entypo:drop" data-width="50" data-height="50"></span>
        </div>
      </div>
    </>
    )
}

export default DashMedPatient;