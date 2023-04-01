import "../css/tailwind.css";
import "../css/style.css";
import image from "../asset/resume.png";

function Resume() {
  return (
    <div className="bg-dark py-20">
      <div className="container 2xl:flex mx-auto px-10">
        <div className="hidden 2xl:block">
          <img src={image} alt="Resume" width={"800px"} />
        </div>
        <div className="mx-auto hidden 2xl:block">
          <p className="text-white text-9xl">
            My
            <br />
            Resume
          </p>
          <a href={image} download>
            <button className="mt-10 py-3 px-5 font-semibold bg-stabilo text-dark text-xl hover:bg-cyan-700">
              Download CV
            </button>
          </a>
        </div>
        <div className="flex pb-20">
          <div className="line-stabilo my-auto mx-20"></div>
          <p className="text-white text-7xl block 2xl:hidden">My Resume</p>
        </div>
        <div className="block 2xl:hidden">
          <img className="mx-auto" src={image} alt="Resume" width={"800px"} />
        </div>
      </div>
      <a href={image} download>
        <button className="block 2xl:hidden mt-20 mx-auto py-3 px-5 font-semibold bg-stabilo text-dark hover:bg-cyan-700">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default Resume;
