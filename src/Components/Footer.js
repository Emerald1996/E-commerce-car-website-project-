import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

import carlogo from "../assets/logo.png";
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";
import Dhl from "../assets/Dhl.png";
import interswitch from "../assets/interswitch.png";
import Verve from "../assets/Verve.png";
import visa from "../assets/visa.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  const myDate = new Date();
  const year = myDate.getFullYear();

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${email} has subscribed SUCCESSFULLY`);
  };

  return (
    <>
      <div className="footer_container">
        <a
          href="https://wa.me/2348102956759?
          text=I%27m%20interested%20in%20your%20car%20business"
          aria-label="whatsapp"
          rel="noopener"
          target="_blank"
        >
          <div className="aside">
            <img src={whatsapp} alt={whatsapp} />
            <h4 style={{ color: "green" }}>Chat us!</h4>
          </div>
        </a>
        <div className="footer_details">
          <div className="footer_logo">
            <img src={carlogo} alt={carlogo} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="footer_input">
              <h3>NEW TO LOREMAUTO</h3>
              <p>
                subcribe to our newsletter to get updates on our latest offers
              </p>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button className="form_btn">Subscribe</button>
            </div>
          </form>
          <div className="app_download">
            <div className="download_logo">
              <GetAppIcon className="download_icon" />
            </div>
            <div className="download_text">
              <h4>DOWNLOAD LOREMAUTOS FREE APP</h4>
              <p>Get access to exclusive offers</p>
              <div className="app_img">
                <img src={appStore} alt={appStore} />
                <img src={playStore} alt={playStore} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer_links">
          <div className="assistance">
            <h3>LET US HELP YOU</h3>
            <ul>
              <li>Help center</li>
              <li>Delivery options and timelines</li>
              <li>How to return a product on LoremAutos</li>
              <li>Report a product</li>
            </ul>
          </div>
          <div className="about_footer">
            <h3>ABOUT</h3>
            <ul>
              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Developers</li>
            </ul>
          </div>

          <div className="partners">
            <h3>PARTNER WITH US</h3>
            <ul>
              <li>Become a LoremAutos partner</li>
              <li>Become a freelance sales consultant</li>
            </ul>
          </div>
        </div>

        <div className="footer_socials_payments">
          <div className="footer_socials">
            <h3>JOIN US ON</h3>
            <div className="social_icons">
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <InstagramIcon />
            </div>
          </div>

          <div className="policy">
            <h3>PRIVACY</h3>
            <ul>
              <li>Terms and conditions</li>
            </ul>
          </div>

          <div className="footer_payments">
            <h3>PAYMENT METHODS</h3>
            <div className="payment_img">
              <img src={Dhl} alt={Dhl} />
              <img src={interswitch} alt={interswitch} />
              <img src={Verve} alt={Verve} />
              <img src={visa} alt={visa} />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>Copyright © agimezeluemmanuel{year}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
