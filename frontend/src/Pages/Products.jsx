import React, { useState } from 'react';
import Search from './search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import menu1 from '../images/5fc4e1800911057f993b96c854fb2d26.jpg';
import menu2 from '../images/3532ca198f8a6b74e9d11a1890bdf0fe.jpg';
import menu3 from '../images/953e9e11c77993d6b78a3eaaa1536e3c.jpg';
import menu4 from '../images/4e602362e96f7e6f3e7de1fd5171174f.jpg';
import menu5 from '../images/4b7cefeb3f8f3e89f95a980f60a950cd.jpg';
import menu6 from '../images/ae3695f39c91093e61e81105684f3021.jpg';
import menu7 from '../images/5aa7d84d74e54c07c0414837404cd65c.jpg';
import menu8 from '../images/6a86c387495a30851e5843a582c7b6f2.jpg';
import menu9 from '../images/cbff53f6656a90d44d4fb33ba4f07e2b.jpg';
import menu10 from '../images/8435914e1fcd7a95874395a7678d01bc.jpg';
import menu11 from '../images/b84c9db0910aa8247d79b69a4ecd1438.jpg';
import menu12 from '../images/95d0ba93472222e30990f79cfc335f83.jpg';
import imag from '../images/573a46c7818f8cca76e394ac5af72542.jpg';
import './product.css';
import { useNavigate, Link } from "react-router-dom";

const products = [
  { id: 1, name: 'Latte Macchiato', image: menu1, price: 35 },
  { id: 2, name: 'Caramel Ice Coffee', image: menu2, price: 10 },
  { id: 3, name: 'Milk or Milk Substitute', image: menu3, price: 15 },
  { id: 4, name: 'Espresso', image: menu4, price: 10 },
  { id: 5, name: 'Green Coffee', image: menu5, price: 30 },
  { id: 6, name: 'Hot Chocolate', image: menu6, price: 15 },
  { id: 7, name: 'Oleato™ Caffé Latte with Oatmilk', image: menu7, price: 10 },
  { id: 8, name: 'Cappuccino', image: menu8, price: 30 },
  { id: 9, name: 'Flat White', image: menu9, price: 30 },
  { id: 10, name: 'Galão', image: menu10, price: 10 },
  { id: 11, name: 'Café au lait', image: menu11, price: 30 },
  { id: 12, name: 'Affogato', image: menu12, price: 30 },
];

function Products() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[productId]) {
        const product = products.find((item) => item.id === productId);
        updatedCart[productId] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
    setIsSidebarOpen(true);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const goToProductDetails = (productId) => {
    const product = products.find((item) => item.id === productId);
    navigate(`/product/${productId}`, { state: product });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const product = updatedCart[productId];
      if (product) {
        updatedCart[productId] = { ...product, quantity: product.quantity + 1 };
      }
      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const product = updatedCart[productId];

      if (product) {
        if (product.quantity === 1) {
          const { [productId]: removedItem, ...rest } = updatedCart;
          return rest;
        } else {
          updatedCart[productId] = { ...product, quantity: product.quantity - 1 };
        }
      }

      return updatedCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <header>
        <h1>Shop Now</h1>
        <div className="header-actions">
          <Link to="/profile" className="profile-link">
            <img
              src={imag}
              alt="Profile"
              className="profile-image"
            />
          </Link>

          <div className="shopping" onClick={() => setIsSidebarOpen(true)}>
            <ShoppingCartIcon style={{ fontSize: 30 }} />
            <span className="quantity">{totalItems}</span>
          </div>
        </div>
        
        <div className="logout-button" onClick={() => navigate("/auth")}>
          <LogoutIcon className="logout-icon" />
          <p className="logout-text">Logout</p>
        </div>
      </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.name}  onClick={() => goToProductDetails(product.id)}/>
            <p>{product.name}</p>
            <div className="price">${product.price}</div>
            <button onClick={() => addToCart(product.id)}>Add to cart</button>
          </div>
        ))}
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Shopping Cart</h2>
          <CloseIcon onClick={() => setIsSidebarOpen(false)} style={{ cursor: 'pointer' }} />
        </div>
        <ul className="sidebar-list">
          {Object.values(cart).map((item) => (
            <li key={item.id} className="sidebar-item">
              <img src={item.image} alt={item.name} />
              <div className="sidebar-item-details">
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)} className='button3'>-</button>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id)} className='button3'>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="clear-cart" onClick={() => setCart({})}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
