import React from 'react';
import './home.css'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import About from '../Components/Home/About';
import MenuSection from '../Components/Home/menusec';
import ImageSlider from '../Components/Home/ImageSlider';
import Contact from '../Components/Home/Contact';
function Home() {
  return (
    <>
    <Navbar />
    <section className="home">
      <ImageSlider />
    </section>
   <About />
    <MenuSection />
    <Contact />
    <Footer />
    </> );
}

export default Home;
