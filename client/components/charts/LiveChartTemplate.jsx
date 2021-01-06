//* this is intended to be used as a template for new chart components.

import React, { Component } from 'react';

const io = require('socket.io-client');

class GridItem3 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // producing chart.js resources
    const ctx = document.getElementById('myChart3').getContext('2d');
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
            backgroundColor: 'rgba(115, 115, 217, 1)',
            borderColor: 'rgb(255, 99, 132)',
            data: Array(100)
              .fill(0)
              .map((x) => 0),
          },
        ],
      },
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
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
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
      const random = Math.floor(Math.random() * 300);
      console.log(random);
      let time = '';
      const d = new Date();
      time += `${d.getHours()} : `;
      time += `${d.getMinutes()} : `;
      time += d.getSeconds();
      +' : ';
      time += d.getMilliseconds();
      chartAnimate(liveChart, time, random);
    }
    setInterval(() => {
      randomizeCallout();
    }, 50);
  }

  // rendering the chaat in div
  render() {
    return (
      <div>
        <div className="moch-chart3">
          <canvas id="myChart3" />
        </div>
      </div>
    );
  }
}
export default GridItem3;
