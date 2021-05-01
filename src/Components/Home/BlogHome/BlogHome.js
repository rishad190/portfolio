import React from "react";

const BlogHome = () => {
  return (
    <section style={{ margin: "100px 0" }}>
      <h3 className="text-center" style={{ fontSize: "50px" }}>
        Blog
      </h3>
      <div className="container">
        <div className="row">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  className=" img-fluid w-100"
                  src="https://neilpatel.com/wp-content/uploads/2020/10/how-to-start-a-blog-featured-image.jpg"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
