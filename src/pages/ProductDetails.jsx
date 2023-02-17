import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductList from "../components/UI/ProductsList";

import "../SCSS/product-details.scss";

const ProductDetails = () => {
  const [tab, setTab] = React.useState("desc");
  const [rating, setRating] = React.useState(null);

  const reviewUser = React.useRef("");
  const reviewMsg = React.useRef("");

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHendler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    // eslint-disable-next-line no-unused-vars
    const reviewObj = {
      userName: reviewUserName,
      rating,
      text: reviewUserMsg,
    };

    toast.success("Review submitted");
  };

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added sucessfully");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-line"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <span className="product__price">${price}</span>
                <p className="mt-4">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="tab__review mt-4">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, idx) => (
                        <li key={idx} className="mb-4">
                          <h6>Вася Пупкин</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <form action="" onSubmit={submitHendler}>
                        <h5>Leave you expirience</h5>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-3 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => setRating(1)}
                          >
                            <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => setRating(2)}
                          >
                            <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => setRating(3)}
                          >
                            <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => setRating(4)}
                          >
                            <i class="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => setRating(5)}
                          >
                            <i class="ri-star-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message"
                            required
                          />
                        </div>

                        <button type="submit" className="buy__btn mt-1">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
