// frontend/src/components/TransactionForm.js

import React, { useState } from "react";
import axios from "axios";

const TransactionForm = ({ stock, onSuccess }) => {
  const [transactionType, setTransactionType] = useState("BUY");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const pricePerStock = 100; // דמו: מחיר מניה קבוע, תוכל לשדרגו לקבלת מחיר אמיתי
    axios
      .post("http://localhost:8000/api/transactions/", {
        stock: stock.id,
        transaction_type: transactionType,
        amount: amount,
        price_per_stock: pricePerStock,
      })
      .then((response) => {
        onSuccess();
      })
      .catch((error) => {
        console.error("There was an error creating the transaction!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {stock.symbol} - {stock.name}
      </h2>
      <label>
        Transaction Type:
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
