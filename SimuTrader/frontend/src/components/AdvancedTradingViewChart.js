import React, { useEffect } from "react";

const AdvancedTradingViewChart = ({
  setCurrentSymbol,
  setCurrentPrice,
  theme,
}) => {
  useEffect(() => {
    const widget = new window.TradingView.widget({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: theme === "dark" ? "dark" : "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_advanced_chart",
      studies: ["MAExp@tv-basicstudies", "RSI@tv-basicstudies"],
      withdateranges: true,
      hide_side_toolbar: false,
      hide_top_toolbar: false,
      save_image: false,
      studies_overrides: {},
      overrides: {},
      onChartSymbolChange: (symbolInfo) => {
        setCurrentSymbol(symbolInfo.ticker);
        fetch(
          `https://api.tradingview.com/v1/quotes?symbols=${symbolInfo.ticker}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data[symbolInfo.ticker]) {
              setCurrentPrice(data[symbolInfo.ticker].price);
            }
          });
      },
    });

    return () => widget.remove();
  }, [setCurrentSymbol, setCurrentPrice, theme]);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_advanced_chart" style={{ height: "600px" }}></div>
    </div>
  );
};

export default AdvancedTradingViewChart;
