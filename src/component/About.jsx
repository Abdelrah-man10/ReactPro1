import React from "react";

const About = () => {
  return (
    <>
      <section className="about py-4" id="about">
        <div className="container">
          <div className="row py-5">
            <h1 className="text-center">ABOUT COMPONENT</h1>
            <div
              id="title"
              className="d-flex align-items-center justify-content-center gap-3"
            >
              <p></p>
              <i class="bi bi-star-fill text-white"></i>
              <p></p>
            </div>
            <div className="comp mt-3">
              <div className="row w-100 justify-content-between flex-wrap">
                <div className="col-md-6 col-12 mb-3">
                  <p className="w-100">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <p className="w-100">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
