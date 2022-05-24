import React from 'react'
import image19 from "../assets/image19.png"
import "../styles/Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_text">
          <h3>BUY</h3>
          <h2>PEACE OF MIND</h2>
          <h1>CARS</h1>
          <div className="banner_btn">
            <Link to="/BuyCars" className="button_link">
              <button className="btn">EXPLORE</button>
            </Link>
          </div>
        </div>

        <div className="banner_img">
          <img src={image19} alt={image19} />
        </div>
        
      </div>
    </>
  );
}

export default Home