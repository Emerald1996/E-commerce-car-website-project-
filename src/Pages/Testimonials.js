import React from "react";
import "../styles/Testimonials.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial_container">
          <div className="testimonial_container_details">
            <div className="testimonial_image">
              <img src={user1} alt={user1} />
            </div>

            <div className="testimonial_text">
              <h3>sarah lawson</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                laboriosam dolores vero quasi molestias repellendus a est. Sed,
                adipisci laborum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quae laboriosam dolores vero quasi molestias
                repellendus a est. Sed, adipisci laborum?
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
          <div className="testimonial_container_details">
            <div className="testimonial_image">
              <img src={user2} alt={user2} />
            </div>

            <div className="testimonial_text">
              <h3>john doe</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                laboriosam dolores vero quasi molestias repellendus a est. Sed,
                adipisci laborum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quae laboriosam dolores vero quasi molestias
                repellendus a est. Sed, adipisci laborum?
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
          <div className="testimonial_container_details">
            <div className="testimonial_image">
              <img src={user3} alt={user3} />
            </div>

            <div className="testimonial_text">
              <h3>Queen davies</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                laboriosam dolores vero quasi molestias repellendus a est. Sed,
                adipisci laborum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quae laboriosam dolores vero quasi molestias
                repellendus a est. Sed, adipisci laborum?
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
