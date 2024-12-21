import React, { useState, useEffect } from "react";
import i from "../../images/view-coffee-machine-making-coffee-home.jpg";
import i3 from "../../images/view-coffee-machin.jpg";
import { useNavigate } from "react-router-dom";
import i4 from "../../images/close-up-barista-making-cappuccino-bartender-preparing-coffee-drink.jpg";
import i2 from "../../images/cups-professional-coffee-machine.jpg";
import "./imageslider.css"; 

const ImageSlider = () => {
  const navigate = useNavigate();
  const Slides = [i, i, i2, i3, i4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [Slides.length]); 

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/products");
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <div className="slider">
        <div
          className="left"
          onClick={handleLeftArrowClick}
          aria-label="Previous Slide"
        >
          &#9665;
        </div>
        <div
          className="slides"
          style={{ backgroundImage: `url(${Slides[currentIndex]})` }}
        >
          <div className="content">
            <h3>
              Best time for
              <br />
              coffee is now☕️☕️
            </h3>
            <p>
              Coffee is flavoursome, fragrant, and deeply rich in taste (using
              freshly roasted coffee beans).
            </p>
            <button
              id="btn"
              onClick={handleButtonClick}
            >
              Get yours now
            </button>
          </div>
        </div>
        <div
          className="Right"
          onClick={handleRightArrowClick}
          aria-label="Next Slide"
        >
          &#9655;
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
