import React from "react";
import { Link } from "react-router-dom";
import ProgressLine from "../../Design/ProgressLine";
import "./ResumeHome.css";

const ResumeHome = () => {
  return (
    <section className="bg-dark text-white" style={{ paddingBottom: "50px" }}>
      <h2
        className="text-center"
        style={{ fontSize: "50px", padding: "50px 0" }}
      >
        Resume
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>PROGRAMMING SKILL:</h3>
            <div className="skill_box_all">
              <div className="skill_box ">
                <h3>Frontend</h3>
                <ProgressLine
                  label="Html/CSS/Bootstrap"
                  visualParts={[
                    {
                      percentage: "90%",
                      color: "red",
                    },
                  ]}
                />
                <ProgressLine
                  label="Javascript"
                  visualParts={[
                    {
                      percentage: "80%",
                      color: "blue",
                    },
                  ]}
                />
                <ProgressLine
                  label="ReactJs"
                  visualParts={[
                    {
                      percentage: "78%",
                      color: "yellow",
                    },
                  ]}
                />
                <ProgressLine
                  label="TypeScript"
                  visualParts={[
                    {
                      percentage: "55%",
                      color: "green",
                    },
                  ]}
                />
              </div>

              <div className="skill_box">
                <h3>Backend</h3>
                <ProgressLine
                  label="NodeJs"
                  visualParts={[
                    {
                      percentage: "80%",
                      color: "#4cd137",
                    },
                  ]}
                />
                <ProgressLine
                  label="Express"
                  visualParts={[
                    {
                      percentage: "75%",
                      color: "#7f8fa6",
                    },
                  ]}
                />
                <ProgressLine
                  label="MongoDB"
                  visualParts={[
                    {
                      percentage: "70%",
                      color: "#273c75",
                    },
                  ]}
                />
                <ProgressLine
                  label="Postman"
                  visualParts={[
                    {
                      percentage: "55%",
                      color: "tomato",
                    },
                  ]}
                />
              </div>

              <div className="skill_box">
                <h3>Deploy Tools</h3>
                <ProgressLine
                  label="Github"
                  visualParts={[
                    {
                      percentage: "90%",
                      color: "#D6A2E8",
                    },
                  ]}
                />
                <ProgressLine
                  label="Firebase"
                  visualParts={[
                    {
                      percentage: "80%",
                      color: "#FD7272",
                    },
                  ]}
                />
                <ProgressLine
                  label="Heroku"
                  visualParts={[
                    {
                      percentage: "76%",
                      color: "#1B9CFC",
                    },
                  ]}
                />
                <ProgressLine
                  label="Netlify"
                  visualParts={[
                    {
                      percentage: "72%",
                      color: "red",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/resume" className="btn btn-outline-light">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResumeHome;
