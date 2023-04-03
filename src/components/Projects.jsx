import React from "react";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";

function Projects() {
  return (
    <section className="bg-dark py-10">
      <div className="container flex mx-auto px-10">
        <h1 className="text-white text-7xl">My Projects</h1>
        <div className="line-stabilo my-auto mx-20"></div>
      </div>
      <div className="lg:flex items-center justify-center mt-20">
        <div className="px-5 pb-16 lg:pb-0">
          <img className="mx-auto lg:mx-0" src={P1} alt="Elon News" />
          <p className="text-center lg:text-left text-3xl text-white pt-3 lg:pl-3 italic">
            Elon News
          </p>
        </div>
        <div className="px-5 pb-16 lg:pb-0">
          <img className="mx-auto lg:mx-0" src={P2} alt="Clothes" />
          <p className="text-center lg:text-left text-3xl text-white pt-3 lg:pl-3 italic">
            Clothes
          </p>
        </div>
        <div className="px-5">
          <img className="mx-auto lg:mx-0" src={P3} alt="Company Profile" />
          <p className="text-center lg:text-left text-3xl text-white pt-3 lg:pl-3 italic">
            Company Profile
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
