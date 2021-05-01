import React from "react";
import Particles from "react-particles-js";

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
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Particles params={ParticalConfig} />
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Header></Header>
          </div>
        </div>
      </div>
      <PortfolioHome></PortfolioHome>
      <ResumeHome></ResumeHome>
      <BlogHome></BlogHome>
      <AboutHome></AboutHome>
    </div>
  );
};

export default Home;
