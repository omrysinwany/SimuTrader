// frontend/src/components/StockChart.js

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StockChart = ({ data }) => {
  const options = {
    title: {
      text: "Stock Prices",
    },
    xAxis: {
      categories: data.map((point) => point.date),
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
    series: [
      {
        name: "Stock Price",
        data: data.map((point) => [point.date, point.price]),
        type: "line",
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StockChart;
