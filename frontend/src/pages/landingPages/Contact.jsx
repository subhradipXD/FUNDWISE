import Navbar from "../../inc/Navbar";
import CustomCSS from "../../custom.module.css";
import Footer from "../../inc/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className={`contact ${CustomCSS.sectionPadding} ${CustomCSS.contact}`}
      >
        <div className={`container mt-2 mb-2 ${CustomCSS.contactBg}`}>
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-2 mt-5">
                <h2>Contact Us</h2>
                <p>
                  Have questions or feedback? We're here to help! Reach out to
                  us through our contact form or directly via email. Our team is
                  committed to providing prompt assistance and support to ensure
                  your experience with Empower Dreams, FundWise is seamless and
                  rewarding.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-2 pb-4">
              <form action="#" className="p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        required
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary btn-lg btn-block mt-3"
                    type="button"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
