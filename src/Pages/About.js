import React from 'react'
import "../styles/About.css"
import { Link } from 'react-router-dom'
import aboutImage from "../assets/about-bg-1.png"
import moreAboutImage from "../assets/about-bg-2.png"

import BarChartIcon from "@material-ui/icons/BarChart";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const About = () => {
  return (
    <>
      <div className="about_container_bg">
        <div className="about_container">
          <div className="about_details">
            <h1>About Us</h1>
            <h2>Built specifically for your comfort </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              laboriosam dolores vero quasi molestias repellendus a est. Sed,
              adipisci laborum? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quae laboriosam dolores vero quasi molestias
              repellendus a est. Sed, adipisci laborum?
            </p>
          </div>

          <div className="about_img">
            <img src={aboutImage} alt={aboutImage} />
          </div>
        </div>

        <div className="more_details">
          <div className="more_details_img">
            <img src={moreAboutImage} alt={moreAboutImage} />
          </div>

          <div className="more_about_details">
            <div className="more_about_details_text">
              <h1>Why Choose Us</h1>
              <p>
                We are building a car buying experience that gives you peace of
                mind.
              </p>
            </div>

            <div className="why_us_container">
              <div className="why_us">
                <BarChartIcon className="about_icon" />
                <h2>Vehicle Reliability</h2>
                <p>
                  Our cars are 100% serviced and inspected to ensure faults and
                  to maintain peace of mind.
                </p>
              </div>

              <div className="why_us">
                <ThumbUpIcon className="about_icon" />
                <h2>Customer Support</h2>
                <p>
                  Whether you have knoledge of buying cars or not, we will help
                  ypu choose the right choice.
                </p>
              </div>

              <div className="why_us">
                <CreditCardIcon className="about_icon" />
                <h2>Low Pricing</h2>
                <p>
                  We make sure you choose the best cars without going pass your
                  budget. whatever you see on our site is what you buy.
                </p>
              </div>

              <div className="why_us">
                <LocalOfferIcon className="about_icon" />
                <h2>Vehicle Insurance</h2>
                <p>
                  We offer the best when its comes to insuring your car.
                  Patronize us now.
                </p>
                <Link to="/BuyCars" className="button_link">
                  <div className="option_btns">
                    <button>Purchase</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About