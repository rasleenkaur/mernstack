import React, { useContext, useState } from "react";
import Loginpic from "../images/Register.svg";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credential");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      history.push("/");
    }
  };

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
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group form-floating">
                <input
                  class="form-control"
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  onClick={loginUser}
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
