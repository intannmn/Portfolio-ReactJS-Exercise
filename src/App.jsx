import React from "react";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./css/style.css";
import "./css/tailwind.css";

function App() {
  return (
    <>
      <Navbar />
      <Me />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
