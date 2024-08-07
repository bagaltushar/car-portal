import React from "react";

const Trims = () => {
  return (
    <div>
      <div className="container-fluid trimbg columnsFront pe-0 mb-5">
        {/* <div className="col-8 columnsFront"> */}
        <div className="card firstCard border-0">
          {/* <img src={first} className="card-img-top" alt="..." /> */}
        </div>
        <div className="card bg-white border-0">
          <div className="card-body text-start">
            <h1 className="card-title">R8 Coupe Trims</h1>
            <button className="btn px-4 backgroundColorCommon text-white ReadMoreBtn shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="card thirdCard border-0 bg-danger">
          <div className="card-body thirdCardBody">
            <h1 className="card-title text-white pe-5 text-start">
              Bask in the limelight
            </h1>
            <p className="text-white text-start">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
        <div className="card lastCard border-0">
          {/* <img src={second} className="card-img-top" alt="..." /> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Trims;
