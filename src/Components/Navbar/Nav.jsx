/* eslint-disable react/prop-types */
import "./Nav.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    // Check if the location hash is set and scroll to the corresponding element
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [hamburger, setHamburger] = useState(false);

  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
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
    </>
  );
};

export default Nav;
