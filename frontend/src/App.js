import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Authentication from "./Pages/Authentication";
import ProductInfo from "./Pages/ProductInf";
import DashHome from "./Pages/dash/Dashome";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<DashHome />} />
          <Route path="/product" element={<Products />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
