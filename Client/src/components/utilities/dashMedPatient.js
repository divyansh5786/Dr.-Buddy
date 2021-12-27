import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';

function DashMedPatient({data,bparray,sugararray,pulsearray,temparray}) {
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
      <div className="graphrow">
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={bparray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Blood_Pressure" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
        
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={sugararray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Glucose_level" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
          </div>
          <div className='graphrow'>
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={pulsearray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Heart_Rate" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
            
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={temparray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Body_Tempreture" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
        
      </div>

    </>
    )
}

export default DashMedPatient;