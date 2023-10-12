import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// const lineChartData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       label: 'Sales Data',
//       data: [100, 120, 150, 180, 200, 220], // Sales data for each month
//       fill: false, // Whether to fill the area under the line
//       borderColor: 'rgba(75, 192, 192, 1)', // Line color
//       borderWidth: 2, // Line width
//       pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
//       pointRadius: 5, // Point radius
//     },
//   ],
// };
const LineChart = ({ data, width, height }) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        beginAtZero: true,
      }],
      yAxes: [{
        beginAtZero: true,
      }],
    },
    // Customize other chart options here
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <Line data={data}/>
      </div>
    </div>
  );
};

export default LineChart;
