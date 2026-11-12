import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="app-shell">
      <BlurBlob position={{ top: "12%", left: "70%" }} size={{ width: "30%", height: "40%" }} />
      <div className="background-grid" aria-hidden="true" />
      <div className="app-content">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
