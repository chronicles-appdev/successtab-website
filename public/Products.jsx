import Nav from "../components/Nav/Nav";
import Styles from "./Products.module.css";
import Send from "../assets/Send.png";
import Tablet from "../assets/Tablet.png";
import star from "../assets/star.png";
import ProductsData from "./product.json";
import Modal_Page from "./Modal_Page";
import { useState } from "react";

const Products = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Modal_Page modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Nav />

      <div className={Styles.shape}>
        <div className={Styles.text}>
          <h1>
            Invest in a Brighter
            <span style={{ color: "#007BFF" }}> Future</span>
          </h1>
          <button className={Styles.button}>
            Explore <img src={Send} />
          </button>
        </div>
      </div>

      <img src={Tablet} className={Styles.img} />

      <div className={Styles.container}>
        <h2 className={Styles.heading}>
          Our products <div className={Styles.marker}></div>
        </h2>
        <p className={Styles.p}>
          Our product SuccessTAB serves our customers at two different levels,
          both primary and secondary and they are categorized into four major
          categories as seen below.
        </p>
      </div>

      <div className={Styles.cards}>
        {ProductsData.products.map((product) => (
          <div className={Styles.card} key={product.id}>
            <img src={product.image} className={Styles.cardImg} />
            <h3 className={Styles.cardHeading}>{product.name}</h3>
            <p className={Styles.cardP}>{product.price}</p>
            <img src={star} />
            <button onClick={openModal} className={Styles.card_btn}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
