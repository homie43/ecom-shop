import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../../components/Helmet/Helmet";
import Services from "../../services/Services";

import products from "../../assets/data/products";

import heroImg from "../../assets/images/hero-img.png";

import "./Home.scss";
import ProductsList from "../../UI/ProductsList";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = React.useState([]);
  const [bestProducts, setBestProducts] = React.useState([]);

  const year = new Date().getFullYear(); // вернет текущий год

  React.useEffect(() => {
    const filtredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filtredBestProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setTrendingProducts(filtredTrendingProducts);
    setBestProducts(filtredBestProducts);
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
    </Helmet>
  );
};

export default Home;
