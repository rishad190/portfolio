import React from "react";
import computer from "../../../images/computer.png";
import food from "../../../images/food.png";
import book from "../../../images/book.png";
import rider from "../../../images/rider.png";
import rock from "../../../images/rock.png";

const Portfolio = () => {
  return (
    <section className="bg-dark ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h3 className="text-white">Portfolio</h3>
            </div>
            <div>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={computer} className=" w-100" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Computer Repair </h5>
                      <p class="card-text">
                        <ul>
                          <li>
                            Built a full stack web app that allows users to book
                            a service and pay with a credit card from a home
                            page.
                          </li>
                          <li>
                            Users have their own dashboard where they can check
                            the status of their product and post reviews.
                          </li>
                          <li>
                            Admin can add, delete, and upgrade services, as well
                            as update the status of consumer products. Also, add
                            other admins to the login admin panel.
                          </li>
                          <li>
                            Used: JavaScript, React, Mongo DB, Express, React
                            router, HTML/CSS{" "}
                          </li>
                        </ul>
                      </p>
                      <a
                        className="btn btn-primary me-2"
                        href=" https://computerrepair-e4792.web.app/"
                      >
                        LIVE LINK
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://github.com/rishad190/computer-repair"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={book} className=" w-100" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Book Shop</h5>
                      <p class="card-text">
                        <ul>
                          <li>
                            Created a full-stack web app that allows users to
                            purchase a book and save all book purchasing data to
                            their dashboard.
                          </li>
                          <li>
                            Only the administrator has access to the admin panel
                            and can add, delete, and change all book
                            information. All book information is saved in a
                            database, and all data is dynamically displayed on
                            the home page.
                          </li>

                          <li>
                            Used: JavaScript, React, Mongo DB, Express, React
                            router, HTML/CSS
                          </li>
                        </ul>
                      </p>
                      <a
                        className="btn btn-primary me-2"
                        href=" https://bookshop-73758.web.app/"
                      >
                        LIVE LINK
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://github.com/rishad190/Book-shop"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={rider} className=" w-100" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Riders-Bangladesh</h5>
                      <p class="card-text">
                        <ul>
                          <li>
                            Users may build an account using their email address
                            or a Google account, and then choose any mode of
                            transportation.
                          </li>
                          <li>
                            It all comes down to firebase authentication and
                            react router. A website can be easily created and
                            accessed by the user.
                          </li>
                          <li>
                            Used: JavaScript, React, React router, HTML/CSS
                          </li>
                        </ul>
                      </p>
                      <a
                        className="btn btn-primary me-2"
                        href="https://friendly-hopper-caa5fe.netlify.app/"
                      >
                        LIVE LINK
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://github.com/rishad190/Rider-bd"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={food} className=" w-100" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Hungry Master</h5>
                      <p class="card-text">
                        <ul>
                          <li>
                            You can search for any food recipe, and it will
                            appear on this website.
                          </li>
                          <li>
                            You can select any item to see all food recipes with
                            details.On the website, all items are dynamically
                            displayed.
                          </li>
                          <li>Used: JavaScript, HTML,CSS</li>
                        </ul>
                      </p>
                      <a
                        className="btn btn-primary me-2"
                        href="https://rishad190.github.io/hungry-master/"
                      >
                        LIVE LINK
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://github.com/rishad190/hungry-master"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={rock} className=" w-100" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Hard Rock </h5>
                      <p class="card-text">
                        <ul>
                          <li>
                            You can find any song by searching its name, and you
                            can also listen to it on this website.
                          </li>

                          <li>Used: JavaScript, HTML,CSS </li>
                        </ul>
                      </p>
                      <a
                        className="btn btn-primary me-2"
                        href=" https://rishad190.github.io/hard-rock/"
                      >
                        LIVE LINK
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://github.com/rishad190/hard-rock"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
