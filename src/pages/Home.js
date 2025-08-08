import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full" data-aos="fade-up">
        <div>
          <h1>Hello, I'm <span>Karthikeyan</span></h1>
          <p>Web Developer | React & Rails Enthusiast</p>
          <p className="tagline">I craft modern, responsive, and performant web applications with a focus on usability and clean code.</p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A passionate web developer specializing in building responsive and interactive web applications using React and Rails.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Contact Me
            </Link>

          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
            <img
              src="/Karthik.jpg"
              alt="Karthikeyan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;

