import React from "react";
import TechCarousel from "../components/TechCarousel";

function About() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-2">
        I’m a Web Developer with hands-on experience in full-stack development using Ruby on Rails and ReactJS.
      </p>
      <p className="mb-4">
        Passionate about clean code, team collaboration, and continuous learning.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4">Technical Skills</h3>
      <TechCarousel />
    </div>
  );
}

export default About;
