import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartExample = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Bar Chart Example',
        data: [12, 19, 3, 5, 2], // Values corresponding to the labels
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <div>
        <Bar
          data={data}
          options={{
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChartExample;
