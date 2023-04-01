import React from "react";

function AboutMe() {
  return (
    <div className="bg-dark py-40">
      <div className="container md:flex mx-auto px-10">
        <div className="text-white">
          <h1 className="text-5xl">About Me</h1>
          <p id="isiAbout" className="text-2xl mt-20 text-stabilo text-justify">
            {
              "<p> I have a commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience. </p>"
            }
          </p>
        </div>
        <div className="text-white sm:ml-0 md:ml-20 lg:ml-40 xl:ml-52">
          <div className="line-stabilo my-20 md:my-5"></div>
          <p className="text-3xl text-justify">
            A front-end developer’s role is to combine design and business logic
            to achieve a user-facing product. A wide skill set is necessary to
            produce a quality user experience that leads to meeting business
            goals.
          </p>
          <ul className="list-disc ml-10 my-10 text-2xl">
            <li>
              Create responsive websites that work on a wide range of devices
            </li>
            <li>Assist with production of clean and functional design</li>
            <li>Bridge communication gap between designers and developers</li>
            <li>
              Integrate your website into an easy to use content management
              system
            </li>
          </ul>
          <p className="text-3xl text-justify">
            The work I provide is of highest quality, fully responsive, and
            tested in a wide range of devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
