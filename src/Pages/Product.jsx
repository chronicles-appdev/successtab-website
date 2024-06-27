/* eslint-disable react/prop-types */
import "./Product.css";
import { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Modal_Page from "../Components/Modal/Modal_Page";
import ProductsData from "./product.json";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Product = ({ productRef }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (productRef) {
      navbarRef.current.style.color = "blue";
    } else {
      navbarRef.current.style.color = "black";
    }
    console.log(productRef);
  }, [productRef]);

  const [hamburger, setHamburger] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([{}]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="p">
      <section className="nav-wrapper">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="nav-right">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                whiteSpace: "nowrap",
                alignItems: "center",
                width: "100%",
              }}
            >
              <NavLink to="/product" className="links" ref={navbarRef}>
                Products
              </NavLink>
              <NavLink to="/product" className="links" ref={navbarRef}>
                Buy Now
              </NavLink>
              <a href="/" className="links">
                Blog
              </a>
              <a href="/" className="links">
                Review
              </a>
              <a href="/" className="links">
                FAQ
              </a>
              <a href="/" className="links">
                Contact Us
              </a>
            </div>

            <div className="nav-button">
              <NavLink to="https://forms.gle/fB233TNhRFdiqHgBA">
                <button className="nav-btn">Sign up for Schools?</button>
              </NavLink>
            </div>
          </div>

          <button className="hamburger" onClick={hamburgerToggle}>
            <img src="./hamburger.png" alt="" />
          </button>

          <div
            className="hamburger-menu"
            style={{ display: hamburger ? "flex" : "none" }}
          >
            <NavLink to="/product" className="links" ref={navbarRef}>
              Products
            </NavLink>
            <NavLink to="/product" className="links" ref={navbarRef}>
              Buy Now
            </NavLink>
            <AnchorLink href="#blog" className="links">
              Blog
            </AnchorLink>
            <AnchorLink href="#review" hash={null} className="links">
              Review
            </AnchorLink>
            <AnchorLink href="#FAQ" className="links">
              FAQ
            </AnchorLink>
            <AnchorLink href="#contact" className="links">
              Contact Us
            </AnchorLink>
          </div>
        </div>
      </section>

      <div>
        <Modal_Page
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          selectedProduct={selectedProduct}
        />

        <div className="product-wrapper">
          <div className="product-shape">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.5,
                stiffness: 260,
              }}
            >
              Invest in a Brighter{" "}
              <span style={{ color: "#007BFF" }}> FUTURE</span>
            </motion.h1>
            <motion.button
              className="product-button"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.5,
                stiffness: 260,
              }}
            >
              Explore <img src="/Send.png" />
            </motion.button>
          </div>

          <motion.div
            className="product-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.5,
              stiffness: 260,
            }}
          >
            <img src="/Tablet.png" alt="hero-image" />
          </motion.div>
        </div>

        <div className="product-container">
          <h2>
            Our products <div className="product-marker marker"></div>
          </h2>
          <p>
            Our product SuccessTAB serves our customers at two different levels,
            both primary and secondary and they are categorized into four major
            categories as seen below.
          </p>
        </div>

        <div className="product-cards">
          {ProductsData.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src="/star.png" />
              <button onClick={() => handleProductClick(product)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
