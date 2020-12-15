import React from 'react';
<<<<<<< HEAD
import MyChart from '../components/charts/MyChart.jsx';
import GridItem2 from '../components/charts/GridItem2';
import GridItem3 from '../components/charts/GridItem3';
// import GridItem4 from '../components/charts/GridItem4';
// import GridItem5 from '../components/charts/GridItem5';
// import GridItem6 from '../components/charts/GridItem6';
import Header from '../components/Header';
import Metric from '../components/Metric';
import './Pages.scss';
=======
import MyChart from '../charts/MyChart.jsx';
>>>>>>> 67ae9dbd8893590ad4fa6dfdd977b4e6e5236439

const Dashboard = () => {
  return (
<<<<<<< HEAD
    <div  className="grid-container dashboardContainer"> 
      <Header className="dashboardHeader" />
      <Metric className="metric1" />
      <Metric className="metric2" />
      <Metric className="metric3" />
      <MyChart className="graph1" />  
      <GridItem2 className="graph2" />
      {/* <GridItem3 />
      <GridItem4 />
      <GridItem5 />
      <GridItem6 /> */}
    </div> 
  )
}
=======
    <div className="dashboard">
      <MyChart />
    </div>
  );
};
>>>>>>> 67ae9dbd8893590ad4fa6dfdd977b4e6e5236439

export default Dashboard;
