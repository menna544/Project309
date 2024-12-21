


import React, { useState } from 'react';
import "./add.css";
import Sidebar from '../dashboradadmin/Dashside';

function NewProduct() {
  const [productData, setProductData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    image: null,
  });

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      // Handle file input
      setProductData({ ...productData, [name]: files[0] });
    } else {
      // Handle text inputs
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentProduct) {
      // Update product logic
      const updatedProducts = products.map((product) =>
        product.id === currentProduct.id
          ? { ...product, ...productData }
          : product
      );
      setProducts(updatedProducts);
    } else {
      // Add new product logic
      const newProduct = { ...productData, id: Date.now() };
      setProducts([...products, newProduct]);
    }

    // Reset the form fields
    setProductData({
      name: '',
      type: '',
      price: '',
      description: '',
      image: null,
    });
    setCurrentProduct(null); // Reset currentProduct after submit
  };

  // Delete product
  const deleteProduct = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    setProducts(products.filter((product) => product.id !== productId));
  };

  // Edit product
  const EditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setCurrentProduct(productToEdit);
    setProductData({
      name: productToEdit.name,
      type: productToEdit.type,
      price: productToEdit.price,
      description: productToEdit.description,
      image: productToEdit.image,
    });
  };

  const displayImage = productData.image ? URL.createObjectURL(productData.image) : null;

  return (
    <div className="container3">
      <Sidebar />
      <div className="DashHome">
        <div className="newProduct">
          <h1 className="addProductTitle">Add New Product</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Image</label>
              <input 
                type="file" 
                id="file" 
                name="image" 
                onChange={handleChange} 
              />
              {displayImage && <img src={displayImage} alt="Product Preview" className="imagePreview" />}
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

            <button type="submit" className="addProductButton">
              {currentProduct ? 'Update' : 'Create'}
            </button>
          </form>

          {/* Display the added products */}
          <div className="productList">
            <h2>Added Products:</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id} className="productItem">
                  {product.image && <img src={URL.createObjectURL(product.image)} alt="Product" className="productImage" />}
                  <div className="allp">
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <div className="buttonpro">
                      <button className="btn" onClick={() => deleteProduct(product.id)}>Delete product</button>
                      <button className="btn" onClick={() => EditProduct(product.id)}>Edit product</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;