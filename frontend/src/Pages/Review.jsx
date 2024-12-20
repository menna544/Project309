import React from 'react';
import './product.css';
import imag from '../images/65042906985241278be17a79a7574652.jpg';
import imag2 from '../images/f192d66e9dad3f99dcd07b47345b25be.jpg';
import imag3 from '../images/db3a623acc8396fb285ec899ad01cd10.jpg';
import imag4 from '../images/573a46c7818f8cca76e394ac5af72542.jpg';

const Review = () => {
  const fixedReviews = [
    {
      reviewText: "Great coffee and amazing service!",
      name: "John Doe",
      image: imag
    },
    {
      reviewText: "The ambiance is wonderful, and the coffee is superb.",
      name: "Jane Smith",
      image: imag2
    },
    {
      reviewText: "I love this place! Best coffee in town.",
      name: "Samuel Green",
      image: imag3
    },
    {
      reviewText: "A cozy spot with delicious drinks. Highly recommend!",
      name: "Emily Brown",
      image: imag4
    }
  ];

  return (
    <div className="review-section">
      <h3>Customer Reviews</h3>
      <div className="review-container">
        {fixedReviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-header">
              <img src={review.image} alt={review.name} className="profileimg1" />
              <div className="reviewer-name">{review.name}</div>
            </div>
            <p>{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
