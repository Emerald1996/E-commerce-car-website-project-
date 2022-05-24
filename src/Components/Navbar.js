import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import carlogo from "../assets/logo.png"
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";




const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false)
  
  const handleClick = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={carlogo} alt={carlogo} />
        </div>
        
        <nav>
          <ul className="links" id={openLinks ? "open_link" : "close_link"}>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/services" className="link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="link">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btn-container">
          <button>
            {!openLinks ? (
              <ReorderIcon className="toggleBtn" onClick={handleClick} />
            ) : (
              <CancelPresentationIcon
                className="toggleBtn"
                onClick={handleClick}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar