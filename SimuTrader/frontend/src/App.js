import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AdvancedTradingViewChart from "./components/AdvancedTradingViewChart";
import TradeForm from "./components/TradeForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [currentSymbol, setCurrentSymbol] = useState("NASDAQ:AAPL");
  const [currentPrice, setCurrentPrice] = useState(150.0);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSelectSymbol = (symbol) => {
    setCurrentSymbol(symbol);
  };

  return (
    <div className={theme === "dark" ? "theme-dark" : ""}>
      <Router>
        <MyNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className="main-content">
          <Sidebar onSelectSymbol={handleSelectSymbol} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route
                path="/stocks"
                element={
                  <>
                    <AdvancedTradingViewChart
                      theme={theme}
                      setCurrentSymbol={setCurrentSymbol}
                      setCurrentPrice={setCurrentPrice}
                      currentSymbol={currentSymbol}
                    />
                    <TradeForm
                      currentSymbol={currentSymbol}
                      currentPrice={currentPrice}
                      theme={theme}
                    />
                  </>
                }
              />
              <Route path="/portfolio" element={<Portfolio theme={theme} />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
