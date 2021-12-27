import { useState } from 'react';
import React from 'react'
import '../../css/style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';

const data01 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


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
      <div className="graphrow">
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={data01}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
        
        <div className="box">
        <LineChart
          width={500}
          height={300}
          data={data01}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
            
        
      </div>

    </>
    )
}

export default DashMedPatient;