import React from "react";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"
      } py-8`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">NAFCrypto</h3>
            <p className="mt-2 text-sm">
              Secure and easy cryptocurrency transactions
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/mirfanfad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mirfanfad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/mirfanfad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} NAFCrypto. All rights reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>
            {" | "}
            <a href="#" className="hover:text-blue-500">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
