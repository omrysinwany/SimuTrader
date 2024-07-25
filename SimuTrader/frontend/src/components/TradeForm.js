import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "./TradeForm.css"; // ייבוא קובץ CSS מותאם אישית
import "./Dashboard.css"; // ייבוא קובץ CSS מותאם אישית

const TradeForm = ({ currentSymbol, currentPrice, theme }) => {
  const [action, setAction] = useState("buy");
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(quantity * currentPrice);
  }, [quantity, currentPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Action: ${action}\nSymbol: ${currentSymbol}\nQuantity: ${quantity}\nTotal Price: $${totalPrice.toFixed(
        2
      )}`
    );
  };

  return (
    <Container className={`my-4 ${theme === "dark" ? "dark-mode" : ""}`}>
      {/* השימוש בתנאי שמוסיף קלאס dark-mode אם התצוגה כהה */}
      <Row>
        <Col lg={6} md={8} sm={12} className="mx-auto">
          <Card
            className={`trade-form-card ${
              action === "buy" ? "buy-bg" : "sell-bg"
            } ${theme === "dark" ? "dark-mode" : ""}`}
          >
            <Card.Body>
              <h2 className="text-center">
                {action === "buy" ? "Buy Stock" : "Sell Stock"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCurrentSymbol">
                  <Form.Label>Symbol</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentSymbol}
                    readOnly
                    className="trade-form-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <div className="slider-container">
                    <span className="slider-label">0</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className={`trade-form-slider ${
                        action === "buy" ? "buy-slider" : "sell-slider"
                      } ${theme === "dark" ? "dark-mode" : ""}`}
                    />
                    <span className="slider-label">{quantity}</span>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTotalPrice">
                  <Form.Label>Total Price</Form.Label>
                  <Form.Control
                    type="text"
                    value={`$${totalPrice.toFixed(2)}`}
                    readOnly
                    className="trade-form-input"
                  />
                </Form.Group>
                <Button
                  variant={action === "buy" ? "success" : "danger"}
                  type="submit"
                  className="w-100 trade-form-btn"
                >
                  {action === "buy" ? "Buy" : "Sell"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            onClick={() => setAction("buy")}
            className={`me-2 trade-form-switch-btn ${
              action === "buy" ? "active" : ""
            }`}
          >
            Buy
          </Button>
          <Button
            variant="danger"
            onClick={() => setAction("sell")}
            className={`trade-form-switch-btn ${
              action === "sell" ? "active" : ""
            }`}
          >
            Sell
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TradeForm;
