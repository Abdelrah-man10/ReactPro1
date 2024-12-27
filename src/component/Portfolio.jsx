import React from "react";
import img1 from "../assets/poert1.png";
import img2 from "../assets/port2.png";
import img3 from "../assets/port3.png";

const Portfolio = () => {
  let imageArr = [img1, img2, img3, img1, img2, img3];
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1>portfolio component</h1>
        <div
          id="title"
          className="d-flex align-items-center justify-content-center gap-3"
        >
          <p className="bg-black"></p>
          <i class="bi bi-star-fill text-black"></i>
          <p className="bg-black"></p>
        </div>
        <div className="container">
          <div className="row pt-3">
            {imageArr.map((img, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        {/* <i class="bi bi-plus-circle"></i> */}
      </section>
    </>
  );
};

export default Portfolio;
