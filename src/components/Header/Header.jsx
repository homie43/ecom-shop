import React from "react";
import { NavLink } from "react-router-dom";
// первый раз работаю с react bootstrap
// импортирую контейнер и строку
import { Container, Row } from "reactstrap";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import "./Header.css";

const Header = () => {
  const nav__links = [
    { path: "home", display: "Home" },
    { path: "shop", display: "Shop" },
    { path: "cart", display: "Cart" },
  ];

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>Multimarket</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="favorite__icon">
                <i class="ri-heart-line"></i>
              </span>

              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
              </span>

              <span>
                <img src={userIcon} alt="user" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
