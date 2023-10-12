// api.js

import axios from 'axios';

export async function fetchChartData(filename, Q_code, top_n, graph_type) {
  try {
    const response = await axios.get(`/net/simple-graph?filename=${filename}&Q_code=${Q_code}&top_n=${top_n}&graph_type=${graph_type}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching chart data: ${error.message}`);
  }
}
