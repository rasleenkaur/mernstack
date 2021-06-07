import React, { useEffect, useState } from "react";
import phone from "../images/cellphone.png";
import email from "../images/at.png";
import loc from "../images/map-marker-outline_1.png";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={phone} alt="phone" />
                <div className="contact_info_content">
                  <div className="cantact_info_title">Phone</div>
                  <div className="cantact_info_text">+91 9191 919191</div>
                </div>
              </div>
              {/* Email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={email} alt="email" />
                <div className="contact_info_content">
                  <div className="cantact_info_title">Email</div>
                  <div className="cantact_info_text">
                    thevanzzstore@mail.com
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={loc} alt="address" />
                <div className="contact_info_content">
                  <div className="cantact_info_title">Address</div>
                  <div className="cantact_info_text">Republic of India </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* Contact us form */}
        <div className="contact_form contact-content ">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_title">
                    <h2>Get In Touch</h2>
                  </div>
                  <form method="POST" id="contact_form">
                    <div className="contact_form_names d-flex justify-content-between align-items-between">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="contact_form_name"
                          className="contact_form_name input_field form-control"
                          name="name"
                          value={userData.name}
                          onChange={handleInputs}
                          placeholder="Your Name"
                          required="true"
                        />
                        <label for="contact_form_name">Your Name</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="email"
                          id="contact_form_email"
                          className="contact_form_email input_field form-control"
                          name="email"
                          value={userData.email}
                          onChange={handleInputs}
                          placeholder="Your Email"
                          required="true"
                        />
                        <label for="contact_form_email">Email address</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="tel"
                          id="contact_form_phone"
                          className="contact_form_phone input_field form-control"
                          name="phone"
                          value={userData.phone}
                          onChange={handleInputs}
                          placeholder="Your Phone Number"
                          required="true"
                        />
                        <label for="contact_form_phone">
                          Your Phone Number
                        </label>
                      </div>
                    </div>
                    <div className="contact_form_text py-4 mt-5">
                      <div class="form-floating">
                        <textarea
                          className="text_field contact_form_message form-control"
                          name="message"
                          value={userData.message}
                          onChange={handleInputs}
                          placeholder="Message"
                          id="text_field"
                          rows="40"
                          cols="30"
                          style={{
                            display: "block",
                            height: "150px",
                            // border: "none",
                            border: "1px solid #757575",
                          }}
                        ></textarea>
                        <label for="text_field">Message</label>
                      </div>
                    </div>

                    <div className="contact_form_button py-2">
                      <button
                        type="submit"
                        class="button contact_submit_button btn btn-outline-dark btn-lg"
                        onClick={contactForm}
                        style={{
                          width: "200px",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
