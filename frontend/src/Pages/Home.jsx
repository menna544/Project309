import React from 'react';
import './home.css'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import imag from '../images/e565f7c99fa61b8f5e1e36f596a086f8.jpg'
import menu1 from '../images/11.png';
import menu2 from '../images/22.png';
import menu3 from '../images/33.png';
import menu4 from '../images/44.png';
import menu5 from '../images/55.png';
import menu6 from '../images/66.png';
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
              <h3>From Bean to Cup: Our Story ☕️🌰</h3>
              <p>
              At our coffee shop, every cup tells a story—a journey that begins in the lush, sun-kissed plantations where coffee cherries ripen to perfection. Our beans are handpicked by farmers who have mastered the art of coffee cultivation over generations, ensuring only the finest cherries make their way into your cup.

              We believe in sustainability and ethical sourcing, working closely with local communities to support fair trade practices. Each bean reflects the dedication and care of the farmers who nurture them, turning their passion into the foundation of our craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="menuhome" id="menu">
      <h1 className="heading">
        our <span>popular menu</span>
      </h1>

      <div className="box-container">
        <div  className="box">
          <img src={menu1} alt="Cappuccino" />
          <div className="contet">
            <h3>cappuccino</h3>
            <p>
              Steamed milk and foam. This coffee is all about the structure and
              the even splitting of all elements into equal thirds.
            </p>
            <span>$8.99</span>
          </div>
        </div>

        <div  className="box">
          <img src={menu2}  alt="Hot Chocolate" />
          <div className="contet">
            <h3>Hot chocolate</h3>
            <p>
              Dark, semisweet, or bittersweet chocolate grated or chopped into
              small pieces and stirred into milk with the addition of sugar.
            </p>
            <span>$10</span>
          </div>
        </div>

        <div  className="box">
          <img src={menu3}  alt="Lungo" />
          <div className="contet">
            <h3>Lungo</h3>
            <p>
              Italian means “long coffee.” For you, it means even more time to
              enjoy this remarkably balanced cup with roasty notes and
              blackcurrant undertones.
            </p>
            <span>$10</span>
          </div>
        </div>

        <div  className="box">
          <img src={menu4}  alt="Espresso" />
          <div className="contet">
            <h3>Espresso</h3>
            <p>
              Concentrated form of coffee brewed with high pressure, hot water
              and finely ground coffee beans.
            </p>
            <span>$6</span>
          </div>
        </div>

        <div  className="box">
          <img src={menu5}  alt="Doppio" />
          <div className="contet">
            <h3>Doppio</h3>
            <p>
              Double shot which is extracted using double the amount of ground
              coffee in a larger-sized portafilter basket.
            </p>
            <span>$12</span>
          </div>
        </div>

        <div  className="box">
          <img src={menu6}  alt="Cortado" />
          <div className="contet">
            <h3>Cortado</h3>
            <p>
              Beverage consisting of espresso mixed with a roughly equal amount
              of warm milk to reduce the acidity.
            </p>
            <span>$8.55</span>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </> );
}

export default Home;
