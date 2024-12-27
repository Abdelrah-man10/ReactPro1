import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer pt-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card w-100">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card w-100">
                <h2>AROUND THE WEB</h2>
                <div className="icon mt-3">
                  <span>
                    <i class="bi bi-facebook"></i>
                  </span>
                  <span>
                    <i class="bi bi-twitter"></i>
                  </span>
                  <span>
                    <i class="bi bi-linkedin"></i>
                  </span>
                  <span>
                    <i class="bi bi-globe"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card w-100">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created{" "}
                  <br /> by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <p>Copyright © Your Website 2021</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
