import paymentMethods from "../../img/payment.png";
import GreenButton from "../UI/Buttons/GreenButton";
import Modal from "../Modal/Modal";
import { useState } from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const clodeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal onClick={clodeModalHandler}>
          <h2 className={classes["modal-text"]}>
            Email sent to <span className={classes.bold}>{email}</span>
          </h2>
          <svg
            className={classes.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={classes["checkmark-circle"]}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={classes["checkmark-check"]}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </Modal>
      )}
      <section className={classes.footer}>
        <div className={classes["footer-a"]}>
          <div className={classes["footer-block"]}>
            <h4 className={`${"section-title"}`}>Customer Service</h4>
            <ul className={classes["footer-list"]}>
              <li className={classes["footer-list-item"]}>Customer Services</li>
              <li className={classes["footer-list-item"]}>Contact Us</li>
              <li className={classes["footer-list-item"]}>Returns & Refunds</li>
              <li className={classes["footer-list-item"]}>
                Delivery Information
              </li>
              <li className={classes["footer-list-item"]}>Pricing Policy</li>
              <li className={classes["footer-list-item"]}>Finance Options</li>
              <li className={classes["footer-list-item"]}>
                Book Kitchen Consultation
              </li>
              <li className={classes["footer-list-item"]}>
                Book Fittings for Wardrobes
              </li>
            </ul>
          </div>

          <div className={classes["footer-block"]}>
            <h4 className={`${"section-title"}`}>Resources</h4>
            <ul className={classes["footer-list"]}>
              <li className={classes["footer-list-item"]}>In Store Services</li>
              <li className={classes["footer-list-item"]}>Brochures</li>
              <li className={classes["footer-list-item"]}>Our Brands</li>
              <li className={classes["footer-list-item"]}>DIY Safety Tips</li>
              <li className={classes["footer-list-item"]}>FAQs</li>
              <li className={classes["footer-list-item"]}>Cookie Policy</li>
              <li className={classes["footer-list-item"]}>
                Terms & Conditions
              </li>
              <li className={classes["footer-list-item"]}>Accessibility</li>
            </ul>
          </div>

          <div className={classes["footer-block"]}>
            <h4 className={`${"section-title"}`}>About Us</h4>
            <ul className={classes["footer-list"]}>
              <li className={classes["footer-list-item"]}>About Us</li>
              <li className={classes["footer-list-item"]}>Our Team</li>
              <li className={classes["footer-list-item"]}>Our History</li>
              <li className={classes["footer-list-item"]}>
                Growing Responsiblity
              </li>
              <li className={classes["footer-list-item"]}>Pricing Policy</li>
              <li className={classes["footer-list-item"]}>
                Statements & POlicies
              </li>
              <li className={classes["footer-list-item"]}>Careers</li>
              <li className={classes["footer-list-item"]}>Student Discount</li>
            </ul>
          </div>
        </div>

        <div className={classes["footer-b"]}>
          <form className={classes.form}>
            <h4 className={classes["section-title"]}>
              Subscribe to our newsletter
            </h4>
            <div className={classes["form-data"]}>
              <input
                type="email"
                placeholder="Enter your email..."
                className={classes.input}
                onChange={(e) => setEmail(e.target.value)}
              />
              <GreenButton
                className={classes.subscribe}
                onClick={showModalHandler}
              >
                Subscribe
              </GreenButton>
            </div>
          </form>
        </div>

        <div className={classes["footer-c"]}>
          <p className={`${classes["para-secondary"]}`}>
            Copyright &copy; 2022 CoZy Inc.
          </p>
          <img src={paymentMethods} alt="Payment Options" />
          <ul className={classes["social-media-links"]}>
            <li className={classes.link}>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li className={classes.link}>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className={classes.link}>
              <i className="fa-brands fa-pinterest"></i>
            </li>
            <li className={classes.link}>
              <i className="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
