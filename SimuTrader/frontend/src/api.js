// frontend/src/api.js
import axios from "axios";

const API_URL = "http://localhost:8000/api";
const ALPHA_VANTAGE_API_KEY = "CZ8X40Q1W69GQGKB";
const ALPHA_VANTAGE_URL = `https://www.alphavantage.co/query`;

export const fetchStocks = () => axios.get(`${API_URL}/stocks/`);

export const fetchStockPrice = (symbol) => {
  return axios.get(ALPHA_VANTAGE_URL, {
    params: {
      function: "TIME_SERIES_INTRADAY",
      symbol: symbol,
      interval: "5min",
      apikey: ALPHA_VANTAGE_API_KEY,
    },
  });
};
