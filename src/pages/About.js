import React from "react";
import TechCarousel from "../components/TechCarousel";

function About() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Me</h2>

      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        I’m a <span className="font-semibold text-blue-600">Web Developer</span> with hands-on experience in full-stack development using 
        <span className="font-semibold text-blue-600"> Ruby on Rails </span> and 
        <span className="font-semibold text-blue-600"> ReactJS</span>. I enjoy building responsive web apps that deliver value.
      </p>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Passionate about <span className="italic">clean code</span>, <span className="italic">team collaboration</span>, and 
        <span className="italic"> continuous learning</span>.
      </p>


      <hr className="my-8 border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
        <TechCarousel />
      </section>
      
      <hr className="my-8 border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg text-gray-800 font-medium">B.E. in Civil Engineering</p>
          <p className="text-gray-600">Tamilnadu College of Engineering, Coimbatore</p>
          <p className="text-gray-500">Graduated: April 2019</p>
        </div>
      </section>
    </div>
  );
}

export default About;
