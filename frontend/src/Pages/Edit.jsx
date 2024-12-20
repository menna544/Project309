import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./profile.css"; 
import imagePlaceholder from "../images/573a46c7818f8cca76e394ac5af72542.jpg";
import { FaArrowLeft} from "react-icons/fa"; 

const EditProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    address: '',
    profileImage: imagePlaceholder, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData((prevData) => ({
          ...prevData,
          profileImage: reader.result, 
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("User Data Saved:", userData);

  };

  return (
    <div className="profille">
      <div className="profile-header">
        <FaArrowLeft
          className="back-icon"
          onClick={() => navigate("/profile")}
        />
          <img
            className="profile-img-box"
            src={userData.profileImage}
            alt="Profile"
          />
         
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="image-upload-input"
          />
      </div>
      <div className="profile-input-box">
        <div className="profile-input">
          <p>Name:</p>
          <input
            type="text"
            placeholder="Please enter Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="profile-input">
          <p>Phone:</p>
          <input
            type="text"
            placeholder="Please enter Phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="profile-input">
          <p>Address:</p>
          <input
            type="text"
            placeholder="Please enter Address"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="profile-btns">
        <button className="Profilebutton2" onClick={handleSave}>
          Save
        </button>
        <Link to="/profile">
          <button className="Profilebutton2">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
