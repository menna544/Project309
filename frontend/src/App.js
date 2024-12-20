
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Authentication from "./Pages/Authentication";
import ProductInfo from "./Pages/ProductInf";
import DashHome from "./Pages/dash/Dashome";
import AddItem from "./dashboradadmin/AddiItem";
import ProfileComponent from "./Pages/Profile";
import EditProfile from "./Pages/Edit";
function App() {

  return (
    <Router>

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
                <Route path="/profile" element={<ProfileComponent />} />
                <Route path="/profile/edit" element={<EditProfile />} />
          </Routes>
     
    </Router>
  );
}

export default App;
