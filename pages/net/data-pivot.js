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
import PivotTableUI from '../../components/pivot';
import { useRouter } from 'next/router';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AuthCheck from "../../components/auth-check";

import {
  RiBarChart2Fill,
  RiPieChart2Fill,
  RiLineChartLine
} from 'react-icons/ri';

import axios from 'axios';

const Dashboard =  () => {
  const [dataArray, setdataArray] = useState([]);
  const [pivotstatus,setpivotstatus] = useState(false);
  const [receivefilename,setreceivefilename] = useState();
  const [columnNames, setColumnNames] = useState([]); // 동적 컬럼 이름
  const [parsedData,setparsedData] = useState();
  const router = useRouter();
  const receivedData = router.query.data;

  const fetchData = async () => {
    try {
      // const myurl='http://115.68.193.117:8000/net/file-json?filename=';
      const myurl='http://115.68.193.117:8000/net/pivot-data?filename=';
      // 고정
      const receivedData ="output_final";

      const receivedData2 = receivedData.replace('.csv', '');
      
      const fullrul=myurl+receivedData2;


      const response = await axios.get(fullrul);      
 
      // const response = await axios.get('http://115.68.193.117:8000/net/file-json?filename=2206037_A_%282023-09-01%29');
      
      console.log("response.data",response.data);
      const responseData = response.data;


      setreceivefilename(receivedData);

      if (typeof responseData === 'string') {
          // 문자열을 객체로 파싱
          const parsedData = JSON.parse(responseData);
          
          setdataArray(parsedData);

          console.log("parsedData",parsedData);
      } else {
          console.error('Received data is not a string:', responseData);
      }
 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const setpivot = () =>{
    setpivotstatus(true);
    fetchData();

  };
  useEffect(() => {
    console.log("rendering~");
    setpivot();
  },[]);

  const link1  = () => {
    // window.location.href = `./data-dashboard?data=${receivedData}`;
    router.push(`./data-dashboard?data=${receivedData}`);
  };  
  const link2  = () => {
    // window.location.href = `./data-visual?data=${receivedData}`;
    router.push(`./data-visual?data=${receivedData}`);
  };

  const activeStepVal=3;
  const defaultIndex=1;
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
                width: '80%', // Adjust the width as needed
                paddingRight: '20px', // Add some space to the right
            }}
            >
            <StepLayout activeStep={activeStepVal}>
            {/* Content of StepLayout */}
            </StepLayout>
            </div>

          </div>
        </div>
        {/* 탭 */}
        <div>
          <Tabs defaultIndex={defaultIndex}>
            <TabList>
              <Tab onClick={link1}>One</Tab>
              <Tab>Two</Tab>
              <Tab onClick={link2}>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
              </TabPanel>
              <TabPanel>
                {/* 메인: 선택지 , 차트내용 등 */}
                <div id='main_frame'>
                <AuthCheck>
                <p>전달파일: {receivedData}</p>

                  {/* 차트 */}
                  <div id='chart'>

                    {pivotstatus && (
                        <PivotTableUI dataArray={dataArray}/>
                      )} 

                  </div>
                  </AuthCheck>
                {/* 메인: 선택지 , 차트내용 등 */}              
                </div>
              </TabPanel>
              <TabPanel>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
