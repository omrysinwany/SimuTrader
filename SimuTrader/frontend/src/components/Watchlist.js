import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, ListGroup } from "react-bootstrap"; // ייבוא הקומפוננטות הנדרשות
import "bootstrap/dist/css/bootstrap.min.css";
import "./Watchlist.css";

const Watchlist = ({ isCollapsed }) => {
  const [watchlist, setWatchlist] = useState([]);
  const widgetRef = useRef(null);

  // פונקציה לטיפול בהודעות מה-Widget
  const handleWidgetMessage = useCallback(
    (event) => {
      try {
        if (event.data && typeof event.data === "string") {
          const message = JSON.parse(event.data);
          if (message.type === "symbol_search" && message.symbol) {
            const symbol = message.symbol;
            if (symbol && !watchlist.includes(symbol)) {
              setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
            }
          }
        }
      } catch (error) {
        console.error("Error processing widget message:", error);
      }
    },
    [watchlist]
  );

  // טעינת ה-Widget של TradingView
  useEffect(() => {
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-search.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "450",
        default_symbol: "NASDAQ:AAPL",
        default_exchange: "NASDAQ",
        symbol_search_autocomplete: true,
        show_symbol_search_input: true,
        show_exchange_filter: true,
        show_hotlist: true,
        show_ideas: true,
        locale: "en",
      });
      widgetRef.current.innerHTML = ""; // נקה קודם
      widgetRef.current.appendChild(script);

      window.addEventListener("message", handleWidgetMessage);
    }

    return () => {
      window.removeEventListener("message", handleWidgetMessage);
    };
  }, [handleWidgetMessage]);

  // פונקציה להסרת פריטים מה- Watchlist
  const handleRemoveSymbol = (symbol) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((item) => item !== symbol)
    );
  };

  return (
    <div className="watchlist">
      <h5>Watchlist</h5>
      {!isCollapsed && (
        <>
          <div ref={widgetRef} className="tradingview-widget-container"></div>
          <ListGroup>
            {watchlist.map((symbol) => (
              <ListGroup.Item key={symbol}>
                <div className="watchlist-item">
                  <span>{symbol}</span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveSymbol(symbol)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export default Watchlist;
