import React from 'react'
import { Link } from 'react-router-dom'
import checkmark from "../assets/check-mark.gif"
import "../styles/ThankYou.css"

const ThankYou = () => {
  return (
      <div className="thanks_container">
          <img src={checkmark} alt={checkmark} />
          <h5>Thanks for your Patronage! {""} <span><Link to="/" style={{ fontWeight: 'bold' }}>Back to Home.</Link></span></h5>
    </div>
  )
}

export default ThankYou