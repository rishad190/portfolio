import React from "react";
import profile from "../../../images/NEW.jpg";
import ProgressLine from "../../Design/ProgressLine";
import computer from "../../../images/computer.png";
import book from "../../../images/book.png";
import rider from "../../../images/rider.png";
import rock from "../../../images/rock.png";
import TimeLine from "../TimeLine/TimeLine";

const Resume = () => {
  return (
    <section className="bg-dark text-white ">
      <div className="container">
        <div className="row">
          <h1>RESUME</h1>
          <div className="col-md-6">
            <h2>MD. RISHAD KHAN </h2>
            <p>Jr. Web Developer</p>
            <p>Mobile number: 01775984147</p>

            <p>Address: 33/c Satish Sarkar Road ,100 Katha, Dhaka-1204</p>
            <p>Email: rishadkhan190@gmail.com </p>
            <a href="https://github.com/rishad190">GitHub</a>
            <a href="https://www.linkedin.com/in/md-rishad-khan-6008a9157/">
              LinkedIn
            </a>
            <p>Date of birth: February 19,1997</p>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid w-50 " src={profile} alt="" />
          </div>
        </div>
        <div className="row">
          <div
            style={{
              borderTop: "1px solid white",
              marginTop: "25px",
              paddingTop: "10px",
            }}
          >
            <h2>CAREER OBJECTIVE</h2>
            <p>
              Dedicate, energetic and motivated team player seeking a career
              that would enable me to utilize into the Web developing field.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3
              style={{
                borderTop: "1px solid white",
                marginTop: "25px",
                paddingTop: "10px",
              }}
            >
              PROGRAMMING SKILL:
            </h3>
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
          <h2
            style={{
              borderTop: "1px solid white",
              marginTop: "25px",
              paddingTop: "10px",
            }}
          >
            PROJECTS
          </h2>
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
                    Users have their own dashboard where they can check the
                    status of their product and post reviews.
                    <br /> Admin can add, delete, and upgrade services, as well
                    as update the status of consumer products. Also, add other
                    admins to the login admin panel.
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
                    Only the administrator has access to the admin panel and can
                    add, delete, and change all book information. All book
                    information is saved in a database, and all data is
                    dynamically displayed on the home page.
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
                    It all comes down to firebase authentication and react
                    router. A website can be easily created and accessed by the
                    user.
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
                    <br />
                    Used: JavaScript,HTML,CSS
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
          <h2
            style={{
              borderTop: "1px solid white",
              marginTop: "25px",
              paddingTop: "10px",
            }}
          >
            {" "}
            EXTRA-CURRICULAR ACTIVITIES
          </h2>
          <div className="col-md-12">
            <ul>
              <li>Workshop on line follower robot making at BUET.</li>
              <li>PCB design at NSU</li>
              <li>Line follower builder </li>
              <li>Robosocer builder</li>
              <li>Photographer </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h2
            style={{
              borderTop: "1px solid white",
              marginTop: "25px",
              paddingTop: "10px",
            }}
          >
            EDUCATION
          </h2>
          <TimeLine></TimeLine>
        </div>
      </div>
    </section>
  );
};

export default Resume;
