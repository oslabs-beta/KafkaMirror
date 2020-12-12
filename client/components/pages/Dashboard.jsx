import React from 'react';
import { Component } from 'react';


const io = require('socket.io-client');
const ioClient = io.connect('http://localhost:3030');
ioClient.on('log', (msg) => console.log(msg));

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const liveChart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: Array(100).fill(0).map(x => 0),
        datasets: [{
          lineTension: 0,
          label: 'live chart',
          backgroundColor: 'rgba(115, 115, 217, 1)',
          borderColor: 'rgb(255, 99, 132)',
          data: Array(100).fill(0).map(x => 0),
        }]
      },
      // Configuration options go here
      options: {
        animation: {
          tension: {
            duration: 100,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              min: 0
            }
          }],
        }
      }
    });

    function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      chart.update();
    }
    //============================================

    //============================================

    //============================================
    function removeData(chart) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
      chart.update();
    }

    function chartAnimate(chart, label, data) {
      addData(chart, label, data);
      //======================
      removeData(chart);
      //----------------------
    }

    function randomizeCallout() {
      let random = Math.floor(Math.random() * 300)
      console.log(random)
      let time = ''
      let d = new Date();
      time += d.getHours() + ' : ';
      time += d.getMinutes() + ' : ';
      time += d.getSeconds(); + ' : ';
      time += d.getMilliseconds()
      chartAnimate(liveChart, time, random)
    }

    setInterval(() => {
      randomizeCallout()
    }, 50);
  }
  render() {
    return (<div>
      <div className="chart" >
        <canvas id="myChart"></canvas>
      </div>
    </div>
    )
  }
  ;
}

export default Dashboard;








