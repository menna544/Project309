import React, { useState, useEffect } from "react";
import i from "../../images/262f0b9f-e0a8-40e4-bdd3-8f8a087cb0c8.jpg";
import i3 from "../../images/93988188-f9df-4122-ab26-5ba755e0b538.jpg";
import i4 from "../../images/b0cd4441-73f8-4ea0-8515-1689cb7d91a0.jpg";
import i2 from "../../images/2.jpg";
import "./imageslider.css";

const ImageSlider = () => {
  const Slides = [i, i, i2, i3, i4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changed to 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [Slides.length]); // Add Slides.length as a dependency if the array could change

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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="slideStyles">
        <div
          className="leftArrowStyles"
          onClick={handleLeftArrowClick}
          aria-label="Previous Slide"
        >
          &#9665;
        </div>
        <div
          className="slideStyles1"
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
              onClick={() => alert("Get yours now!")}
            >
              Get yours now
            </button>
          </div>
        </div>
        <div
          className="RightArowStyles"
          onClick={handleRightArrowClick}
          aria-label="Next Slide"
        >
          &#9655;
        </div>
        <div className="dot">
          {Slides.map((slide, slideindex) => (
            <div
              key={slideindex}
              className={`dotstyle ${currentIndex === slideindex ? 'active' : ''}`}
              onClick={() => handleDotClick(slideindex)}
              role="button"
              aria-label={`Go to slide ${slideindex + 1}`}
            >
              ⚫
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
