import React from 'react';
import MyChart from '../components/charts/MyChart.jsx';
import './Pages.scss';


const Dashboard = () => {
  return (
    <div className="grid-container">
          <MyChart />     
      <div className="grid-item grid-item-2">
          <MyChart />     
      </div>
      <div className="grid-item grid-item-3">
        <MyChart />  
        </div>
      <div className="grid-item grid-item-4">
          <MyChart /> 
          </div>    
      <div className="grid-item grid-item-5">
        <MyChart /> 
        </div>
      <div className="grid-item grid-item-6">
          <MyChart />     
      </div>
    </div> 
  )
}

export default Dashboard;
