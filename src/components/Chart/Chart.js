import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  // const totalMaximum = Math.max(...dataPointValues);

  const totalMaximum = dataPointValues.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return previousValue + currentValue;
    },
    0
  );

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
