import React, { Component } from 'react';
import { io } from 'socket.io-client';
import interval from './chartConfig';
import './Charts.scss';
// const io = require('socket.io-client');

class EventChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let events = 0;
    const socket = io('http://localhost:3030');
    socket.on('log', (data) => {
      data = JSON.parse(data);
      // console.log('data recieved was', data);
      events = data.length;
    });

    const ctx = document.getElementById('myChart2').getContext('2d');
    const liveChart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
      // type: 'line',

      // The data for our dataset
      data: {
        labels: Array(100)
          .fill(0)
          .map((x) => 0),
        datasets: [
          {
            lineTension: 0,
            label: 'live chart',
            // backgroundColor: 'rgba(115, 115, 217, 1)',
            backgroundColor: '#09dfdf',
            // borderColor: 'rgb(255, 99, 132)',
            borderColor: '#09dfdf',
            data: Array(100)
              .fill(0)
              .map((x) => 0),
          },
        ],
      },
      // Configuration options go here
      options: {
        animation: {
          tension: {
            duration: 100,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Events/second',
          fontColor: '#09dfdf',
          fontSize: '18',
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                // callback: function(value, index, values) {
                //   return value + ' events';
                // }
                fontColor: '#09dfdf',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#09dfdf',
              },
            },
          ],
        },
      },
    });

    function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      chart.update();
    }
    //= ===========================================

    //= ===========================================

    //= ===========================================
    function removeData(chart) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
      chart.update();
    }

    function chartAnimate(chart, label, data) {
      addData(chart, label, data);
      //= =====================
      removeData(chart);
      //----------------------
    }

    function randomizeCallout() {
      // setTimeout(()=>{
      //   randomizeCallout()
      // },interval)
      let time = '';
      const d = new Date();
      time += `${d.getHours()} : `;
      time += `${d.getMinutes()} : `;
      time += d.getSeconds();
      +' : ';
      time += d.getMilliseconds();
      const val = events;
      // console.log('events: ', val);
      events = 0;
      return chartAnimate(liveChart, time, val);
    }
    // randomizeCallout()
    setInterval(() => {
      randomizeCallout();
    }, interval);
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="chart">
          <canvas id="myChart2" />
        </div>
      </div>
    );
  }
}

export default EventChart;
