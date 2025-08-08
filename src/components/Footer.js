import React from "react";
import { useTheme } from "../ThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center py-4 shadow-inner ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <p className="mb-2">&copy; {new Date().getFullYear()} Karthikeyan. All rights reserved.</p>

      <div className="flex justify-center items-center gap-6 mb-2">
        <a
          href="https://linkedin.com/in/karthik-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/karthik1210100"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
      </div>

      <a
        href="/Karthikeyan_Resume.pdf"
        download
        className="inline-block text-sm hover:underline"
      >
        Download Resume
      </a>
    </footer>
  );
}

export default Footer;
