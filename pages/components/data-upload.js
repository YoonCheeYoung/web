import {Button,} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import StepLayout from "./stepper";
import AuthCheck from "../net/components/auth-check";
// import MenuLayout from "../components/layout";
import MenuLayout from "./drawer";
import { useRouter } from 'next/router';


import Link from 'next/link';
import { Spinner,Stack } from '@chakra-ui/react'



const IndexPage = () => {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState(null);

  // 로딩로딩
  const [isLoading, setIsLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleDrop = async () => {
  //   if (!selectedFile) {
  //     return;
  //   }
  // }


  const handleDrop = async (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('file', selectedFile);
  
      // 서버로 파일 업로드 요청 보내기
      const response = await axios.post('http://115.68.193.117:8000/net/upload', formData);
  
      console.log('File uploaded:', response.data);
  
      // 파일 업로드가 완료되면 선택한 파일의 이름을 이용하여 다른 페이지로 이동
      const uploadFileName = selectedFile.name;
     
      setIsLoading(false);

      // 페이지 이동 주석
      // window.location.href = `./data-check?data=${uploadFileName}`;

      router.push(`./data-check?data=${uploadFileName}`);
      // history.pushState(null, '', `./data-check?data=${uploadFileName}`);

    }
    
    catch (error) {
      console.error('Error uploading file:', error);
      setIsLoading(false);
    }
  };

    // Implement your file upload logic using axios or other library
    // try {
    //   const formData = new FormData();
    //   formData.append('file', selectedFile);
    //   const response = await axios.post('/upload', formData);
    //   console.log('File uploaded:', response.data);
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    // }
//   };
  const activeStepVal = 1;
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

        {/* 메인: 선택지 , 차트내용 등 */}
        <div id='main_frame'>
        <AuthCheck>

      {isLoading ? (

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              speed:'0.65s',
              height: "100vh", // Adjust the height as needed
            }}
          >
            <p>분류 모델 진행중</p>
            <Spinner size='xl' />
          </div>
        </div>
      ) : (
        // API 응답을 받은 후 보여줄 화면
        <div>
        <div style={{ display: 'flex' }}>
    

        <div
          style={{
              width: '80%', // Adjust the width as needed
              paddingRight: '20px', // Add some space to the right
          }}>
        </div>
        </div>
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{
                border: '2px dashed #cccccc',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '300px',
                marginTop: '20px' // Align items in the center vertically
            }}
        >
        {selectedFile ? (
        <div>
            {/* 선택파일이름 */}
            <p>Selected File: {selectedFile.name}</p>
            
            {/* 1,2,3,4,5 파라미터 매개변수로 추가 */}
            <Button id='model_btn' onClick={handleUpload}>

              1번모델
              <br/>다음페이지로 이동만 동작

            </Button>

            <Button id='model_btn' >
              2번모델
            </Button>

            <Button id='model_btn' >3번모델</Button>
            <Button id='model_btn' >4번모델</Button>
            <Button id='model_btn' >5번모델</Button>
        </div>
        ) : (
        <p>드래그 하거나 파일을 선택해 주세요</p>
        )}
    <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
    />

    <label htmlFor="fileInput">
        <Button as="span" style={{marginTop:"150px"}}>파일 찾기</Button>
    </label>
    </div>
        </div>
      )}  


        </AuthCheck>

        {/* 메인: 선택지 , 차트내용 등 */}              
        </div>
      </div>
    </div>
  );

};

export default IndexPage;
