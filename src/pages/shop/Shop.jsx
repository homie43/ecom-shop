import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import products from "../../assets/data/products";
import ProductsList from "../../components/UI/ProductsList";

import "./shop.scss";

const Shop = () => {
  const [productsData, setProductsData] = React.useState(products);

  const handleFilter = (e) => {
    // if (e.target.value === "sofa") {
    //   const filtredProducts = products.filter(
    //     (item) => item.category === "sofa"
    //   );

    //   setProductsData(filtredProducts);
    // }

    // if (e.target.value === "mobile") {
    //   const filtredProducts = products.filter(
    //     (item) => item.category === "mobile"
    //   );

    //   setProductsData(filtredProducts);
    // }

    // if (e.target.value === "chair") {
    //   const filtredProducts = products.filter(
    //     (item) => item.category === "chair"
    //   );

    //   setProductsData(filtredProducts);
    // }

    // if (e.target.value === "watch") {
    //   const filtredProducts = products.filter(
    //     (item) => item.category === "watch"
    //   );

    //   setProductsData(filtredProducts);
    // }

    // if (e.target.value === "wireless") {
    //   const filtredProducts = products.filter(
    //     (item) => item.category === "wireless"
    //   );

    //   setProductsData(filtredProducts);
    // }

    // отрефакторил безобразие выше
    const filtredProducts = products.filter((item) =>
      item.category.includes(e.target.value)
    );
    setProductsData(filtredProducts);
  };

  const heandleSearch = (e) => {
    const searchProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setProductsData(searchProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="wireless">Wireless</option>
                  <option value="watch">Watch</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort by</option>
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={heandleSearch}
                />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">Products not found</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
