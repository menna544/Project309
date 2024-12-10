import React from 'react';
import './home.css'; 
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
function Home() {
  return (
    <>
    <Navbar />
    <section className="home">
      <ImageSlider />
    </section>
    </> );
}

export default Home;
