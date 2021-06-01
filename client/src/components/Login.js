import React from "react";
import Loginpic from "../images/Register.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="main-div">
        <div className=" signin-content row">
          <div className="sign-image col">
            <figure>
              <img src={Loginpic} alt="login pic" />
            </figure>
            <NavLink to="/signup" className="signup-image-link ms-5">
              Create an Account
            </NavLink>
          </div>
          <div className="signin-form col ">
            <h2 className="form-title">Sign In</h2>
            <form className="register-form" id="register-form">
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

              <div className="form-button pt-2">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit btn btn-outline-primary w-75"
                  value="Log In"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
