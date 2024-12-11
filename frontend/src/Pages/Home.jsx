import React from 'react';
import './home.css'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import imag from '../images/e565f7c99fa61b8f5e1e36f596a086f8.jpg'
import ImageSlider from './Components/ImageSlider';
function Home() {
  return (
    <>
    <Navbar />
    <section className="home">
      <ImageSlider />
    </section>
    <section className="about" id="about">
      <div className="contaier">
        <h1 className="heading">
          About <span>Us</span>
        </h1>

        <div className="row1">
          <div className="about">
            <div className="about-img">
              <img
                src={imag}
                alt="Specialty Coffee"
              />
            </div>
            <div className="about-content">
              <h3>What Makes Our Coffee Special?</h3>
              <p>
                If you are an avid coffee drinker, chances are that you’ve come
                across the term specialty coffee at least once in the hunt for
                that perfect cup of coffee. Passionate baristas, latte art,
                manual coffee brewing, and tiny espresso drinks make up just a
                portion of the specialty coffee movement; the foundations run
                much deeper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </> );
}

export default Home;
