import CustomCSS from "../../../custom.module.css";

function Service() {
  return (
    <section
      className={`services ${CustomCSS.sectionPadding} ${CustomCSS.services}`}
      id="services"
      name="services"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div
              className={`card text-center pb-2 ${CustomCSS.servicesCard} ${CustomCSS.card}`}
            >
              <div className={`card-body ${CustomCSS.cardBody}`}>
                <i className="bi bi-laptop" />
                <h3 className="card-title">Promotion</h3>
                <p className="lead">
                  At Empower Dreams, FundWise, we specialize in promoting your
                  business idea to attract the right investors. We offer
                  targeted exposure, strategic marketing support, and networking
                  opportunities to elevate your visibility and generate interest
                  in your venture. Join us to craft compelling pitches, connect
                  with industry influencers, and turn your dreams into reality.
                </p>
                <button className="btn bg-secondary text-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div
              className={`card text-center pb-2 ${CustomCSS.servicesCard} ${CustomCSS.card}`}
            >
              <div className={`card-body ${CustomCSS.cardBody}`}>
                <i className="bi bi-journal" />
                <h3 className="card-title">Guidance</h3>
                <p className="lead">
                  At Empower Dreams, FundWise, we provide expert guidance to
                  navigate the complexities of entrepreneurship. Benefit from
                  personalized mentorship, strategic advice, and educational
                  resources tailored to your unique challenges and goals. Let us
                  help you refine your strategy, optimize operations, and
                  achieve success in your venture.
                </p>
                <button className="btn bg-secondary text-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div
              className={`card text-center pb-2 ${CustomCSS.servicesCard} ${CustomCSS.card}`}
            >
              <div className={`card-body ${CustomCSS.cardBody}`}>
                <i className="bi bi-intersect" />
                <h3 className="card-title">Communication</h3>
                <p className="lead">
                  At Empower Dreams, FundWise, transparent communication is key
                  to our platform. We facilitate clear and open dialogue between
                  entrepreneurs and investors, ensuring trust and alignment
                  throughout the investment process. Stay informed with
                  real-time updates, interactive discussions, and seamless
                  connectivity to foster meaningful connections and
                  collaboration.
                </p>
                <button className="btn bg-secondary text-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
