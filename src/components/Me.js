import React from "react";
import "../css/style.css";
import "../css/tailwind.css";
import image from "../asset/about.jpeg";

function Me() {
  return (
    <div className="bg-dark">
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
          >
            Contact Me
          </button>
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
    </div>
  );
}

export default Me;
