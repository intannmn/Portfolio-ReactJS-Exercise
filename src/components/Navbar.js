import React from "react";
import "../css/style.css";
import "../css/tailwind.css";
import logo from "../asset/navbar.svg";

function Navbar() {
  const navStyle = { width: "100px", textAlign: "center" };
  return (
    <div className="flex bg-dark text-white">
      <img className="mr-auto ml-10" width="120px" src={logo} alt="logo" />
      <ul className="flex items-center justify-end text-stabilo text-xl py-5 mr-10">
        <li style={navStyle}>
          <a className="nav-button" href="#me">
            <span>Home</span>
            <span className="nav-hover">/ Home /</span>
          </a>
        </li>
        <li style={navStyle}>
          <a className="nav-button" href="#aboutme">
            <span>About</span>
            <span className="nav-hover">/ About /</span>
          </a>
        </li>
        <li style={navStyle}>
          <a className="nav-button" href="#resume">
            <span>Resume</span>
            <span className="nav-hover">/ Resume /</span>
          </a>
        </li>
        <li style={navStyle}>
          <a className="nav-button" href="#projects">
            <span>Projects</span>
            <span className="nav-hover">/ Projects /</span>
          </a>
        </li>
        <li style={navStyle}>
          <a className="nav-button" href="#contact">
            <span>Contact</span>
            <span className="nav-hover">/ Contact /</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
