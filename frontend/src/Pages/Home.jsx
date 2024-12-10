import React from 'react';
import './home.css'; 
import Navbar from './Components/Navbar';
function Home() {
  return (
    <>
    <Navbar />
    <section className="home">
      <div className="content">
       <div className='inside'>     
        <h1 className='pp'>Best time for<br />coffee is now☕️☕️</h1>
        <p>Coffee is flavoursome, fragrant and deeply rich in taste (using freshly roasted coffee beans).</p>
        <button className="btn" onClick={() => alert("Get yours now!")}>get yours now</button>
      </div>
      </div>  
    </section>
    </> );
}

export default Home;
