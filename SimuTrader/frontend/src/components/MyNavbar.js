import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNavbar.css"; // ייבוא קובץ ה-CSS של רכיב ה-Navbar

const MyNavbar = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark";

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">MyStockTrader</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stocks">Stocks</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="/trade">Trade</NavDropdown.Item>
              <NavDropdown.Item href="/reports">Reports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="theme-toggle-container">
            <input
              type="checkbox"
              className="theme-toggle-checkbox"
              id="theme-toggle-checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <label
              className="theme-toggle-label"
              htmlFor="theme-toggle-checkbox"
            >
              <span className="theme-toggle-switch">
                {isDarkMode ? "O" : "I"}
              </span>
            </label>
            <span className="theme-toggle-text">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
