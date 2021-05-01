import React from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_hYcCEKE1swKnj0zgWshjG");
const AboutHome = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    sendForm("service_tfz8mpi", "template_qz14l69", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <section className="bg-dark text-white " style={{ padding: "50px 0" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div style={{ padding: "50px" }}>
              <h3 style={{ fontSize: "50px", marginBottom: "25px" }}>
                Contact Me
              </h3>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      aria-label="First name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div class="col">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Last name"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label"></label>
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                  ></label>
                  <textarea
                    placeholder="Message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    {...register("text")}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.530618243177!2d90.42223917503297!3d23.702217888452434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ba1dbd60b7%3A0xc2d9a16ec3dc867b!2sGandaria%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1619880863692!5m2!1sen!2sbd"
                style={{ border: "0", width: "100%", height: "900px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
