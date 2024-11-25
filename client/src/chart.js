import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchBTCData, prepareChartData } from './api'; // Your API and data preparation functions
import './App.css';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BTCPriceGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prices = await fetchBTCData();
        const { labels, dataPoints } = prepareChartData(prices);

        setChartData({
          labels,
          datasets: [
            {
              label: 'BTC Price (USD)',
              data: dataPoints,
              borderColor: ' #6154F0',
              borderWidth: 2,
              fill: false,
              tension: 0.5, // Smooth curve
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching BTC data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`, // Format tooltip values
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '20px' }}>BTC Prices</h1>
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default BTCPriceGraph;
