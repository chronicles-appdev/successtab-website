import { Link } from "react-router-dom";
import "./Footer.css";
import ig from "/ig.png";
import linkedin from "/linkedin.png";
import twitter from "/twitter.png";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    setDone(true);
    setEmail("");

    const timer = setTimeout(() => {
      setDone(false);
    }, 10000);
    return () => clearTimeout(timer);
  };
  return (
    <section className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left">
          <a href="/">
            <img src="/footer_logo.png" alt="logo" />
          </a>
          <p>
            SuccessTAB is a robust digital learning device that offers the best
            educational applications all in one space at an affordable price.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h4>Company</h4>
            <a href="/Product">Products</a>
            <a href="#features">Features</a>
            <a href="#review">Review</a>
            <a href="#blog">Blog</a>
            <a href="#FAQ">FAQ</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p>
              <span>
                <img src="/location.png" />
              </span>
              Lagos, Nigeria
            </p>

            <p>
              <span>
                <img src="/mail.png" />
              </span>
              solutions@chroniclesoft.com
            </p>

            <p>
              <span>
                <img src="/phone.png" />
              </span>
              +234 907346939
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Link to="https://instagram.com/chroniclessoftware?igshid=MzMyNGUyNmU2YQ==">
                <img src={ig} width={20} />
              </Link>
              <Link to="https://www.linkedin.com/company/chronicles-software/">
                <img src={linkedin} width={30} />
              </Link>
              <Link to="https://instagram.com/chroniclessoftware?igshid=MzMyNGUyNmU2YQ==">
                <img src={twitter} width={30} />
              </Link>
            </div>
          </div>
          <div className="footer-newsletter">
            <h1>Subscribe to our Newsletter</h1>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
            />
            {done && <p>Subscribed</p>}
            <button onClick={handleClick}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Chronicles Software Development Company.</p>
        <p>All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
