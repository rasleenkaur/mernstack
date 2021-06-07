import React, { useState } from "react";
import signpic from "../images/Register.svg";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
        // name:name, email:email .........etc
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Succesful");
      history.push("/register");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className=" signup-content row">
          <div className="signup-form col ">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  autoComplete="off"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
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
                  value={user.email}
                  onChange={handleInputs}
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
                  value={user.phone}
                  onChange={handleInputs}
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
                  value={user.work}
                  onChange={handleInputs}
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
                  value={user.password}
                  onChange={handleInputs}
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
                  value={user.cpassword}
                  onChange={handleInputs}
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
                  onClick={PostData}
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
