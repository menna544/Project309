
import '../../Pages/home.css'
import img from '../../images/9f9e3932ae60b6d97b65e3cabc57d64d.jpg';
function Contact() {
  return (
    <div className="conainer" id='contact'>
      <div className="mixed">
        <div className="form-conainer">
          <h1>Contact <span style={{color:'black'}}>Us</span></h1>
        <p>Feel free to contact us and we will get back to you as soon as we can. </p>
          <form>
            <div className='twosec'>
            <div className="input-with-icon">
              <input
                placeholder="Enter Name" style={{border: "2px double #000"}} 
              />
            </div>
            <div className="input-with-icon">
              <input
                style={{border: "2px double #000"}} 
                placeholder="Enter Email"
              />
            </div>
            
            <div className="input-with-icon">
              <input
                style={{border: "2px double #000" }} 
                placeholder="Tell Us About Your message"
              />
            </div>
            
            </div>
          
          </form>
          <button type="submit" className='buttonn'>Send</button>
        </div>
        <div className="image-containennt">
          <img src={img} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
