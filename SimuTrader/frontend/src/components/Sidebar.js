import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Watchlist from "./Watchlist";
import "./Sidebar.css";

const Sidebar = ({ onSelectSymbol }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isWatchlistCollapsed, setIsWatchlistCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleWatchlist = () => {
    setIsWatchlistCollapsed(!isWatchlistCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <Button onClick={toggleSidebar} className="collapse-button">
        {isCollapsed ? "Expand" : "Collapse"}
      </Button>
      <Button onClick={toggleWatchlist} className="collapse-button">
        {isWatchlistCollapsed ? "Show Watchlist" : "Hide Watchlist"}
      </Button>
      <Watchlist
        onSelectSymbol={onSelectSymbol}
        isCollapsed={isWatchlistCollapsed}
      />
    </div>
  );
};

export default Sidebar;
