import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/navbar.svg";

function Navbar() {
  const navStyle = { width: "100px", textAlign: "center" };
  return (
    <nav
      className="flex bg-dark text-white"
      style={{ position: "fixed", top: 0, width: "100%" }}
    >
      <img className="mr-auto ml-10" src={logo} alt="logo" width="120px" />
      <ul className="flex items-center justify-end text-stabilo text-xl py-5 mr-10">
        <li style={navStyle}>
          <Link
            to="me"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1000}
            className="nav-button"
          >
            <span>Home</span>
            <span className="nav-hover">/ Home /</span>
          </Link>
        </li>
        <li style={navStyle}>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1000}
            className="nav-button"
          >
            <span>About</span>
            <span className="nav-hover">/ About /</span>
          </Link>
        </li>
        <li style={navStyle}>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1000}
            className="nav-button"
          >
            <span>Resume</span>
            <span className="nav-hover">/ Resume /</span>
          </Link>
        </li>
        <li style={navStyle}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1000}
            className="nav-button"
          >
            <span>Projects</span>
            <span className="nav-hover">/ Projects /</span>
          </Link>
        </li>
        <li className="hidden md:block" style={navStyle}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1000}
            className="nav-button"
          >
            <span>Contact</span>
            <span className="nav-hover">/ Contact /</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
