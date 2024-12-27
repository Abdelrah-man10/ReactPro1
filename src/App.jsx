import React from "react";
import MyNavbar from "./component/MyNavbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
