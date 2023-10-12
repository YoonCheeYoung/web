import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

import { useRouter } from 'next/router';
import MenuLayout from "./drawer";
import StepLayout from "./stepper";
import AuthCheck from "../../components/auth-check";
import TableContainer from "../../components/custom_table";

const Dashboard = () => {
    const [data, setData] = useState([]); // 데이터를 저장할 상태
    const [csvstatus, setCsvStatus] = useState(false);
    const [dataArray, setdataArray] = useState([]);
    const [columnNames, setColumnNames] = useState([]); // 동적 컬럼 이름
    const router = useRouter();

    const receivedData = router.query.data;
    const [receivefilename, setreceivefilename] = useState(null);



    // API에서 데이터 가져오는 함수
    const fetchData = async () => {
        try {
            const myurl='http://115.68.193.117:8000/net/file-json?filename=';

            // 고정
            const receivedData ="output_final";

            const receivedData2 = receivedData.replace('.csv', '');
            
            const fullrul=myurl+receivedData2;

            console.log("fullrul",fullrul);

            const response = await axios.get(fullrul);

            
            console.log("response",response);

            // const response = await axios.get('http://115.68.193.117:8000/net/file-json?filename=2206037_A_%282023-09-01%29');
            
            const responseData = response.data;
            setreceivefilename(receivedData);

            if (typeof responseData === 'string') {
                // 문자열을 객체로 파싱
                const parsedData = JSON.parse(responseData);

                if (typeof parsedData === 'object' && !Array.isArray(parsedData)) {
                    // 객체를 배열로 변환
                    const dataArray = Object.keys(parsedData).map(key => parsedData[key]);

                    setdataArray(dataArray);

                    // 컬럼 이름을 추출하고 설정
                    const columnNames = dataArray.length > 0 ? Object.keys(dataArray[0]) : [];
                    setColumnNames(columnNames);

                    setCsvStatus(true);
                } else {
                    console.error('Received data is not an object:', parsedData);
                }
            } else {
                console.error('Received data is not a string:', responseData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const showCsv = () => {
        setCsvStatus(true);
        fetchData(); // 버튼 클릭 시 데이터를 가져오도록 호출
    };

    const gotonext = async () => {
        router.push(`./data-dashboard?data=${receivedData}`);
        // window.location.href = `./data-dashboard?data=${receivedData}`;
    };

    const activeStepVal = 2;
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
    
                    <div style={{
                            width: '80%', 
                            paddingRight: '20px', 
                        }}>
                        <StepLayout activeStep={activeStepVal}>
                        </StepLayout>
                    </div>
    
                </div>
            </div>
    
                {/* 메인: 선택지 , 차트내용 등 */}
                <div id='main_frame'>
                <AuthCheck>
                    <div>

                        <div id='rec'>
                            <p>Data received: {receivedData}</p>
                        </div>
                        <div id='csvbtn'>
                            <Button id='csvtb' onClick={showCsv}>
                                Show CSV Data
                            </Button>
            
                            <Button id='next' onClick={gotonext}>
                                다음으로!
                            </Button>
                        </div>
            
                        <div id='csvview'>
                            {csvstatus && (
                                <TableContainer data={dataArray} columnNames={columnNames} />
                            )}
                        </div>
                    </div>   
                </AuthCheck>     
                {/* 메인: 선택지 , 차트내용 등 */}              
                </div>
            </div>
        </div>
    );

};

export default Dashboard;
