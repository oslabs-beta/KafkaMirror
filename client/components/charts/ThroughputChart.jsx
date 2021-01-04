import React, { Component } from 'react';
import { io } from 'socket.io-client';
import interval from './chartConfig';
import './Charts.scss';
// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));

class Throughput extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let bytes = 0;
    const socket = io('http://localhost:3030');
    socket.on('log', (data) => {
      // bytes += JSON.parse(data).requestSize;
      data = JSON.parse(data);
      bytes += data.reduce((acc, curr) => acc + curr.requestSize, 0);
    });

    const xAxisLabel = 0;

    const ctx = document.getElementById('myChart').getContext('2d');
    const liveChart = new Chart(ctx, {
      // The type of chart we want to create
      // type: 'bar',
      type: 'line',

      // The data for our dataset
      data: {
        labels: Array(100)
          .fill(0)
          .map((x) => 0),
        datasets: [
          {
            lineTension: 0,
            label: 'live chart',
            backgroundColor: '#09dfdf1c',
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
        title: {
          display: true,
          text: 'Throughput (KB/second)',
          fontColor: '#09dfdf',
          fontSize: '18',
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                callback(value, index, values) {
                  return `${value} KB`;
                },
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
      const copy = data;
      addData(chart, label, data);
      //= =====================
      removeData(chart);
      //----------------------
    }

    function randomizeCallout() {
      // let xAxisLabel2 = xAxisLabel;
      // xAxisLabel++;
      // setTimeout(()=>{
      //   randomizeCallout()
      // },interval)
      // console.log('\n\nbytes: ',bytes)
      // console.log('bytes after cleaned: ',bytes)
      let time = '';
      const d = new Date();
      time += `${d.getHours()} : `;
      time += `${d.getMinutes()} : `;
      time += d.getSeconds(); // + ' : ';
      // time += d.getMilliseconds()
      const val = bytes / 1000;
      // console.log('bytes: ', val);
      bytes = 0;
      return chartAnimate(liveChart, time, val);
      // return chartAnimate(liveChart, xAxisLabel2, val);
    }
    // randomizeCallout();
    setInterval(() => {
      randomizeCallout();
    }, interval);
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="chart">
          <canvas id="myChart" />
        </div>
      </div>
    );
  }
}

export default Throughput;
