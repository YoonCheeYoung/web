import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



const StackedBar = ({data, width, height }) => {
    // Sample data for the bar chart
  
    return (
      <div>
  
        <h2>Stacked Bar Example</h2>
        <div style={{ width: `${width}px`, height: `${height}px` }}>
        <Bar options = {options} data={data} />
        </div>
      </div>
    );
  };

  export default StackedBar;