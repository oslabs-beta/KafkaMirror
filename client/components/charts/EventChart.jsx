import React, { Component } from 'react';
import { GiAirplaneArrival } from 'react-icons/gi';
import { io } from 'socket.io-client';
import interval from './chartConfig';
import './Charts.scss';

class EventChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // producing chart.js resources
    let events = 0;
    const socket = io('http://localhost:3030');
    socket.on('log', (data) => {
      data = JSON.parse(data);
      events = data.length;
    });
    const ctx = document.getElementById('myChart2').getContext('2d');
    const liveChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array(100)
          .fill(0)
          .map((x) => 0),
        datasets: [
          {
            lineTension: 0,
            label: 'live chart',
            backgroundColor: '#09dfdf',
            borderColor: '#09dfdf',
            data: Array(100)
              .fill(0)
              .map((x) => 0),
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          }
        },
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
          fontFamily: 'Lato',
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
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
    // adding one point of data
    function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      chart.update();
    }
    // removing one point of data
    function removeData(chart) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
      chart.update();
    }
    // packaging the two functions synchronously in one function
    function chartAnimate(chart, label, data) {
      addData(chart, label, data);
      removeData(chart);
    }
    // recursion function that calls the packaged "chartAnimate" every "interval"
    // the "interval" is meant to be able to be manipulated easily and has a global scope.
    function randomizeCallout() {
      let time = '';
      const d = new Date();
      time += `${d.getHours()} : `;
      time += `${d.getMinutes()} : `;
      time += d.getSeconds();
      +' : ';
      time += d.getMilliseconds();
      const val = events;
      events = 0;
      return chartAnimate(liveChart, time, val);
    }
    setInterval(() => {
      randomizeCallout();
    }, interval);
  }

  // rendering the chaat in div
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
