import Features from "./Components/Features/Features";
import Main_Page from "./Pages/Main_Page";
import Product from "./Pages/Product";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Main_Page />} />
          <Route path="/product" element={<Product />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
