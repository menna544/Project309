// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Authentication from "./Pages/Authentication";
import ProductInfo from "./Pages/ProductInf";
import DashHome from "./Pages/dash/Dashome";
import AddItem from "./dashboradadmin/AddiItem";

function App() {

  return (
    <Router>
      <div className="dashboardContainer">
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dash" element={<DashHome />} />
            <Route path="/product" element={<Products />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route
              path="/addProduct"
              element={<AddItem  />}
            />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
