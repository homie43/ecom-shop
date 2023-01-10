import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../../components/Helmet/Helmet";
import Services from "../../services/Services";

import heroImg from "../../assets/images/hero-img.png";

import "./Home.scss";
import ProductsList from "../../UI/ProductsList";

const Home = () => {
  const year = new Date().getFullYear(); // вернет текущий год
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
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
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
            <ProductsList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
