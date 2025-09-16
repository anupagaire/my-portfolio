import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/10.png";   // adjust path
import cvFile from "/anupa_cv.pdf";             

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const handleExplore = () => {
    // navigate to the projects page
    navigate("/projects");
  };

  const handleViewCV = () => {
    // open CV.pdf in a new tab
    window.open(cvFile, "_blank");
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center
                 overflow-hidden pt-28 sm:pt-20 md:pt-16 bg-gradient-to-br from-[#1b1c33] to-[#0d0e1a]"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center gap-10">
        
        {/* ===== Left Text Block ===== */}
        <div className="text-center sm:text-left space-y-4 sm:space-y-8 max-w-xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
            Hello <span role="img" aria-label="wave">👋</span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white/90">
            I am <span className="text-purple-400">Anupa Gaire</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            Exploring the fascinating world of{" "}
            <span className="text-purple-300">Computer Engineering</span> and
            creating innovative solutions that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 pt-2">
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-6 py-3 rounded-full
                         bg-gradient-to-r from-purple-500 to-blue-500
                         text-white font-semibold hover:scale-105 transition-transform"
            >
              Explore Research
            </button>

            <button
              onClick={handleViewCV}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/40
                         text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View CV
            </button>
          </div>
        </div>

        {/* ===== Right Image Block ===== */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
          <img
            src={heroImg}
            alt="Anupa Gaire"
            className="w-full h-full object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
