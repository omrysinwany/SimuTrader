// Portfolio.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard"; // ייבוא קומפוננטת Dashboard
import "./Portfolio.css"; // ייבוא קובץ CSS מותאם אישית

const Portfolio = ({ theme }) => {
  return (
    <Container className={`my-4 ${theme === "dark" ? "dark-mode" : ""}`}>
      <Row>
        <Col lg={12} className="mx-auto">
          <h2 className="text-center mb-4">My Portfolio</h2>
          {/* תוכל להוסיף כאן קומפוננטות נוספות כמו רשימת השקעות, גרפים, ועוד */}
          <Dashboard theme={theme} />
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
