import React, { useState } from 'react';
import Dashsidebar from "../../dashboradadmin/Dashside";
import "./dashhome.css";
import imag from "../../images/573a46c7818f8cca76e394ac5af72542.jpg";
import imag2 from "../../images/11.png";
import imag3 from "../../images/22.png";
import imag4 from "../../images/33.png";
import imag5 from "../../images/44.png";
import imag6 from '../../images/97497155cd8e8c763cf7413a9a989f68.jpg';
import imag7 from '../../images/images.png';
import imag8 from '../../images/b59b6ea4ed2df7cdcc1b49b3ec7d6f46.jpg';
import imag9 from '../../images/f74120852f7fac5ba052a6ad61eaa186.jpg';

function DashHome() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Menna Maged',
    email: 'menna@example.com',
    phone: '123-456-7890',
  });

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen); 
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Profile Updated:', profileData);
    setIsProfileOpen(false); 
  };

  return (
    <div className="DashHome">
      <Dashsidebar />
      <div className="dashContent">
        <div className="header">
          <h1>Welcome to MOMO CoffeShop</h1>
          <div className="profile" onClick={handleProfileClick}>
            <img src={imag} alt="Profile" className="profileImage" />
            <div>
              <p className="adminName">{profileData.name}</p>
            </div>
          </div>
        </div>

        {isProfileOpen && (
          <div className="profilePage">
            <h2>Update Profile</h2>
            <form className="profileForm">
              <div className="profileItem">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="profileItem">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="profileItem">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handleSave} className="saveButton">
                Save
              </button>
            </form>
          </div>
        )}

        <div className="stats">
          <div className="statCard">
            <h2>Total Orders</h2>
            <p>21,375</p>
            <small>-2.33%</small>
          </div>
          <div className="statCard">
            <h2>New Customers</h2>
            <p>1,012</p>
            <small>+32.40%</small>
          </div>
          <div className="statCard">
            <h2>Total Sales</h2>
            <p>$24,254</p>
            <small>+25%</small>
          </div>
        </div>

        <div className="analytics">
          <div className="trendingCoffee">
            <h3>Trending Coffee</h3>
            <ul className="coffeeList">
              <li>
                <img src={imag2} alt="Cappuccino" />
                Cappuccino - $85.00 (240)
              </li>
              <li>
                <img src={imag3} alt="Latte" />
                Latte - $70.50 (220)
              </li>
              <li>
                <img src={imag4} alt="Frappuccino" />
                Frappuccino - $82.50 (200)
              </li>
              <li>
                <img src={imag5} alt="Mocha" />
                Mocha - $40.50 (100)
              </li>
            </ul>
          </div>
          <div className="buyFromCoffee">
            <h3>We Buy From This Coffee</h3>
            <ul className="coffeeVendors">
              <li>
                <img src={imag6} alt="Vendor 1" />
                Arabica Coffee Beans
              </li>
              <li>
                <img src={imag7} alt="Vendor 2" />
                Abu Auf
              </li>
              <li>
                <img src={imag8} alt="Vendor 3" />
                Columbian Dark Roast
              </li>
              <li>
                <img src={imag9} alt="Vendor 4" />
                Peet’s Coffee
              </li>
            </ul>
          </div>
        </div>

        <div className="recentOrders">
          <h3>Recent Orders</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Date & Time</th>
                <th>Table Number</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cappuccino</td>
                <td>27 Oct 2023, 1:05 PM</td>
                <td>2B</td>
                <td>$200</td>
                <td>Cash</td>
                <td>...</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Americano</td>
                <td>28 Oct 2023, 10:25 PM</td>
                <td>8B</td>
                <td>$80</td>
                <td>Card</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
