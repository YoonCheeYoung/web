import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChartExample = ({data, width, height }) => {
  // Sample data for the bar chart

  return (
    <div>

      <h2>Bar Chart Example</h2>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Bar  data={data} />
      </div>
    </div>
  );
};

export default BarChartExample;
