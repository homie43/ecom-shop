import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../../components/Helmet/Helmet";
import Services from "../../services/Services";
import ProductsList from "../../UI/ProductsList";
import Clock from "../../UI/Clock";
import products from "../../assets/data/products";

import counterImg from "../../assets/images/counter-timer-img.png";

import heroImg from "../../assets/images/hero-img.png";

import "./home.scss";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = React.useState([]);
  const [bestProducts, setBestProducts] = React.useState([]);
  const [mobileProducts, setMobileProducts] = React.useState([]);
  const [wirelessProducts, setWirelessProducts] = React.useState([]);
  const [popularProducts, setPopularProducts] = React.useState([]);
  //popularProducts

  const year = new Date().getFullYear(); // вернет текущий год

  React.useEffect(() => {
    const filtredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filtredBestProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filtredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filtredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filtredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filtredTrendingProducts);
    setBestProducts(filtredBestProducts);
    setMobileProducts(filtredMobileProducts);
    setWirelessProducts(filtredWirelessProducts);
    setPopularProducts(filtredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            {/* адаптив бутстрэпа */}
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore reiciendis tempora adipisci praesentium quidem
                  suscipit. Adipisci doloremque deleniti doloribus officia.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Hero Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>

            <ProductsList data={bestProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>

            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>

            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
