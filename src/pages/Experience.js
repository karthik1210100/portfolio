import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          data-aos="fade-down"
        >
          Professional Experience
        </h2>

        <div
          className="bg-white shadow-md rounded-2xl p-6 mb-8 border border-gray-200"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Web Developer – Mallow Technologies Pvt. Ltd
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">May 2023 – May 2025</span> | Karur, Tamil Nadu
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Developed and deployed scalable web applications using Ruby on Rails and ReactJS, improving user engagement by 15%.</li>
            <li>Increased application stability and reduced error rates by 30% through proactive monitoring with BugSnag.</li>
            <li>Integrated RESTful APIs and real-time features using WebSockets (Action Cable, Faye).</li>
            <li>Maintained version control with Git and Bitbucket, streamlining collaboration.</li>
            <li>Reduced page load time by 25% through frontend performance optimizations.</li>
          </ul>
        </div>

        <div
          className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Developer Trainee – Mallow Technologies Pvt. Ltd
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Nov 2022 – Apr 2023</span> | Karur, Tamil Nadu
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Developed a real-time chat application using WebSockets for seamless communication.</li>
            <li>Optimized database queries, improving response time by 1.3ms.</li>
            <li>Collaborated with senior developers on full-stack feature delivery.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
