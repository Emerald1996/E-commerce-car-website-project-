import React, { useState } from "react";
import { Link } from "react-router-dom";
import { datas } from "../carProduct";
import "../styles/BuyCars.css";

const BuyCars = () => {
  const [carProducts] = useState(datas);

  return carProducts.map((product) => {
    console.log(product);
    const { id, image, name, price } = product;
      return (
        <div key={id} className="buy_container">
          <div className="car_products_container">
            <div className="car_products">
              <img src={image} alt={image} />
              <div className="car_products_details">
                <h2>{name}</h2>
                <div className="buy_car_link">
                  <h5>{price}</h5>
                  <Link to="/Form">
                    <button className="buy_btn">BUY NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  });
};

export default BuyCars;
