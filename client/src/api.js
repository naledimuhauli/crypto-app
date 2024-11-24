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
    return response.data.prices; // Array of [timestamp, price]
  } catch (error) {
    console.error('Error fetching BTC data:', error);
    return [];
  }
};

// Prepare data for Chart.js
export const prepareChartData = (prices) => {
  const labels = prices.map(([timestamp]) => new Date(timestamp).toLocaleDateString());
  const dataPoints = prices.map(([, price]) => price);

  return {
    labels, // Dates
    dataPoints, // Prices
  };
};
