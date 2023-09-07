import { useState } from 'react';
import BarChart from './components/bar-chart';
import LineChart from './components/line-chart';
import PieChart from './components/pie-chart';

import { Button } from '@chakra-ui/react';


const chartData = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  datasets: [
    {
      label: 'Chart Example',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ['Rent', 'Food', 'Transportation', 'Entertainment', 'Utilities'],
  datasets: [
    {
      data: [1000, 300, 200, 150, 250],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
};

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState(null);

  const renderChart = () => {
    switch (selectedChart) {
      case 'bar':
        return <BarChart chartdata={chartData} width={400} height={400} />;
      case 'line':
        return <LineChart data={lineChartData} width={400} height={400} />;
      case 'pie':
        return <PieChart data={pieData} width={400} height={400} />;
      default:
        return <div><LineChart/>;</div>;
    }
  };
  const handleBarChartClick = () => {
    console.log('Bar Chart clicked');
    setSelectedChart('bar');
  };
  return (
    <div>
      <div className="chart-buttons">
        <Button onClick={handleBarChartClick}>Bar Chart</Button>
        <Button onClick={() => setSelectedChart('line')}>Line Chart</Button>
        <Button onClick={() => setSelectedChart('pie')}>Pie Chart</Button>
      </div>
      <div className="selected-chart">{renderChart()}</div>
    </div>
  );
};

export default Dashboard;
