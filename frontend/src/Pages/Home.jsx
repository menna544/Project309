import React from 'react';
import './home.css'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ImageSlider from './Components/ImageSlider';
function Home() {
  return (
    <>
    <Navbar />
    <section className="home">
      <ImageSlider />
    </section>
    <Footer />
    </> );
}

export default Home;
