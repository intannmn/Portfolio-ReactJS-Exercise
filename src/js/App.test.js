import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import Me from "../components/Me";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

test("renders learn react link", () => {
  render(<Navbar />);
  render(<Me />);
  render(<AboutMe />);
  render(<Resume />);
  render(<Projects />);
  render(<Contact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
