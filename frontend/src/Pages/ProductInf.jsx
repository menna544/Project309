import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./productinfo.css";

function ProductInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const goBack = () => {
    navigate("/product");
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={goBack}>
        <ArrowBackIcon />
      </button>
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
