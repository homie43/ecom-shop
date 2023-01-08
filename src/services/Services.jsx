import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./services.scss";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="3" md="4">
            <div className="services__item">
              <span>
                <i class="ri-truck-line"></i>
              </span>
              <div>
                <h3>Free Shiping</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
