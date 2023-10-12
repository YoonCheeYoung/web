import React, { useEffect, useState } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import StepLayout from "../../components/stepper";
import MenuLayout from "../../components/drawer";
import axios from 'axios';
import PieChart from '../../components/pie-chart';
import BarChart from '../../components/bar-chart';
import BBBTN from '../../components/btn';
import { useRouter } from 'next/router';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AuthCheck from "../../components/auth-check";

const Dashboard =  () => {
    const [chartData,setChartData]=useState(null);
    const [ pietotal ,setpietotal] = useState(null);
    const router = useRouter();
    const receivedData = router.query.data;
    const [poschart, setposchart] =useState();
    const [negchart, setnegchart] =useState();


    useEffect(() => {
        console.log("rendering~");
        handleChartClick()
        handleChartClick2()
    },[]);

    const handleChartClick = async () => {

        const chartDataUrl = `http://115.68.193.117:8000/net/simple-graph?filename=output_final&Q_code=Q11_1&top_n=5&graph_type=pie`;
    
        try {
          const response = await axios.get(chartDataUrl);
          const chartDataJson = response.data.chartdata; 
          setChartData(chartDataJson);
          setpietotal(response.data.total);
    
        } catch (error) {
          console.error('Error fetching chart data:', error);
          setChartData(null);
        }
    
    };
    

    const handleChartClick2 = async () => {

        // const chartDataUrlPos = `http://115.68.193.117:8000/net/simple-graph?filename=output_final&graph_type=bar-pos`;
        const chartDataUrlPos = 'http://115.68.193.117:8000/net/simple-graph?filename=output_final&graph_type=sample&emotion=긍정';
        const chartDataUrlNeg = 'http://115.68.193.117:8000/net/simple-graph?filename=output_final&graph_type=sample&emotion=부정';
        try {
            const responsePos = await axios.get(chartDataUrlPos);

            const posdata={
                labels : responsePos.data.labels,
                datasets: [
                    {
                        type : 'line',
                        label :'line',
                        // borderColor: 'rgba(75, 192, 192, 1)',
                        borderColor:'#00000',
                        // backgroundColor:'#00000',
                        borderWidth: 0.5,
                        fill: true,
                        data: responsePos.data.datasets[0].data,
                        datalabels:{
                            display:false,
                        }
                    },
                    {
                        type : 'bar',
                        label :'bar',
                        borderColor: 'white',
                        borderWidth: 2,
                        backgroundColor: 'rgba(121,173,210, 0.7)',
                        data: responsePos.data.datasets[1].data,
                    }
                ]
            }
            setposchart(posdata);
            console.log("poschart",poschart);


            const responseNeg = await axios.get(chartDataUrlNeg);

            const negdata={
                labels : responseNeg.data.labels,
                datasets: [
                    {
                        type : 'line',
                        label :'line',
                        borderColor:'#00000',
                        borderWidth: 0.5,
                        fill: false,
                        data: responseNeg.data.datasets[0].data,
                        datalabels:{
                            display:false,
                        }
                    },
                    {
                        type : 'bar',
                        label :'bar',
                        borderColor: 'white',
                        borderWidth: 2,
                        backgroundColor:  "#F78181" ,
                        data: responseNeg.data.datasets[1].data,
                    }
                ]
            }
            setnegchart(negdata);
            console.log("negchart",negchart);

        } catch (error) {
            // console.error('Error fetching chart data:', error);
            // setChartData2(null);
        }    
    };

    const renderChart = () => {
        // 데이터가 유효한 경우에만 차트 렌더링
        if (chartData && chartData.datasets && chartData.datasets.length > 0) {

            return <PieChart data={chartData} height={400} title="제목임다" total={pietotal}/>;

        } else {
        }
    };
    const renderChart2 = () => {
        // 데이터가 유효한 경우에만 차트 렌더링
        // if (chartData2 && chartData2.datasets && chartData2.datasets.length > 0) {
            if (poschart && poschart.datasets && poschart.datasets.length > 0) {

            return <BarChart data={poschart} height={340} title={'긍정'} />;

        } else {
        }
    };
    const renderChart3 = () => {
        // 데이터가 유효한 경우에만 차트 렌더링
        if (negchart && negchart.datasets && negchart.datasets.length > 0) {

            return <BarChart data={negchart} height={340} title={'부정'} />;

        } else {
        }
    };

    const link1  = () => {
        // window.location.href = `./data-pivot?data=${receivedData}`;
        router.push(`./data-pivot?data=${receivedData}`);
    };
    const link2  = () => {
        // window.location.href = `./data-visual?data=${receivedData}`;
        router.push(`./data-visual?data=${receivedData}`);
      };
      
    const activeStepVal=3;
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

            {/*유사 탭?  */}
            <div>
                <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab onClick={link1}>Two</Tab>
                    <Tab onClick={link2}>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        {/* 메인: 선택지 , 차트내용 등 */}
                        <div id='main_frame'>
                        <AuthCheck>
                            
                            {/* 차트 */}
                            <div id='chart_multi'>
                                <div id='chart_multi_pie'>
                                    
                                    <div className="selected-chart multi_style" id='chart_06'>
                                        
                                        {renderChart()}
                                        <div id='pie_total'>n = {pietotal}</div>
                                    
                                    </div>
                                    <p>전달파일: {receivedData}</p>
                                    <BBBTN/>
                                    
                                </div>

                                <div id='chart_multi_bar'>
                                    
                                    <div id='chart_multi_bar_1' className="selected-chart multi_style multi_style_bar">{renderChart2()}</div>

                                    <div id='chart_multi_bar_2' className="selected-chart multi_style multi_style_bar">{renderChart3()}</div>

                                </div>
                
                            </div>
                            </AuthCheck>
                        {/* 메인: 선택지 , 차트내용 등 */}              
                        </div>
                    </TabPanel>
                    <TabPanel>


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