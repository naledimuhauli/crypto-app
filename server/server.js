const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const axios = require('axios'); // Add axios import
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Database connected successfully');
});

// Use the routes
app.use('/auth', authRoutes(db));

// Fetch BTC data
const fetchBTCData = async () => {
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

const prepareChartData = (prices) => {
    const labels = prices.map(([timestamp]) => new Date(timestamp).toLocaleDateString());
    const dataPoints = prices.map(([, price]) => price);

    return {
      labels, // Dates
      dataPoints, // Prices
    };
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
