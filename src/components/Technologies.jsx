import React from "react";
import Tech1 from "../assets/d459afc2165bd356465b67137677beca.png";
import Tech2 from "../assets/fea9470f91f7e42de415eb02d5347e26.png";
import Tech3 from "../assets/01946e8223d3360e8f4566195ce53ab1.png";
import Tech4 from "../assets/a320795635bf6543ba2a588ababe6830.png";
import Tech5 from "../assets/915548cb61ae31d2aa45ae8cbc9dc5e8.png";
import Tech6 from "../assets/pexelsphoto1545743.jpeg";

const Technologies = () => {
  return (
    <div>
      <h2 className="text-danger mb-5">Our Technologies</h2>
      <div className="container OurTechnologies mb-5">
        <div className="card border-0">
          <img src={Tech1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card border-0">
          <img src={Tech2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card border-0">
          <img src={Tech3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card border-0">
          <img src={Tech4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card border-0">
          <img src={Tech5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="col-12 d-flex align-items-center">
          <div className="col-6 mt-5">
            <img src={Tech6} alt="" width="80%" />
          </div>
          <div className="col-6 mt-5 text-start">
            <h1 className="text-danger">History Of Red Oval</h1>
            <p className="text-secondary">
              Since 1939, Peterbilt has consistently set new standards for
              quality, reliability, performance and innovation. Our dedicated
              focus on serving the full range of customer needs and providing
              industry-leading satisfaction extends well beyond the sale of a
              new truck. Peterbilt and its dealer network support customers
              through exceptional service, parts sales, financing, leasing and
              rental, and advanced technologies. 
            </p>
            <p className="text-secondary fw-bold">
              Today, you can purchase a Red Oval Certified truck with ease
              knowing your truck is the next best thing to new.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
