import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextArea from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const ContactUs = () => {
  return (
    <div>
      {/* this is contact us section */}
      <div className="container ">
        <div className="col-12 d-flex mt-5">
          <div className="col-5 text-start mt-4 px-5">
            <h6 className="fw-bold">LOCATION</h6>
            <p className="text-secondary fs-5 mt-4">
              28 Jackson Blvd Ste 1020 Chicago IL 60604-2340{" "}
            </p>
            <h6 className="fw-bold mt-5">FOLLOW UP</h6>
            <div className="logo d-flex mt-3 fs-2">
              <i className="bi bi-facebook" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-twitter" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-instagram" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-google" style={{ cursor: "pointer" }}></i>
            </div>
            <div className="d-flex mt-3">
              <i className="bi bi-c-circle fs-5"></i>{" "}
              <p className="fs-5">2018 privacy policy</p>
            </div>
          </div>
          <div className="col-7 px-5 text-start">
            <h2 className="fw-bold contacttext">CONTACT FORM</h2>
            <div className="mt-4">
              <TextField
                id="filled-hidden-label-small"
                className="mb-4"
                fullWidth
                label="Enter Your Name"
                size="small"
              />
              <TextField
                id="filled-hidden-label-small"
                className="mb-4"
                fullWidth
                label="Enter Your Valid Email-Id"
                size="small"
              />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="your context"
                style={{ width: "100%", height: "1%", padding: "10px" }}
              />
            </div>
            <button className="btn backgroundbtnCommon  mt-3 text-white a">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="footer  mt-5">
        <p className=" container text-white px-5 pt-4 w-25">
          Driving happier car experiences Your key to smoother rides starts here
          😍
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
