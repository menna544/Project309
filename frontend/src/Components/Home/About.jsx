
import '../../Pages/home.css'
import imag from '../../images/e565f7c99fa61b8f5e1e36f596a086f8.jpg'
function About() {
    return (
        <>
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
    </>
    );
}

export default About;