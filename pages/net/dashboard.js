import { useState } from 'react';
import BarChart from './components/bar-chart';
import LineChart from './components/line-chart';
import PieChart from './components/pie-chart';
import { Button, Icon } from '@chakra-ui/react';
import MenuLayout from '../components/layout';
import DynamicSelect from './components/select';
import {RiBarChart2Fill, RiPieChart2Fill,RiLineChartLine} from 'react-icons/ri'


// 질문 선택하는 dropdown 
// const [options, setOptions] = useState([]);
// const [selectedOption, setSelectedOption] = useState("");

const surveynOption = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];

const questionOption = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];

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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChartClick = (chartType) => {
    setSelectedChart(chartType);
  };

  const handleSelectChange = (selected) => {
    // Ensure selectedOptions is an array
    const newSelectedOptions = Array.isArray(selected) ? selected : [selected];
    setSelectedOptions(newSelectedOptions);
  };
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
    <div>
    <h1> 시각화 페이지</h1>

    <h2>설문 선택 </h2>
      <DynamicSelect
        placeholder_text="설문지를 선택해주세요"
        options={surveynOption}
        onChange={handleSelectChange}
      />
      <Button colorScheme="blue">Your Button</Button> {/* Add your button here */}
      {/* You can use the selectedOption in your API request or wherever needed */}
      <p>Selected Option: {selectedOptions}</p>
    </div>

    <div>
      <h2>질문 선택 </h2>
      <DynamicSelect
        placeholder_text="질문을 선택하세요"
        options={questionOption}
        onChange={handleSelectChange}
      />
      {/* You can use the selectedOption in your API request or wherever needed */}
      <p>Selected Option: {selectedOptions}</p>
    </div>
    <div className="chart-container">
      <div className="chart-icons">
        <Button onClick={handleBarChartClick}>
          <RiBarChart2Fill />
        </Button>
        <Button onClick={() => setSelectedChart('line')}>
          <RiLineChartLine />
        </Button>
        <Button onClick={() => setSelectedChart('pie')}>
          <RiPieChart2Fill />
        </Button>
      </div>
      <div className="selected-chart">{renderChart()}</div>
    </div>
  </div>
);
};
export default Dashboard;


