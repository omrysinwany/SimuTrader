// frontend/src/components/StockList.js

import React, { useState, useEffect } from "react";
import { fetchStocks } from "../api";

const StockList = ({ onSelectStock }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks()
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the stock list!", error);
      });
  }, []);

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id} onClick={() => onSelectStock(stock)}>
            {stock.symbol} - {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
