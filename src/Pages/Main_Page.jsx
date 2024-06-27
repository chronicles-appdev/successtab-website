import About from "../Components/About/About";
import Benefits from "../Components/Benefits/Benefits";
import Blog from "../Components/Blog/Blog";
import ContactUs from "../Components/Contact/ContactUs";
import FAQ from "../Components/FAQ/FAQ.JSX";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Navbar/Nav";
import Product_Review from "../Components/Product_Review/Product_Review";
import { AnimatePresence } from "framer-motion";
const Main_Page = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Hero />
      <Features />
      <AnimatePresence mode={"wait"}>
        <About />
      </AnimatePresence>
      <Benefits />
      <Product_Review />
      <Blog />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Main_Page;
