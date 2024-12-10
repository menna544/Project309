import React from 'react';
//import './Home.css'; 
import Navbar from './Components/Navbar';
function Home() {
  return (
    <>
    <Navbar />
    <section id="home">
      <div className="content">
        <h3>Best time for<br />coffee is now☕️☕️</h3>
        <p>Coffee is flavoursome, fragrant and deeply rich in taste (using freshly roasted coffee beans).</p>
        <button id="btn" onClick={() => alert("Get yours now!")}>Get yours now</button>
      </div>
    </section>
    </> );
}

export default Home;
