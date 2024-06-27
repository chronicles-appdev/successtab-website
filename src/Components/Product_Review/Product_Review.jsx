import Testimonial from "../Testimonial/Testimonial";
import { motion } from "framer-motion";
import "./Product_Review.css";
const Product_Review = () => {
  return (
    <motion.div
      className="review-wrapper"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <div className="review-heading" id="review">
        <h2>
          Product Review <div className="review-marker marker"></div>
        </h2>

        <p>Check out what our customers are saying about us</p>
      </div>
      <div className="review-video">
        <Testimonial />
      </div>
    </motion.div>
  );
};

export default Product_Review;
