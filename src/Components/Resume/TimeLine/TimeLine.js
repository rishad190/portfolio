import React from "react";
import "./TimeLine.css";

const TimeLine = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-dark text-white">
            <div class="card-body">
              <div id="content">
                <ul class="timeline">
                  <li class="event" data-date="2021 – Present">
                    <h3>Full-Stack Web Developer</h3>
                    <p>Programming Hero, Dhaka</p>
                  </li>
                  <li class="event" data-date="2016 – 2020">
                    <h3>
                      Bachelor of Science in Electrical and Electronics
                      Engineering
                    </h3>
                    <p>
                      Result- CGPA: 3.72
                      <br />
                      American International University-Bangladesh (AIUB)
                    </p>
                  </li>
                  <li class="event" data-date="2013 – 2015">
                    <h3>Higher Secondary Certificate </h3>
                    <p>
                      Result- GPA: 4.83
                      <br />
                      St. Joseph Higher Secondary School Dhaka
                    </p>
                  </li>
                  <li class="event" data-date="2011 – 2013">
                    <h3>Secondary School Certificate </h3>
                    <p>
                      Result- GPA: 5<br />
                      Dhaka Collegiate School ,Dhaka
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
