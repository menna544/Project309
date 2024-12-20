import React, { useState } from 'react';
import './product.css'
const Review = ({ productId, reviews, setReviews }) => {
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews((prevReviews) => ({
        ...prevReviews,
        [productId]: [...(prevReviews[productId] || []), newReview],
      }));
      setNewReview('');
    }
  };

  return (
    <div className="review-section">
      <h3>Reviews</h3>
      <ul>
        {(reviews[productId] || []).map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Write a review"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default Review;
