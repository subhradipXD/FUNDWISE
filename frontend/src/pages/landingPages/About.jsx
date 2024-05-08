import Navbar from "../../inc/Navbar";
import CustomCSS from "../../custom.module.css";
import AboutImg from "../../assets/img/about.jpg";
import Footer from "../../inc/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section id="about" className={`about ${CustomCSS.sectionPadding}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src={AboutImg} alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className={CustomCSS.aboutText}>
                Welcome to Empower Dreams, FundWise! At Empower Dreams,
                FundWise, we believe in the power of ideas to transform lives
                and shape the future. Our platform serves as a vibrant ecosystem
                where visionary entrepreneurs and passionate investors come
                together to turn dreams into reality. Founded on the principles
                of innovation, collaboration, and empowerment, Empower Dreams,
                FundWise strives to be the premier destination for aspiring
                entrepreneurs seeking funding and support for their ventures, as
                well as for investors looking to discover the next big
                opportunity. With a dedicated team of administrators overseeing
                platform activities and a commitment to fostering meaningful
                connections and collaboration within our community, we aim to
                provide a seamless and rewarding experience for all users. Join
                us on this exciting journey of entrepreneurship and investment.
                Together, let's empower dreams and fund wisely!
                <br/>
                <a href="#" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
