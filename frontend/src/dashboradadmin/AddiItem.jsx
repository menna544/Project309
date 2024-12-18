import React, { useState } from 'react';
import "./add.css";
import Sidebar from '../dashboradadmin/Dashside';

function NewProduct() {
  const [productData, setProductData] = useState({
    name: '',
    type: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    setProductData({
      name: '',
      price: '',
      description: '',
      size: '',
    });
  };

  return (
    <div className="container3">
      <Sidebar />

      <div className='DashHome'>
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Image</label>
              <input type="file" id="file" name="file" />
            </div>
            <div className="addProductItem">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                name="name"
                value={productData.name}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                type="text"
                placeholder="Enter product price"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="Enter product description"
                name="description"
                value={productData.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
