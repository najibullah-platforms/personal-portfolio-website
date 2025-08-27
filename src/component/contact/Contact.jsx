import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "123b4928-4889-4845-8803-958a21966448");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
            tenetur labore, iure amet ducimus alias eligendi nesciunt quo
            dolorem quos perferendis, sit iste. Quod minima expedita accusantium
            ea.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>najiullah@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>033054 030504</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>rawilppnid pakistan sadder</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter Your email" name="email" />
          <label htmlFor="">Message</label>
          <textarea name="message" placeholder="Enter Your message" rows="8" />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
