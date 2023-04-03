import React from "react";
import image from "../assets/about.jpeg";
import logoReact from "../assets/react.png";
import logoTailwind from "../assets/tailwind.webp";

function Me() {
  return (
    <section id="me" className="bg-dark">
      <div className="container mx-auto px-10 2xl:flex pt-32 pb-10">
        <div className="mx-auto mb-20 2xl:hidden" style={{ maxWidth: "700px" }}>
          <img
            className="rounded-full"
            src={image}
            alt="Intan Meilanie Nugraha"
            width="2000px"
          />
        </div>
        <div className="text-white">
          <h1 className="text-8xl tracking-wider">
            Bring your brand to life with our help
          </h1>
          <p className="pt-5 text-3xl tracking-wide">
            In your role as a professional web developer, you’re up for just
            about any website-building challenge.
          </p>
          <button
            className="mt-16 py-3 px-5 font-semibold bg-stabilo text-dark text-xl hover:bg-cyan-700"
            onClick={() =>
              window.open("https://www.whatsapp.com/?lang=id", "_blank")
            }
            rel="noreferrer"
          >
            Contact Me
          </button>
          <div className="flex items-center mt-20">
            <p>TECH :</p>
            <img className="ml-3" src={logoReact} alt="React" width={"30px"} />
            <img
              className="ml-2"
              src={logoTailwind}
              alt="Tailwind"
              width={"30px"}
            />
          </div>
        </div>
        <div className="ml-64 hidden 2xl:block">
          <img
            className="rounded-full"
            src={image}
            alt="Intan Meilanie Nugraha"
            width="2000px"
          />
        </div>
      </div>
    </section>
  );
}

export default Me;
