import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import { removeItem } from "../../redux/slices/cartSlice";

import "./cart.scss";

const Cart = () => {
  const cartTick = ["Image", "Title", "Price", "Qty", "Delete"];
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Cart is empty</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      {cartTick.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <View item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            {cartItems.length > 0 && (
              <Col lg="3">
                <div>
                  <h6 className="d-flex align-items-center justify-content-between">
                    Subtotal{" "}
                    <span className="fs-4 fw-bold">${totalAmount}</span>
                  </h6>

                  <div>
                    <button className="buy__btn w-100">
                      <Link to="/checkout">Checkout</Link>
                    </button>
                    <button className="buy__btn w-100 mt-3">
                      <Link to="/shop">Continue Shopping</Link>
                    </button>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const View = ({ item }) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.span whileHover={{ scale: 1.6 }} onClick={removeProduct}>
          <i class="ri-delete-bin-line"></i>
        </motion.span>
      </td>
    </tr>
  );
};

export default Cart;
