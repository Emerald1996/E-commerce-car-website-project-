import React, { useState } from "react";
import "../styles/Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comments: "",
    isHaveDriverLicense: false,
  });
  const [customerData, setCustomerData] = useState([]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.comments
    ) {
      const newData = { ...formData, id: new Date().getTime().toString() };
      setCustomerData([...customerData, newData]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comments: "",
        isHaveDriverLicense: false,
      });
    }
  };

  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="form_container">
      <form>
        <h1>Contact Seller! 🤙 </h1>
        <div className="form-control">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="firstname">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter @Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone number">Phone number</label>
          <input
            type="number"
            id="phone number"
            name="phoneNumber"
            placeholder="enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="firstname">Do you have a Driver's license?</label>
          <input
            type="checkbox"
            id="isHaveDriverLicense"
            name="isHaveDriverLicense"
            checked={formData.isHaveDriverLicense}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
         
          <textarea
            cols={30}
            rows={5}
            type="text"
            id="comments"
            name="comments"
            placeholder="Drop your message"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <Link to="/Confirm" className="button_link">
          <button className="btn" onClick={handleSubmit}>
            contact seller
          </button>
        </Link>
      </form>

      {customerData.map((newCustomerData) => {
        const {
          id,
          firstName,
          lastName,
          email,
          phoneNumber,
          comments,
          isHaveDriverLicense,
        } = newCustomerData;
        return (
          <>
            <div
              className="confirm_container"
              key={id}
              id={openModal ? "closeModal" : "openModal"}
            >
              <button className="cancel_btn" onClick={handleModalClick}>
                X
              </button>
              <div className="confirm_container_details">
                <h4>Firstname: {firstName}</h4>
                <h4>Lastname: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>phoneNumber: {phoneNumber}</h4>
                <h4>Message: {comments}</h4>
                <h4>
                  Any License? :{" "}
                  {isHaveDriverLicense
                    ? "I have a License"
                    : "I dont have a License"}
                </h4>
                <Link to="/ThankYou" className="button_link">
                  <button className="btn" style={{ color: "black" }}>
                    confirm
                  </button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Form;
