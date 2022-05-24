import React from 'react'
import "../styles/Services.css"
import serviceImage1 from "../assets/service-1.png"
import serviceImage2 from "../assets/service-2.png"
import serviceImage3 from "../assets/service-3.png"
import serviceImage4 from "../assets/service-4.png"

const Services = () => {
  return <>
    <div className="service_container">
      <div className='services'>
        <div className='service_info'>
          <img src={serviceImage1} alt={serviceImage1} />
          <h1>01.</h1>
          <h2>We will do a thorough inspection to your car.</h2>
          <p>An expert mechanic will do a thorough inspection on your car.
            You will decide according to the result after.
          </p>
        </div>
        <div className='service_info'>
          <img src={serviceImage2} alt={serviceImage2} />
          <h1>02.</h1>
          <h2>We offer an interim car service.</h2>
          <p>We offer thorough inspection of main car component such as
            light, tyres, lubrication of all moving parts, and any fluid leaks.
          </p>
        </div>
        <div className='service_info'>
          <img src={serviceImage3} alt={serviceImage3} />
          <h1>03.</h1>
          <h2>We got you covered if you dont know how to drive.</h2>
          <p>We have experts who are very good at driving. You will be an expert 
            within a short period of learning.
          </p>
        </div>
        <div className='service_info'>
          <img src={serviceImage4} alt={serviceImage4} />
          <h1>04.</h1>
          <h2>We deliver Worldwide.</h2>
          <p>It doesn't matter where you live around the world, your car will get to you 
            within a short period of time.
          </p>
        </div>
      </div>
    </div>
  </> 
}

export default Services