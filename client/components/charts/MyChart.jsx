import React, { Component } from 'react';
import { io } from 'socket.io-client';
import interval from './chartConfig'
// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));


class MyChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let bytes =0
    const socket= io('http://localhost:3030')
    socket.on('log', (data)=>{
      // bytes+=data
      bytes+=JSON.parse(data).requestSize
    })

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
      return
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
      return
    }

    function chartAnimate(chart, label, data) {
      let copy=data
      addData(chart, label, data);
      //======================
      removeData(chart);
      //----------------------
      return
    }

    function randomizeCallout() {
      // setTimeout(()=>{
      //   randomizeCallout()
      // },interval)
      // console.log('\n\nbytes: ',bytes)
      // console.log('bytes after cleaned: ',bytes)
      let time = ''
      let d = new Date();
      time += d.getHours() + ' : ';
      time += d.getMinutes() + ' : ';
      time += d.getSeconds();// + ' : ';
      //time += d.getMilliseconds()
      let val=bytes
      console.log('bytes: ',val)
      bytes=0
      return chartAnimate(liveChart, time, val)
    }
    // randomizeCallout();
    setInterval(() => {
      randomizeCallout()
    }, interval);
  }
  render() {
    return (
    <div className={this.props.className}>
      <div className="moch-chart" >
        <canvas id="myChart"></canvas>
      </div>
    </div>
    )
  }
  ;
}

export default MyChart;








