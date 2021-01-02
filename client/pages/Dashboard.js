import React from 'react';
import ThroughputChart from '../components/charts/ThroughputChart.jsx';
import EventChart from '../components/charts/EventChart.jsx';
import Header from '../components/Header';
import Metric from '../components/Sidebar/Metric';
import './Pages.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <Header className="dashboardHeader" /> */}
      <Metric className="metric1" metric={3} metricText={'# of brokers'} />
      <Metric className="metric2" metric={2} metricText={'# of topics'} />
      <Metric className="metric3" metric={5} metricText={'# of consumers'} />
      <ThroughputChart className="graph1" />
      <EventChart className="graph2" />
    </div>
  );
};

export default Dashboard;
