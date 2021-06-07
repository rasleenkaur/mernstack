import React, { useEffect, useState } from "react";
import pic from "../images/undraw_geniuses_9h9g.svg";
import aboutpic from "../images/map-marker-outline_1.png";
import { useHistory } from "react-router-dom";
const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/register");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="outer">
        <div className="container emp-profile">
          <form method="">
            {/* first row */}
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src={userData.name === "Rasleen" ? pic : aboutpic}
                    alt="pic"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head mt-3">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile-rating mt-3 mb-5">
                    RANKINGS : <span>1/10</span>
                  </p>

                  <ul className="nav  nav-pills" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 mt-3">
                <input
                  type="submit"
                  className="profile-edit-button btn btn-outline-secondary rounded-pill"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>

            {/* second row */}
            <div className="row">
              {/* left side url */}
              <div className="col-md-4 ">
                <div className="profile-work ms-5 ps-3 ">
                  <p>WORK LINK</p>
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>

                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=lqrVRKlVLXM"
                    target="_vanshaj"
                  >
                    Youtube
                  </a>
                  <br />
                </div>
              </div>

              {/* right side url */}
              <div className="col-md-8 about-info">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>

                      <div className="col-md-6">
                        <p>fvadvadcvadcsvs</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>

                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>

                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>

                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>

                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>

                      <div className="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Vansha</label>
                      </div>

                      <div className="col-md-6">
                        <p>testings</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>

                      <div className="col-md-6">
                        <p>Vanshaj Sharma</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>

                      <div className="col-md-6">
                        <p>Vanshaj Sharma</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>

                      <div className="col-md-6">
                        <p>Vanshaj Sharma</p>
                      </div>
                    </div>

                    {/* ///////////////////////////////////// */}
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>

                      <div className="col-md-6">
                        <p>Vanshaj Sharma</p>
                      </div>
                    </div>
                    {/* ///////////////////////////////////// */}
                  </div>
                  {/* tab change */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
