import Navbar from "../../inc/Navbar";
import CustomCSS from "../../custom.module.css";
import Footer from "../../inc/Footer";
import axios from 'axios';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/send-feedback', formData);
      if (response.data.success) {
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({name:'', email:'',message:''});
      } else {
        setErrorMessage('Failed to send your message. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

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
              <form onSubmit={handleSubmit} className="p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary btn-lg btn-block mt-3"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
              {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
