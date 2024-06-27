import "./Features.css";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      id="features"
      className="features-shapes"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 2,
        delay: 1.5,
        stiffness: 260,
      }}
      viewport={{ once: true }}
    >
      <div className="features-shape1">
        <img src="/Library.png" />
        <h4>Digital Library</h4>
        <p>
          Over 20 subject based e-textbooks & 100 standard electronic lessons in
          ebook format.
        </p>
      </div>

      <div className="features-shape2">
        <img src="/Online_Classroom.png" />
        <h4>Online classroom</h4>
        <p>
          This feature ensures a rich collaborative learning experience within
          and outside the classroom
        </p>
      </div>

      <div className="features-shape3">
        <img src="/Parental_control.png" />
        <h4>Parental Control</h4>
        <p>
          This feature ensures that you can control what your child is watching
          at every point in time.
        </p>
      </div>
    </motion.div>
  );
};

export default Features;
