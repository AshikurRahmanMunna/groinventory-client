import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../../logos/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if(pathname === '/login' || pathname === '/register') {
      setHideFooter(true)
    }
    else {
      setHideFooter(false);
    }
  }, [pathname])
  return (
    <footer className={hideFooter ? 'd-none' : ''}>
      <div className="container">
      <div className="row py-5 row-cols-lg-3 row-cols-sm-6 row-cols-12">
        <div className="col">
          <img style={{ width: "200px" }} className="mb-4" src={logo} alt="" />
          <p className="text-muted w-75 footer-text">
            GroInventory is a application to manage your products securely.
          </p>
          <div className="social">
            <div className="footer-social">
              <a
                href="https://www.facebook.com/ashikurrahman.munna.90"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/AshikurRahmanMunna"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/ashikurrahmanmunna3/?hl=en"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/ashikur-rahman-munna-543917229/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="col footer-contact text-muted">
          <h3 className="text-black">Contact Info</h3>
          <ul className="p-0">
            <li>
              <a href="tel:01715808691">
              <FontAwesomeIcon icon={faPhone} /> <span>+8801715808691</span>
              </a>
            </li>
            <li>
              <a href="tel:01819475655">
              <FontAwesomeIcon icon={faPhone} /> <span>+8801819475655</span>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a href="mailto:ashikurrahmanmunna3@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="me-1" />{" "}
              <span>
                <small>ashikurrahmanmunna3@gmail.com</small>
              </span>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Mulibash+Bazar/@23.6371873,90.5059683,21z/data=!4m5!3m4!1s0x3755b1b4598dae09:0xca3ebf7605a5ae07!8m2!3d23.6372154!4d90.5060616" target={"_blank"} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <span>
                <small>Shibu Market, Fatulla, Narrayangonj</small>
              </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer-contact text-muted">
          <h3 className="text-black">Quick Links</h3>
          <ul className="p-0">
            <li>
              <a href="tel:01715808691">
              <FontAwesomeIcon icon={faArrowRight} /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="tel:01819475655">
              <FontAwesomeIcon icon={faArrowRight} /> <span>Items</span>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a href="mailto:ashikurrahmanmunna3@gmail.com">
              <FontAwesomeIcon icon={faArrowRight} className="me-1" />{" "}
              <span>
                <small>Login</small>
              </span>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Mulibash+Bazar/@23.6371873,90.5059683,21z/data=!4m5!3m4!1s0x3755b1b4598dae09:0xca3ebf7605a5ae07!8m2!3d23.6372154!4d90.5060616" target={"_blank"} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span>
                <small>Register</small>
              </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h5 className="pt-3">&copy; Copyright 2022 || <span className="text-custom-primary">Ashikur Rahman Munna</span></h5>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
