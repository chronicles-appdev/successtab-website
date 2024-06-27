import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about-container"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <h2>
        About SuccessTAB <div className="marker"></div>
      </h2>
      <p>
        SuccessTAB delivers digital learning, contains volumes of pre-installed
        educational contents and most importantly it is 100% World Class.
        <br />
        Each SuccessTab comes with <strong>12-months warranty</strong>,
        aftersales support, upgrade and assistance when required.
      </p>
    </motion.div>
  );
};

export default About;
