import React from "react";
import Service1 from "../assets/21421.jpg";
import Service2 from "../assets/stylishblackwomancarsalon_115721426.jpg";
import Service3 from "../assets/lamborghinicarspeedprestige38570.jpeg";

const Service = () => {
  return (
    <div>
      <div className="container-fluid backgroundColorCommon position-relative serviceContainer mb-5">
        <div className="container">
          <div className="bg-secondary service"></div>
          <div className="col-12 d-flex">
            <div className="col-6 mt-5">
              <img src={Service1} alt="" width="45%" />
              <div className="card backgroundColorCommon border-0 text-start w-50 mx-auto secondService mt-4">
                <div className="card-body py-5 px-4">
                  <p className="card-title text-white fw-bold">
                    Search 36,000+ Car Rental Locations Worldwide
                  </p>
                  <p className="card-text text-white fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    nullam nunc justo sagittis suscipit ultrices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 mt-5 text-start mb-5">
              <div className="card backgroundColorCommon border-0 text-start">
                <div className="card-body">
                  <p className="card-title text-white">Car Rental</p>
                  <p className="card-subtitle mb-2 fs-4 text-muted">Service</p>
                  <p className="card-text text-white">
                    A regular service schedule can help keep your car running at
                    it’s best. A regular service schedule can help keep your car
                    running at it’s best.
                  </p>
                </div>
              </div>
              <img src={Service2} alt="" width="80%" className="mt-5" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-8">
              <img src={Service3} alt="" width="100%" />
            </div>
            <div className="col-4 text-end">
              <p className="fs-1 text-white fw-bold">
                Safe. Relaxing. Good to ride in.
              </p>
              <button className="btn px-4 btn-secondary ReadMoreBtn shadow-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
