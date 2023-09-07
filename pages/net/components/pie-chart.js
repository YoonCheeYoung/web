import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData, width, height }) => {
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
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
};

export default PieChart;
