import React, { useEffect, useState } from 'react';
import BarChart from '../../components/bar-chart';
import LineChart from '../../components/line-chart';
import PieChart from '../../components/pie-chart';
import StackedBar from '../../components/stacked-bar';

import { Button, Icon } from '@chakra-ui/react';
import DynamicSelect from '../../components/select';
import StepLayout from "../../components/stepper";
import MenuLayout from "../../components/drawer";
import DrawerExample from '../../components/drawer';
import { useRouter } from 'next/router';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AuthCheck from "../../components/auth-check";

import {
  RiBarChart2Fill,
  RiPieChart2Fill,
  RiLineChartLine
} from 'react-icons/ri';

import axios from 'axios';

const Dashboard = () => {
  const router = useRouter();
  const receivedData = router.query.data;

const [chartData_bar, setchartData_bar] = useState([]);
const [chartData_line, setchartData_line] = useState([]);
const [chartData_pie, setchartData_pie] = useState([]);
const [chartData_stacked, setchartData_stacked] = useState([]);

let [selectedChart, setSelectedChart] = useState("bar");
const [selectedOptions, setSelectedOptions] = useState([]);
const [selectedQuestions, setSelectedQuestions] = useState([]);
const [isSurveyOptionSelected, setIsSurveyOptionSelected] = useState(false);
const [isQuestionOptionSelected, setIsQuestionSelected] = useState(false);
const [surveyOptions, setSurveyOptions] = useState([]);
const [questionOptions, setQuestionOptions] = useState([]);
const [selectedSurveyOption, setSelectedSurveyOption] = useState(null);
// const [top_n , settop_n] = useState(null);
// const [url,seturl] = useState(null);
const[filename , setfilename] = useState(null);
// const [top_n , settop_n] = useState(null);



  const handleChartClick = async () => {
    
    // const params = `filename=${selectedOptions}&Q_code=${selectedQuestions}&top_n=5&graph_type=bar`;
    const chartDataUrl_bar = `http://115.68.193.117:8000/net/simple-graph?filename=${selectedOptions}&Q_code=${selectedQuestions}&top_n=5&graph_type=bar`;
    const response_bar = await axios.get(chartDataUrl_bar);
    const chartDataJson_bar = response_bar.data; 
    setchartData_bar(chartDataJson_bar);

    const chartDataUrl_line = `http://115.68.193.117:8000/net/simple-graph?filename=${selectedOptions}&Q_code=${selectedQuestions}&top_n=5&graph_type=line`;
    const response_line = await axios.get(chartDataUrl_line);
    const chartDataJson_line = response_line.data; 
    setchartData_line(chartDataJson_line);

    const chartDataUrl_pie = `http://115.68.193.117:8000/net/simple-graph?filename=${selectedOptions}&Q_code=${selectedQuestions}&top_n=5&graph_type=pie`;
    const response_pie = await axios.get(chartDataUrl_pie);
    const chartDataJson_pie = response_pie.data.chartdata; 
    setchartData_pie(chartDataJson_pie);

    const chartDataUrl_stacked = `http://115.68.193.117:8000/net/simple-graph?filename=${selectedOptions}&Q_code=${selectedQuestions}&top_n=5&graph_type=stacked`;
    const response_stacked = await axios.get(chartDataUrl_stacked);
    const chartDataJson_stacked = response_stacked.data.chartdata; 
    setchartData_stacked(chartDataJson_stacked);
  };
  const handleSelectChange = (selected) => {
    // Ensure selectedOptions is an array
    const newSelectedOptions = Array.isArray(selected) ? selected : [selected];
    setSelectedOptions(newSelectedOptions);
    setIsSurveyOptionSelected(newSelectedOptions.length > 0);
  
    // Check if a survey option is selected
    if (newSelectedOptions.length > 0) {
      console.log('Selected Option:', newSelectedOptions[0]); 
      // Fetch data from the API based on the selected option(s)
      const selectedOption = newSelectedOptions[0]; // Assuming you're interested in the first selected option

      setfilename(selectedOption.value);
      console.log("filename : " , filename);

      setSelectedSurveyOption(selectedOption.value);
      const questionOptionUrl = `http://115.68.193.117:8000/net/question-list?filename=${selectedOption}`;
  
      axios
        .get(questionOptionUrl)
        .then((response) => {
          const questionOptions = response.data.map((option) => ({
            value: option.Q,
            label: option.Q_text,
          }));
          setQuestionOptions(questionOptions);
        })
        .catch((error) => {
          console.error('Error fetching question options:', error);
        });
    }
  };
  const handleQuestionChange = (selected) => {
    // Ensure selectedOptions is an array
    const newSelectedOptions = Array.isArray(selected) ? selected : [selected];
    setSelectedQuestions(newSelectedOptions);
    setIsQuestionSelected(newSelectedOptions.length > 0);

    console.log("aaaSelectedQuestions",newSelectedOptions);
  }; 

  // API: Fetch survey options
  useEffect(() => {
    const surveyOptionsUrl = 'http://115.68.193.117:8000/net/file_list';
    ///home/aibd/webtest/app
    axios
      .get(surveyOptionsUrl)
      .then((response) => {
        const surveyOptions = response.data.map((option) => ({
          value: option.value,
          label: option.label,
        }));
        setSurveyOptions(surveyOptions);
      })
      .catch((error) => {
        console.error('Error fetching survey options:', error);
      });
  }, []);

     
  // Render the selected chart
  const renderChart_bar = () => {
    if (chartData_bar && chartData_bar.datasets && chartData_bar.datasets.length > 0) {
      return <BarChart data={chartData_bar} width={400} height={400}/>;
    } else {
    }
  };
  const renderChart_line = () => {
    if (chartData_line && chartData_line.datasets && chartData_line.datasets.length > 0) {
      return <LineChart data={chartData_line} width={400} height={400}/>;
    } else {
    }
  };
  const renderChart_pie = () => {
    if (chartData_pie && chartData_pie.datasets && chartData_pie.datasets.length > 0) {
      return <PieChart data={chartData_pie} width={400} height={400}/>;
    } else {
    }
  };
  const renderChart_stacked = () => {
    if (chartData_stacked && chartData_stacked.datasets && chartData_stacked.datasets.length > 0) {
      return <StackedBar data={chartData_stacked} width={400} height={400} />;
    } else {
    }
  };


  const link1  = () => {
    // window.location.href = `./data-dashboard?data=${receivedData}`;
    router.push(`./data-dashboard?data=${receivedData}`);
  };
  const link2  = () => {
    // window.location.href = `./data-pivot?data=${receivedData}`;
    router.push(`./data-pivot?data=${receivedData}`);
  };

  const activeStepVal=3;
  const defaultIndex=2;
  return (
    //1번 프레임 
    <div id='outter_frame1'>

      {/* 2번 프레임 */}
      <div id='outter_frame2'>

        {/* 바로가기 , 타이틀 */}
        <div id='title_frame'>

          {/*바로가기  */}
          <div id='page_move'>
            <MenuLayout />
          </div>

          {/* 타이틀 내용 */}
          <div id='title'>

            <div
            style={{
                width: '80%', 
                paddingRight: '20px', 
            }}
            >
            <StepLayout activeStep={activeStepVal}>
            </StepLayout>
            </div>

          </div>
        </div>

        <div>
          <Tabs defaultIndex={defaultIndex}>
          <TabList>
              <Tab onClick={link1}>One</Tab>
              <Tab onClick={link2}>Two</Tab>
              <Tab>Three</Tab>
          </TabList>

          <TabPanels>
              <TabPanel>
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel>
                {/* 메인: 선택지 , 차트내용 등 */}
                <div id='main_frame'>
                <AuthCheck>
                  <p>전달파일 :{receivedData}</p>
                  <div id='options'>
                    <div id='option1'>
                      <h2>
                        설문 선택 
                      </h2>

                      <DynamicSelect
                        placeholder_text="설문지를 선택해주세요"
                        options={surveyOptions}
                        onChange={handleSelectChange}
                      />

                      {/* <p className='selected_option'>
                        Selected Option: {selectedOptions}
                      </p> */}
                      <p className='selected_option'>
                        Selected Option: {selectedOptions.join(', ')} {/* 배열을 문자열로 변경 */}
                      </p>

                    </div>

                      {isSurveyOptionSelected && (
                        <div>
                          <div id='option2'>
                            <h2>질문 선택 </h2>
                            <DynamicSelect
                              placeholder_text="질문을 선택하세요"
                              options={questionOptions}
                              onChange={handleQuestionChange}
                            />
                            {/* <p className='selected_option'>
                              Selected Option: {selectedQuestions}
                            </p> */}
                            <p className='selected_option'>
                              {/* Selected Option: {selectedQuestions.join(', ')}  */}
                              Selected Option: {selectedSurveyOption}
                              
                            </p>
                          </div>

                          {isQuestionOptionSelected && (
                            <div>
                              <div className="chart-container">
                                
                                <div className="chart-icons">

                                  <Button onClick={() => handleChartClick()}>
                                    <RiPieChart2Fill />
                                  </Button>
                                  
                                </div>
                                
                                
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                  </div>

                  {/* 접기 */}
                  <div>

                  </div>            

                  {/* 차트 */}
                  <div id='chart'>
                    <div id='chart_board' className="selected-chart">{renderChart_bar()}</div>
                    <div id='chart_board' className="selected-chart">{renderChart_line()}</div>
                    <div id='chart_board' className="selected-chart">{renderChart_pie()}</div>
                    <div id='chart_board' className="selected-chart">{renderChart_stacked()}</div>
                  </div>
                  </AuthCheck>
                {/* 메인: 선택지 , 차트내용 등 */}              
                </div>



              </TabPanel>
          </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
