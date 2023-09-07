import { useState } from 'react';
import BarChart from './components/bar-chart';
import LineChart from './components/line-chart';
import PieChart from './components/pie-chart';
import { Button, Icon } from '@chakra-ui/react';
import MenuLayout from '../components/layout';
import { AddIcon, PieChartIcon, BarChartIcon } from '@chakra-ui/icons';
import {RiBarChart2Fill, RiPieChart2Fill,RiLineChartLine} from 'react-icons/ri'
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dataset 2',
      data: [2, 3, 3, 4, 5],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const lineChartData= {
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
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const Dashboard = () => {

  const [selectedChart, setSelectedChart] = useState(null);

  const renderChart = () => {
    switch (selectedChart) {
      case 'bar':
        return <BarChart data={chartData} width={400} height={400} />;
      case 'line':
        return <LineChart data={lineChartData} width={400} height={400} />;
      case 'pie':
        return <PieChart data={pieData} width={400} height={400} />;
      default:
        return <div>차트를 선택해 주세요</div>;
    }
  };
  const handleBarChartClick = () => {
    console.log('Bar Chart clicked');
    setSelectedChart('bar');
  };
  return (
    <div>
    <MenuLayout />
    <div className="chart-buttons">
      <Button onClick={handleBarChartClick}>
        <RiBarChart2Fill /> 
      </Button>
      <Button onClick={() => setSelectedChart('line')}>
        <RiLineChartLine/> 
      </Button>
      <Button onClick={() => setSelectedChart('pie')}>
        <RiPieChart2Fill /> 
      </Button>
    </div>
    <div className="selected-chart">{renderChart()}</div>
  </div>
);

};

export default Dashboard;


