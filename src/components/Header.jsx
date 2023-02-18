import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

import logo from "../assets/images/eco-logo.png";
import userIcon from "../assets/images/user-icon.png";

import useAuth from "../hooks/useAuth";

import "../SCSS/header.scss";

import { toast } from "react-toastify";

const Header = () => {
  const { currentUser } = useAuth();
  // реализация sticky header-а в реакте
  const headerRef = React.useRef(null);
  const stickyHeaderFunc = () => {
    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  React.useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  // реализация гамбургер меню в реакте
  const menuRef = React.useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const nav__links = [
    { path: "home", display: "Home" },
    { path: "shop", display: "Shop" },
    { path: "cart", display: "Cart" },
  ];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
    console.log("navigate");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Выход");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const profileActionRef = React.useRef(null);
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>Multimarket</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
              {/* <span className="favorite__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span> */}

              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user"
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span role="button" onClick={logout}>
                      Logout
                    </span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
