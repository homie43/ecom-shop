import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../SCSS/checkout.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const formArray = [
    { type: "text", placeholder: "Enter Your Name" },
    { type: "email", placeholder: "Enter Your Email" },
    { type: "number", placeholder: "Phone Number" },
    { type: "text", placeholder: "Fullt Address" },
  ];

  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <Helmet title="Chekout">
      <CommonSection title="Chekout" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form>
                {formArray.map((item, i) => (
                  <FormGroup key={i} className="form__group">
                    <input type={item.type} placeholder={item.placeholder} />
                  </FormGroup>
                ))}
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQuantity}</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Please an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
