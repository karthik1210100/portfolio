import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto bg-white shadow-md rounded-lg" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8" data-aos="fade-down">Certifications</h2>

      <div className="space-y-8 text-gray-700">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm" data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-blue-700">Frontend Developer</h3>
          <p className="text-sm text-gray-600 mb-2">
            Cispro Institute, Coimbatore – <span className="font-medium">2025</span>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Gained hands-on experience building real-world applications using HTML, CSS, JavaScript, and Bootstrap.</li>
            <li>Strengthened frontend skills including responsive design, UI development, and browser compatibility.</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-sm" data-aos="fade-left">
          <h3 className="text-2xl font-semibold text-blue-700">Full Stack Developer</h3>
          <p className="text-sm text-gray-600 mb-2">
            Livewire Institute, Karur – <span className="font-medium">2022</span>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed a course management system using Django and MySQL.</li>
            <li>Implemented student enrollment, attendance tracking, and admin dashboards.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
