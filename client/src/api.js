import axios from 'axios';

// Fetch BTC data from CoinGecko API
export const fetchBTCData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
      params: {
        vs_currency: 'usd',
        days: 180, // Last 6 months
      },
    });

    console.log("Raw BTC data: ", response.data.prices);
    return response.data.prices; // Array of [timestamp, price]
  } catch (error) {
    console.error('Error fetching BTC data:', error);
    return [];
  }
};

// Prepare data for Chart.js with the last 6 months and month names
export const prepareChartData = (prices) => {
  // Check if prices array has data
  if (prices.length < 1) {
    console.warn("No data to process for chart.");
    return { labels: [], dataPoints: [] };
  }

  // Group data by month (YYYY-MM format)
  const groupedData = prices.reduce((acc, [timestamp, price]) => {
    const date = new Date(timestamp);
    const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format: YYYY-MM

    // Create or update the group for this month
    if (!acc[monthKey]) {
      acc[monthKey] = { total: 0, count: 0, monthName: date.toLocaleString('default', { month: 'short' }) }; // Get month name
    }

    acc[monthKey].total += price;
    acc[monthKey].count += 1;

    return acc;
  }, {});

  // Now, we can calculate the average for each month
  const labels = [];
  const dataPoints = [];

  for (const monthKey in groupedData) {
    if (groupedData.hasOwnProperty(monthKey)) {
      const { total, count, monthName } = groupedData[monthKey];
      const averagePrice = total / count;

      labels.push(monthName); // Use full month name 
      dataPoints.push(averagePrice); // Push average price for the month
    }
  }

  // Sort by month
  const sortedLabels = labels.sort((a, b) => {
    const aDate = new Date(`${a} 1, 2024`); // Temporarily use year to sort
    const bDate = new Date(`${b} 1, 2024`);
    return aDate - bDate;
  });

  // Sort dataPoints based on sortedLabels
  const sortedDataPoints = sortedLabels.map(label => {
    const idx = labels.indexOf(label);
    return dataPoints[idx];
  });

  return {
    labels: sortedLabels, // Month names
    dataPoints: sortedDataPoints, // Monthly average prices
  };
};
