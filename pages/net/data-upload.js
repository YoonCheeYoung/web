import {Button,} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import StepLayout from "./stepper";
import AuthCheck from "../components/auth-check";
import MenuLayout from "../components/layout";
import Link from 'next/link';
const IndexPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // Replace 'YOUR_UPLOAD_API_URL' with your actual API endpoint
      const response = await axios.post('http://115.68.193.117:8000/items/upload', formData, Credential = true);
      
      // Handle response, if needed
      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
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
  const activeStepVal = 0;
  return (
    <div>
        <AuthCheck>
        <div style={{ display: 'flex' }}>
    
            <MenuLayout>
            </MenuLayout>
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
                <p>Selected File: {selectedFile.name}</p>
                <Button onClick={handleUpload}>Upload</Button>
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
        
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <Button>
          <Link href="./dashboard">Go to Link Page
          </Link>
          </Button>
        </div>
        </AuthCheck>
    </div>
  );
};

export default IndexPage;
