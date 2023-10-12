import React from 'react';
import PivotTableUI from './components/pivot';
import axios from 'axios';





const Dashboard = () => {
    const [receivefilename,setreceivefilename] = useState();
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
            
  
            console.log("parsedData",parsedData);
  
            if (typeof parsedData === 'object' && !Array.isArray(parsedData)) {
  
                const dataArray = Object.keys(parsedData).map(key => parsedData[key]);
  
                console.log("Object.keys(parsedData)",Object.keys(parsedData));
                console.log("Object.keys(parsedData).map",Object.keys(parsedData).map(key => parsedData[key]));
                console.log("dataArray",dataArray);
                setdataArray(dataArray);
  
                // const columnNames = dataArray.length > 0 ? Object.keys(dataArray[0]) : [];
                // setColumnNames(columnNames);
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
  return (
    <div>
      {Object.entries(jsonData).map(([key, value]) => (
        <div key={key}>
          <code>
            const {key} : {JSON.stringify(value)}
          </code>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;