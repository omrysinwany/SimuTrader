// Home.js

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // ייבוא קובץ CSS מותאם אישית

const Home = ({ theme }) => {
  return (
    <Container className={`my-4 ${theme === "dark" ? "dark-mode" : ""}`}>
      <Row className="mb-4">
        <Col lg={12} className="text-center">
          <h1 className="display-4">Welcome to Stock Trading App</h1>
          <p className="lead">
            Your one-stop solution for managing and analyzing your stock
            investments.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="home-card">
            <Card.Body>
              <Card.Title>Latest Stock Trends</Card.Title>
              <Card.Text>
                Stay updated with the latest trends in the stock market. View
                real-time charts and market data to make informed decisions.
              </Card.Text>
              <Button variant="primary" href="/stocks">
                View Stocks
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="home-card">
            <Card.Body>
              <Card.Title>Your Portfolio</Card.Title>
              <Card.Text>
                Manage and track your investments. See your portfolio
                performance and make adjustments as needed.
              </Card.Text>
              <Button variant="success" href="/portfolio">
                View Portfolio
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="home-card">
            <Card.Body>
              <Card.Title>Get Started</Card.Title>
              <Card.Text>
                New to trading? Start by registering and getting familiar with
                our platform.
              </Card.Text>
              <Button variant="info" href="/register">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
