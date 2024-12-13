import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import menu1 from '../images/pro1.png'; 
import menu2 from '../images/bg-preview.png';
import menu3 from '../images/tte-removebg-preview.png';
import menu4 from '../images/pro3-removebg-preview.png';
import menu5 from '../images/pro4-removebg-preview.png';
import menu6 from '../images/67728-removebg-preview.png';
import menu7 from '../images/iced-coff-preview-removebg-preview.png';
import menu8 from '../images/images-removebg-preview.png';
import menu9 from '../images/5234907fb35fc29a79936fafc078e70f-removebg-preview.png';
import './product.css';

const products = [
  { id: 1, name: 'Latte', image: menu1, price: 35 },
  { id: 2, name: 'Caramel Ice Coffee', image: menu2, price: 10 },
  { id: 3, name: 'Milk or Milk Substitute', image: menu3, price: 15 },
  { id: 4, name: 'Espresso', image: menu4, price: 10 },
  { id: 5, name: 'Green Coffee', image: menu5, price: 30 },
  { id: 6, name: 'Hot Chocolate', image: menu6, price: 15 },
  { id: 7, name: 'Oleato™ Caffé Latte with Oatmilk', image: menu7, price: 10 },
  { id: 8, name: 'Espresso Costa Coffee', image: menu8, price: 30 },
  { id: 9, name: 'Flat White', image: menu9, price: 30 },
  { id: 10, name: 'Hot Chocolate', image: menu6, price: 15 },
  { id: 11, name: 'Oleato™ Caffé Latte with Oatmilk', image: menu7, price: 10 },
  { id: 12, name: 'Espresso Costa Coffee', image: menu8, price: 30 },
  { id: 13, name: 'Flat White', image: menu9, price: 30 }
];

function Products() {
  const [cart, setCart] = useState({});

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[productId]) {
        const product = products.find((item) => item.id === productId);
        updatedCart[productId] = { ...product, quantity: 1 };
      } else {
        updatedCart[productId].quantity++;
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
        <div className="shopping">
          <ShoppingCartIcon style={{ fontSize: 30 }} />
          <span className="quantity">{totalItems}</span>
        </div>
      </header>

      <div className="list">
        {products.map((product) => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div className="price">${product.price}</div>
            <button onClick={() => addToCart(product.id)}>
           Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="center-container">
  <button className="logout-button">
    <LogoutIcon className="logout-icon" />
    <span className="logout-text">Log out</span>
  </button>
</div>


      <div className="card">
        <h1>Cart</h1>
        <ul className="listcard">
          {Object.values(cart).map((item) => (
            <li key={item.id}>
              <div><img src={item.image} alt={item.name} /></div>
              <div>{item.name}</div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <div>Quantity: {item.quantity}</div>
            </li>
          ))}
        </ul>
        <div className="checkout">
          <div className="total">Total: ${totalPrice.toFixed(2)}</div>
          <button className="closeshopping" onClick={() => setCart({})}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
