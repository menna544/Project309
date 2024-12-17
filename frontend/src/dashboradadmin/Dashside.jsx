import "./dashside.css";
import { FaUser, FaBox, FaShoppingBag, FaHome, FaShoppingCart } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem active">
              <FaHome className="sidebarIcon" />
              Home
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem">
              <FaUser className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarlistItem">
              <FaBox className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarlistItem">
              <FaShoppingCart className="sidebarIcon" />
              Orders
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem">
              <FaShoppingBag className="sidebarIcon" />
              Add Product
            </li>
            <li className="sidebarlistItem">
              <FaShoppingBag className="sidebarIcon" />
              Setting
            </li>
          </ul>
          <div className="log-out">
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
