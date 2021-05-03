import React from "react";
import profile from "../../../images/rishad.png";
import Typical from "react-typical";
import "./Header.css";
const Header = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "125px" }}>
      <div className="row">
        <div className="col-md-7 ">
          <h1 className="text-white header_text_box ">
            Hi <br />
            I'm Rishad{" "}
            <span style={{ color: "#3498db" }}>
              <Typical
                steps={[
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Electrical Engineer",
                  600,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
          </h1>
        </div>
        <div className="col-md-5">
          <img
            className="image-fluid w-100"
            style={{ marginLeft: "100px" }}
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
