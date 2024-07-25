import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css"; // ייבוא קובץ CSS מותאם אישית

const Dashboard = ({ theme }) => {
  const [balance, setBalance] = useState(1000.0);
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("deposit");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (action === "deposit") {
      setBalance(balance + parseFloat(amount));
    } else if (action === "withdraw") {
      if (amount > balance) {
        alert("Insufficient funds.");
        return;
      }
      setBalance(balance - parseFloat(amount));
    }
    setAmount("");
  };

  return (
    <Container className={`my-4 ${theme === "dark" ? "dark-mode" : ""}`}>
      <Row>
        <Col lg={6} md={8} sm={12} className="mx-auto">
          <Card
            className={`dashboard-card ${theme === "dark" ? "dark-mode" : ""}`}
          >
            <Card.Body>
              <h2 className="text-center">Account Dashboard</h2>
              <p className="text-center balance-amount">
                Balance: ${balance.toFixed(2)}
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="dashboard-input"
                  />
                </Form.Group>
                <Button
                  variant={action === "deposit" ? "success" : "primary"}
                  type="submit"
                  className="w-100 dashboard-btn"
                >
                  {action === "deposit" ? "Deposit" : "Withdraw"}
                </Button>
              </Form>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    variant="success"
                    onClick={() => setAction("deposit")}
                    className={`me-2 dashboard-switch-btn ${
                      action === "deposit" ? "active" : ""
                    }`}
                  >
                    Deposit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => setAction("withdraw")}
                    className={`dashboard-switch-btn ${
                      action === "withdraw" ? "active" : ""
                    }`}
                  >
                    Withdraw
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
