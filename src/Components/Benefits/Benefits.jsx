import "./Benefits.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <motion.div
      className="benefits-wrapper"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <div className="benefits-heading">
        <h2>
          Perks and Benefits <div className="marker benefits-marker"></div>
        </h2>

        <p>What you stand to gain when you choose to use SuccessTAB</p>
      </div>

      <div className="benefits-container">
        <div className="benefits-left-Tablet">
          <img src="./Tablet.png" />
        </div>
        <div className="benefits-left">
          <img src="./Benefit_img.png" />
        </div>
        <div className="benefits-right">
          <ul>
            <li>21st Century Education refined</li>
            <li>Over 100 e-Textbooks</li>
            <li style={{ width: "352px" }}>35 Subject Based eLesson Notes</li>
            <li>Customized for the School</li>
            <li style={{ width: "357px" }}>EduGames Pre-installed</li>
            <li style={{ width: "357px" }}>15 years Question Bank for WAEC</li>
            <li style={{ width: "448px" }}>
              10 Years Question for NECO
              <br /> (Junior SCE) in 20 subjects combined
            </li>
            <Link to="/product">
              <button className="benefits-button">
                Explore <img src="/Send.png" />
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Benefits;
