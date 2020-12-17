import React from 'react';

import './Metric.scss';

const Metric = (props) => {
  return (
    <div className={props.className + ' metricContainer'}>
      <h1 className="metric">{props.metric}</h1>
      <p className="metricText">{props.metricText}</p>
    </div>
  );
};

export default Metric;
