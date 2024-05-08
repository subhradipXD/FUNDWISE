import Navbar from "../../inc/Navbar";
import SlideImg1 from "../../assets/img/home-1.jpg";
import SlideImg2 from "../../assets/img/home-2.jpg";
import SlideImg3 from "../../assets/img/home-3.jpg";
import Service from "./homeComponents/Service";
import Team from "./homeComponents/Team";
import Footer from "../../inc/Footer";
import CustomCSS from "../../custom.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        name="home"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className={`carousel-inner ${CustomCSS.carouselInner}`}>
          <div className={`carousel-item active ${CustomCSS.carouselItem}`}>
            <img
              src={SlideImg1}
              className={`d-block w-100 ${CustomCSS.w100}`}
              alt="..."
            />
            <div className={`carousel-caption ${CustomCSS.carouselCaption}`}>
              <h5>Empower Dreams, FundWise</h5>
              <p>
                Welcome to Empower Dreams, FundWise! 🌟 Dive into a world
                where entrepreneurs and investors unite to turn dreams into
                reality. Are you ready to be part of the next big thing?
              </p>
              <p>
                <a href="#" className="btn btn-secondary mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className={`carousel-item ${CustomCSS.carouselItem}`}>
            <img
              src={SlideImg2}
              className={`d-block w-100 ${CustomCSS.w100}`}
              alt="..."
            />
            <div className={`carousel-caption ${CustomCSS.carouselCaption}`}>
              <h5>Transform Ideas, Ignite Change</h5>
              <p>
                Transform Ideas, Ignite Change: Your gateway to a dynamic
                community where visionary entrepreneurs meet passionate
                investors. Ready to spark innovation and shape the future?
              </p>
              <p>
                <a href="#" className="btn btn-secondary mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className={`carousel-item ${CustomCSS.carouselItem}`}>
            <img
              src={SlideImg3}
              className={`d-block w-100 ${CustomCSS.w100}`}
              alt="..."
            />
            <div className={`carousel-caption ${CustomCSS.carouselCaption}`}>
              <h5>Fuel Innovation, Build Together</h5>
              <p>
                Fuel Innovation, Build Together: Join a vibrant ecosystem where
                ideas come to life, investments flourish, and dreams take
                flight. Ready to co-create the next wave of groundbreaking
                ventures?
              </p>
              <p>
                <a href="#" className="btn btn-secondary mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className={`about ${CustomCSS.sectionPadding}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className={`${CustomCSS.aboutText} text-center`}>
                <h2 className={CustomCSS.homeAboutText}>Our Company</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam, labore reiciendis. Assumenda eos quod animi! Soluta
                  nesciunt inventore dolores excepturi provident, culpa beatae
                  tempora, explicabo corporis quibusdam corrupti. Autem,
                  quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum
                  dolor, ipsa perferendis porro doloribus obcaecati placeat
                  natus iste odio est non earum?
                </p>
                <a href="#" className="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
