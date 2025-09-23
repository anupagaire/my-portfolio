import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-16" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-gray-400">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-sm">© 2025 Anupa Gaire. All rights reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* GitHub */}
          <a
            href="https://github.com/anupagaire"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://linkedin.com/in/anupagaire"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:aanupa.gaire@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span className="text-gray-300 hover:text-white">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
