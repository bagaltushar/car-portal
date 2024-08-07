import React from "react";
import BestCarsImage from "../assets/billionphotos1010979min.jpg";
import BestCarsBackground from "../assets/Capture.PNG";
import "../styles/landingpage.css";

const BestCar = () => {
  return (
    <div>
      <div className="container position-relative">
        <div className="col-12 d-flex mt-5">
          <div className="backgroundColorCommon BlackBackground position-absolute">
            hii
          </div>
          <div className="col-8 mt-5">
            <img src={BestCarsImage} width="520px" />
          </div>
          <div className="col-4 mt-5">
            <div
              className="card text-start border-0"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <button className="BestCarsHr"></button>
                <p className="card-title fs-3">Best Car</p>
                <p className="fs-5">Service</p>
                <p className="card-text">
                  A regular service schedule can help keep your car running at
                  it’s best. A regular service schedule can help keep your car
                  running at it’s best.
                </p>
                <button className="btn px-4 backgroundColorCommon text-white ReadMoreBtn shadow-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-6 mt-5">
            <p className="fs-5 fw-bold text-start">Rental Car Services</p>
            <p className="text-start">
              Find the best possible rental car rate. Compare rates worldwide
              and save up to 60% on deals from over 1,053 car rental companies.
            </p>
          </div>
          <div className="col-2 mt-5">
            <i className="bi bi-geo-alt-fill fs-1 "></i>
            <p className="fw-bold">LOCATION</p>
          </div>
          <div className="col-2 mt-5">
            <i className="bi bi-ev-front-fill fs-1"></i>
            <p className="fw-bold">250+ CARS</p>
          </div>
          <div className="col-2 mt-5">
            <i className="bi bi-people-fill fs-1"></i>
            <p className="fw-bold">HAPPY USERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCar;
