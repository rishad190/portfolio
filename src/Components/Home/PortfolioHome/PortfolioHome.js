import React from "react";
import "./PortfolioHome.css";
import computer from "../../../images/computer.png";
import book from "../../../images/book.png";
import rider from "../../../images/rider.png";
import rock from "../../../images/rock.png";
import { Link } from "react-router-dom";

const PortfolioHome = () => {
  return (
    <section className="" style={{ margin: "100px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "50px" }}>My Portfolio</h2>
        <p>
          A small Gallary of my recent project choose by me . I've done them all
          alone .It's only drop of ocean compared to entire list.Interested to
          see more? Vist my portfolio page.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio_home_box">
              <div class="card bg-dark text-white ">
                <img src={computer} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Computer Repair</h5>
                  <p class="card-text">
                    Built a full stack web app that allows users to book a
                    service and pay with a credit card from a home page.
                    <br />
                    <br />
                    Used: JavaScript, React, Mongo DB, Express, React router,
                    HTML/CSS
                  </p>

                  <a
                    href="https://computerrepair-e4792.web.app/"
                    className="btn btn-primary"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img src={book} class="card-img img-fluid h-100" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Book Shop</h5>
                  <p class="card-text">
                    Created a full-stack web app that allows users to purchase a
                    book and save all book purchasing data to their dashboard.
                    <br />
                    <br />
                    Used: JavaScript, React, Mongo DB, Express, React router,
                    HTML/CSS
                  </p>
                  <a
                    href="https://bookshop-73758.web.app/"
                    className="btn btn-primary"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img src={rider} class="card-img h-100" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Riders-Bangladesh</h5>
                  <p class="card-text">
                    Users may build an account using their email address or a
                    Google account, and then choose any mode of transportation.
                    <br />
                    <br />
                    Used: JavaScript, React, React router,Firebase, HTML/CSS
                  </p>
                  <a
                    href="https://friendly-hopper-caa5fe.netlify.app/"
                    className="btn btn-primary"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img src={rock} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Hard Rock</h5>
                  <p class="card-text">
                    You can find any song by searching its name, and you can
                    also listen to it on this website.
                  </p>
                  <a
                    href=" https://rishad190.github.io/hard-rock/"
                    className="btn btn-primary"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/portfolio" className="btn btn-outline-success">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;
