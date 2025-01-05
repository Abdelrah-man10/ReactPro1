import React from "react";
import MyNavbar from "./component/MyNavbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
