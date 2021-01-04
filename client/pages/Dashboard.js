import React, { useState, useEffect } from 'react';
import ThroughputChart from '../components/charts/ThroughputChart.jsx';
import EventChart from '../components/charts/EventChart.jsx';
import Metric from '../components/Sidebar/Metric';
import './Pages.scss';

const Dashboard = () => {
  const [brokerAmount, setBrokerAmount] = useState(0)
  const [topicAmount, setTopicAmount] = useState(0)
  const [consumerAmount, setConsumerAmount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect( async () => {
    console.log('rendered');

    //fetch broker length from kafka api handlers
    let response = await fetch('/api/describeCluster');
    let data = await response.json();
    // describeCluster data is an object with properties
    setBrokerAmount(data.brokers.length);

    //fetch topic length from kafka api handlers
    response = await fetch('/api/topicList');
    data = await response.json();
    // topicList data is a simple array with elements
    setTopicAmount(data.length);

    //fetch consumer length from kafka api handlers
    response = await fetch('/api/groupList');
    data = await response.json();
    // groupList data is an object with properties
    setConsumerAmount(data.groups.length);

    //remove '...loading' placeholder
    setLoading(false);
  }, [])

  return (
    <div className="dashboard-container">
      {/* <Header className="dashboardHeader" /> */}
        <Metric className="metric1 metrics-container" metric={loading ? <span>...Loading</span> : brokerAmount} metricText={brokerAmount === 1 ? 'Broker' : 'Brokers'} />
        <Metric className="metric2 metrics-container" metric={loading ? <span>...Loading</span> : topicAmount} metricText={topicAmount === 1 ? 'Topic' :'Topics'} />
        <Metric className="metric3 metrics-container" metric={loading ? <span>...Loading</span> : consumerAmount} metricText={consumerAmount === 1 ? 'Consumer' : 'Consumers'} />
        <ThroughputChart className="graph1 charts-container" />
        <EventChart className="graph2 charts-container" />
    </div>
  );
};

export default Dashboard;
