'use client'
import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', selectedFile);
  
  //     try {
  //       const response = axios.post('127.0.0.1:27017', formData);
  
  //       if (response.status === 200) {
  //         // Handle successful response
  //       } else {
  //         // Handle error response
  //       }
  //     } catch (error) {
  //       // Handle Axios error
  //     }
  //   }
  // };
  

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: '2px dashed #cccccc',
          borderRadius: '4px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        {selectedFile ? (
          <div>
            <p>Selected File: {selectedFile.name}</p>
            <button onClick={handleUpload}>Upload</button>
          </div>
        ) : (
          <p>Drag and drop a file here, or click to select a file.</p>
        )}
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <button>Browse</button>
      </label>
    </div>
  );
};

export default FileUpload;
