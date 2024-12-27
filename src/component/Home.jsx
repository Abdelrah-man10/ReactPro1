import React from "react";
import homeImg from "../assets/avataaars.svg";
const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="row">
            <img src={homeImg} alt="" />
            <h1 className="text-center text-white">START FRAMEWORK</h1>
            <div
              id="title"
              className="d-flex align-items-center justify-content-center gap-3"
            >
              <p></p>
              <i class="bi bi-star-fill text-white"></i>
              <p></p>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
