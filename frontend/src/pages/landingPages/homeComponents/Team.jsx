import Team1 from "../../../assets/img/team-1.jpg";
import Team2 from "../../../assets/img/team-2.jpg";
import Team3 from "../../../assets/img/team-3.jpg";
import Team4 from "../../../assets/img/team-4.jpg";
import CustomCSS from "../../../custom.module.css";

function Team() {
  return (
    <section
      className={`team ${CustomCSS.sectionPadding}`}
      id="team"
      name="team"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Team</h2>
              <p>
                At Empower Dreams, FundWise, our dedicated team of admins,
                consisting of four professionals, diligently
                monitor the platform, ensuring seamless operations and
                personalized assistance. With their diverse expertise and
                unwavering commitment, they work tirelessly to support
                entrepreneurs and investors alike in realizing their dreams.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`card text-center ${CustomCSS.teamCard}`}>
              <div className={`card-body ${CustomCSS.teamCardBody}`}>
                <img
                  src={Team1}
                  alt=""
                  className={`img-fluid rounded-circle ${CustomCSS.teamImg}`}
                />
                <h3 className="card-title py-2">Pranati Mondal</h3>
                <p className="card-text">
                  Meet Pranati, one of our vigilant administrators at Empower
                  Dreams, Fund Futures. With a keen eye for detail and a passion
                  for empowering entrepreneurs, Pranati ensures smooth website
                  operations and provides personalized support to our users.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1" />
                  <i className="bi bi-facebook text-dark mx-1" />
                  <i className="bi bi-linkedin text-dark mx-1" />
                  <i className="bi bi-instagram text-dark mx-1" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`card text-center ${CustomCSS.teamCard}`}>
              <div className={`card-body ${CustomCSS.teamCardBody}`}>
                <img
                  src={Team2}
                  alt=""
                  className={`img-fluid rounded-circle ${CustomCSS.teamImg}`}
                />
                <h3 className="card-title py-2">Subhradip Das</h3>
                <p className="card-text">
                  Introducing Subhradip, a dedicated administrator at Empower
                  Dreams, Fund Futures. With strong communication skills and a
                  proactive approach, Subhradip fosters meaningful connections
                  among our community members and ensures a seamless user
                  experience.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1" />
                  <i className="bi bi-facebook text-dark mx-1" />
                  <i className="bi bi-linkedin text-dark mx-1" />
                  <i className="bi bi-instagram text-dark mx-1" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`card text-center ${CustomCSS.teamCard}`}>
              <div className={`card-body ${CustomCSS.teamCardBody}`}>
                <img
                  src={Team3}
                  alt=""
                  className={`img-fluid rounded-circle ${CustomCSS.teamImg}`}
                />
                <h3 className="card-title py-2">Shreya Das</h3>
                <p className="card-text">
                  Say hello to Shreya, another of our diligent administrators at
                  Empower Dreams, Fund Futures. With a strategic mindset and
                  commitment to excellence, Shreya plays a key role in
                  optimizing website functionality and providing valuable
                  guidance to our users.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1" />
                  <i className="bi bi-facebook text-dark mx-1" />
                  <i className="bi bi-linkedin text-dark mx-1" />
                  <i className="bi bi-instagram text-dark mx-1" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`card text-center ${CustomCSS.teamCard}`}>
              <div className={`card-body ${CustomCSS.teamCardBody}`}>
                <img
                  src={Team4}
                  alt=""
                  className={`img-fluid rounded-circle ${CustomCSS.teamImg}`}
                />
                <h3 className="card-title py-2">Rishav Chatterjee</h3>
                <p className="card-text">
                  Meet Rishav, a dynamic administrator at Empower Dreams, Fund
                  Futures. Known for her empathy and attention to user needs,
                  Rishav works tirelessly to enhance user satisfaction and drive
                  engagement on our platform through personalized assistance and
                  support.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1" />
                  <i className="bi bi-facebook text-dark mx-1" />
                  <i className="bi bi-linkedin text-dark mx-1" />
                  <i className="bi bi-instagram text-dark mx-1" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
