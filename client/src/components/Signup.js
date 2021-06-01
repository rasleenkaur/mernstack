import React from "react";
import signpic from "../images/Register.svg";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="main-div">
        <div className=" signup-content row">
          <div className="signup-form col ">
            <h2 className="form-title">Sign up</h2>
            <form className="register-form" id="register-form">
              <div className="form-group form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  autoComplete="off"
                  placeholder="name"
                />
                <label for="name" htmlFor="name">
                  <i class="zmdi zmdi-account pe-1 "></i>
                  Your Name
                </label>
              </div>

              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="name"
                />
                <label htmlFor="email">
                  <i class="zmdi zmdi-email pe-1 "></i>
                  Your Email
                </label>
              </div>

              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="name"
                />
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk  pe-1 "></i>
                  Mobile Number
                </label>
              </div>
              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="name"
                />
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow  pe-1 "></i>
                  Your Occupation
                </label>
              </div>

              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="name"
                />
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock pe-1 "></i>
                  Password
                </label>
              </div>

              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="text"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="name"
                />
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock pe-1 "></i>
                  Confirm Password
                </label>
              </div>
              <div className="form-button pt-2">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit btn btn-outline-primary w-75"
                  value="Register"
                ></input>
              </div>
            </form>
          </div>
          <div className="sign-image col">
            <figure>
              <img src={signpic} alt="registration pic" />
            </figure>
            <NavLink to="/register" className="signup-image-link">
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
