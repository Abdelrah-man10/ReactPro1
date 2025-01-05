import React from "react";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-3">
        <div className="container">
          <a className="navbar-brand " href="/home">
            <h1 className="fs-3 mb-0">START FRAMEWORK</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <h5>About</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  <h5>Portfolio</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <h5>Contact</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MyNavbar;
