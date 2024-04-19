import React, { useEffect } from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="footer">
      <div className="secContainer grid">
        <div data-aos="fade-right" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="logo" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links </span>
          <li>
            <a href="destination">Destination</a>
          </li>
          <li>
            <a href="support">Support</a>
          </li>
          <li>
            <a href="cordination">Travel & Cordination</a>
          </li>
          <li>
            <a href="privacy">Privacy</a>
          </li>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="explore">Explore</a>
          </li>
          <li>
            <a href="travel">Travel</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="5000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+444 565 6655</span>
          <span className="email">isratech@outlook.com</span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
