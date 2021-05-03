import React from "react";
import Particles from "react-particles-js";

import Fade from "react-reveal/Fade";

import ParticalConfig from "../../Design/ParticalConfig";
import AboutHome from "../AboutHome/AboutHome";
import BlogHome from "../BlogHome/BlogHome";
import Header from "../Header/Header";

import PortfolioHome from "../PortfolioHome/PortfolioHome";
import ResumeHome from "../ResumeHome/ResumeHome";

const Home = () => {
  return (
    <div>
      <div className="bg-dark">
        <div style={{ position: "relative", height: "940px" }}>
          <div
            style={{
              position: "absolute",
              // width: "100vw",
              // height: "100vh",
              left: "7%",
            }}
          >
            <Header></Header>
          </div>
          <div>
            <Particles params={ParticalConfig} />
          </div>
        </div>
      </div>
      <Fade left>
        <PortfolioHome></PortfolioHome>
      </Fade>
      <Fade right>
        <ResumeHome></ResumeHome>
      </Fade>
      <BlogHome></BlogHome>
      <AboutHome></AboutHome>
    </div>
  );
};

export default Home;
