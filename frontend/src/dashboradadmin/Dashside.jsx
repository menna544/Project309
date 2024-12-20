import React from "react";
import { FaUser, FaBox, FaShoppingBag, FaHome, FaShoppingCart, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./dashside.css";
import imag from "../images/573a46c7818f8cca76e394ac5af72542.jpg";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar1">
 
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="profilee">
            <img src={imag} alt="admin" className="profileImage" />
            <div>
              <p className="adminName">Menna Maged</p>
            </div>
          </div>
          <ul className="sidebarList">
            <li className="sidebarlistItem" onClick={() => navigate("/dash")}>
              <FaHome className="sidebarIcon" />
              Home
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem" onClick={() => navigate("/users")}>
              <FaUser className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarlistItem" onClick={() => navigate("/products")}>
              <FaBox className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarlistItem" onClick={() => navigate("/orders")}>
              <FaShoppingCart className="sidebarIcon" />
              Orders
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem" onClick={() => navigate("/addProduct")}>
              <FaShoppingBag className="sidebarIcon" />
              Add Product
            </li>
            <li className="sidebarlistItem" onClick={() => navigate("/settings")}>
              <FaCog className="sidebarIcon" />
              Settings
            </li>
          </ul>
          <div className="log-out">
            <button className="logoutButton" onClick={() => navigate("/logout")}>
              Log Out
            </button>
          </div>
        </div>
      </div>

  );
}

export default Sidebar;
