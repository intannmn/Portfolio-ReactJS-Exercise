import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import reportWebVitals from "./js/reportWebVitals";

const navbar = ReactDOM.createRoot(document.getElementById("navbar"));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const me = ReactDOM.createRoot(document.getElementById("me"));
me.render(
  <React.StrictMode>
    <Me />
  </React.StrictMode>
);

const aboutme = ReactDOM.createRoot(document.getElementById("aboutme"));
aboutme.render(
  <React.StrictMode>
    <AboutMe />
  </React.StrictMode>
);

const resume = ReactDOM.createRoot(document.getElementById("resume"));
resume.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

const projects = ReactDOM.createRoot(document.getElementById("projects"));
projects.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById("contact"));
contact.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
