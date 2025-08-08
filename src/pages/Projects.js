// import React from "react";

// function Projects() {
//   return (
//     <section className="px-4 py-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
//   <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

//   <div className="grid gap-6 md:grid-cols-2">
//     <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5 transition-colors duration-300">
//       <h3 className="text-xl font-semibold mb-2">Senior Living Management System</h3>
//       <ul className="list-disc list-inside text-sm space-y-1">
//         <li>Real-time updates using WebSockets for dashboards</li>
//         <li>Error monitoring with BugSnag, performance improvements</li>
//         <li>
//           Live URLs:{" "}
//           <a
//             href="https://continyoucare.com"
//             className="text-blue-500 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             continyoucare.com
//           </a>{" "}
//           (public),{" "}
//           <a
//             href="https://www.intelligotek.com"
//             className="text-blue-500 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             intelligotek.com
//           </a>{" "}
//           (login required)
//         </li>
//       </ul>
//     </div>

//     <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5 transition-colors duration-300">
//       <h3 className="text-xl font-semibold mb-2">Movie Review App</h3>
//       <ul className="list-disc list-inside text-sm space-y-1">
//         <li>Built with Ruby on Rails (MVC pattern)</li>
//         <li>Users can add, edit, and review movies with authentication</li>
//         <li>
//           GitHub:{" "}
//           <a
//             href="https://github.com/karthik1210100/movie_review"
//             className="text-blue-500 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Repository
//           </a>
//         </li>
//       </ul>
//     </div>

//     <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5 md:col-span-2 transition-colors duration-300">
//       <h3 className="text-xl font-semibold mb-2">Frontend Projects</h3>
//       <ul className="list-disc list-inside text-sm space-y-1">
//         <li>Taxi Booking App – Real-time map and driver tracking</li>
//         <li>Food Ordering Platform – Responsive ordering interface</li>
//         <li>Personal Portfolio Website – SEO-optimized and responsive</li>
//       </ul>
//     </div>
//   </div>
// </section>

//   );
// }

// export default Projects;



import React from "react";

function Projects() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center dark:text-white">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Project 1 - Senior Living Management System */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transition-all">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
            Senior Living Management System
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Web platform for managing senior living operations, dashboards, and activities.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
            <li>Real-time dashboard updates with WebSockets</li>
            <li>BugSnag for error monitoring & performance optimization</li>
          </ul>
          <div className="text-sm space-y-1">
            <p className="text-gray-600 dark:text-gray-400">
              Live URLs:
              <a
                href="https://continyoucare.com"
                className="text-blue-500 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                continyoucare.com
              </a>
              ,
              <a
                href="https://www.intelligotek.com"
                className="text-blue-500 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                intelligotek.com
              </a>
            </p>
          </div>
        </div>

        {/* Project 2 - Movie Review App */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transition-all">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
            Movie Review App
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            A full-stack movie review app built with Ruby on Rails.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
            <li>User registration, authentication, and review system</li>
            <li>MVC architecture with clean RESTful routing</li>
          </ul>
          <a
            href="https://github.com/karthik1210100/movie_review"
            className="inline-block text-blue-500 hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository →
          </a>
        </div>

        {/* Project 3 - Taxi Booking App */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transition-all md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
            Real-Time Taxi Booking App
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Designed an interactive UI for booking taxis with live tracking.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
            <li>Live map integration with real-time driver updates</li>
            <li>Built using HTML, CSS, JavaScript, and Bootstrap</li>
          </ul>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">Source code is private or not available publicly.</p>
        </div>

        {/* Project 4 - Portfolio Website */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transition-all md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
            Portfolio Website
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Personal portfolio built with React and Tailwind CSS.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
            <li>Showcases personal projects with dark/light mode</li>
            <li>Integrated EmailJS for contact form</li>
            <li>SEO-friendly and responsive design</li>
          </ul>
          <div className="text-sm space-y-1">
            <a
              href="https://github.com/karthik1210100/portfolio"
              className="text-blue-500 hover:underline mr-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
            <a
              href="https://karthik-portfolio.vercel.app"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
