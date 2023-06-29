import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="sectionTitle">Services</h2>
      <span className="sectionSubtitle">What I offer</span>

      <div className="servicesContainer container grid">
        <div className="servicesContent">
          <div>
            <i className="uil uil-web-grid servicesIcon"></i>
            <h3 className="servicesTitle">
              Front-End <br /> Developer
            </h3>
            <p className="servicesPara">
              3+ years of experience in Front-End Development.
            </p>
          </div>

          <span className="servicesButton" onClick={() => toggleTab(1)}>
            See More <i className="uil uil-arrow-right servicesButtonIcon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModalContent">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times servicesModalClose"
              ></i>
              <h3 className="servicesModalTitle">Front-End Development</h3>
              <p className="servicesModalDescription">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicesModalServices grid">
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Create websites that adapt beautifully across all devices.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Ensure your website looks great and functions flawlessly.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Develop websites with clean, optimized code
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    I position your company brand.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Provide ongoing assistance
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="servicesContent">
          <div>
            <i className="uil uil-edit servicesIcon"></i>
            <h3 className="servicesTitle">
              Back-End <br /> Developer
            </h3>
            <p className="servicesPara">
              3+ years of experience in Back-End development.
            </p>
          </div>

          <span className="servicesButton" onClick={() => toggleTab(3)}>
            See More <i className="uil uil-arrow-right servicesButtonIcon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModalContent">
              <i
                className="uil uil-times servicesModalClose"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="servicesModalTitle">Back-End Developer</h3>
              <p className="servicesModalDescription">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicesModalServices grid">
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Develop a secure and scalable back-end infrastructure
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Expertise in designing and managing databases
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Create powerful APIs and integrate them
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Fine-tune the back-end code to enhance speed, efficiency,
                    and overall performance.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Enable secure online transactions by integrating payment
                    gateways.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="servicesContent">
          <div>
            <i className="uil uil-arrow servicesIcon"></i>
            <h3 className="servicesTitle">
              UI/UX <br /> Designer
            </h3>
            <p className="servicesPara">
              3+ years of experience in UI/UX designing.
            </p>
          </div>

          <span className="servicesButton" onClick={() => toggleTab(2)}>
            See More <i className="uil uil-arrow-right servicesButtonIcon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModalContent">
              <i
                className="uil uil-times servicesModalClose"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="servicesModalTitle">Ui/UX Designer</h3>
              <p className="servicesModalDescription">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicesModalServices grid">
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    I develop the user interface.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">Web Page Development.</p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    I position your company brand.
                  </p>
                </li>
                <li className="servicesModalService">
                  <i className="uil uil-check-circle servicesModalIcon"></i>
                  <p className="servicesModalInfo">
                    Design clear and logical navigation flows for effortless
                    user interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
