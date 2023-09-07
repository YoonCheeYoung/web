import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, width, height }) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Set this to false to specify width and height
    // Customize other chart options here
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <Pie
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default PieChart;
