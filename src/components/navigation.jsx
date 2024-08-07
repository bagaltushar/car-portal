import React from "react";
import "../styles/landingpage.css";

const Navigation = () => {
  return (
    <div>
      <div className="backgroundImage">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="#">
              <i className="bi bi-list fs-1 text-white"></i>
            </a>
          </div>
        </nav>
        <div className="col-12 d-flex p-5">
          <div className="col-5 mt-5 text-start">
            <p className="text-white fs-4">Car Service</p>
            <h1 className="Display1 text-white fw-bold MainText">
              TRAVEL IN LUXURY AND STYLE
            </h1>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
