"use client";
import React, { useEffect, useState, useRef } from "react";
import { default as Lenis } from "@studio-freight/lenis"; // Import Lenis
import Achievements from "../Components/Achievements";
import BackgroundSection from "../Components/BackgroundSection";
import bgImage from "../assets/bgimage.jpg";
import secondImage from "../assets/secondimage.png";

const Home = () => {
  const [scrollY, setScrollY] = useState(0); // Track Lenis scroll position
  const lenisRef = useRef(null); // Ref to store Lenis instance

  // Initialize Lenis
  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1, // Smoothness factor (lower = smoother)
      smooth: false, // Disable global smooth scrolling (only for second image)
      direction: "vertical",
    });

    // Sync Lenis with requestAnimationFrame
    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Update scrollY based on Lenis scroll
    lenisRef.current.on("scroll", ({ scroll }) => {
      setScrollY(scroll); // Update scroll position for parallax
    });

    // Cleanup
    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  // Height of the hero section (BackgroundSection) in pixels (80vh)
  const mainImageHeight = window.innerHeight * 0.8;
  const offset = 320; // 70px down from the bottom of the main image

  // Parallax effect: second image starts 70px below main image bottom and moves
  const translateY = scrollY * 0.6 - mainImageHeight + offset; 

  return (
    <>
      <BackgroundSection 
  mainImage={bgImage} 
  title={
    <>
      <span className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent animate-fade-in">
        Hello
      </span>
      <br />
      <span className="text-4xl md:text-5xl font-semibold dark:text-gray-100 animate-slide-up delay-300">
        I am <span className="text-blue-500 font-bold">D.P</span>
      </span>
      <br />
      <span className="text-2xl md:text-3xl dark:text-gray-300 animate-slide-up delay-500 max-w-4xl">
        Exploring the fascinating world of academia <br/>
        through <span className="text-purple-600 font-medium">diverse projects</span> and 
        <span className="text-teal-600 font-medium"> groundbreaking research</span>.
      </span>
      <br />
      <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 animate-fade-in delay-700 flex items-center justify-start gap-2">
        <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        From Nepal
        <span className="text-2xl">🇳🇵</span>
      </span>
    </>
  } 
  subtitle={
 <div className="flex flex-col justify-start items-start space-y-5 animate-fade-in delay-1000">
   <button className="group bg-gradient-to-r from-purple-900 to-purple-600 text-white px-8 py-4 text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
     <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
     </svg>
     Explore Research
   </button>
   <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
     <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
     </svg>
     View CV
   </button>
 </div>
}
  
  height="90vh" 
/>

<style jsx global>{`
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-up {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .delay-300 { animation-delay: 300ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-700 { animation-delay: 700ms; }
  .delay-1000 { animation-delay: 1000ms; }
`}</style>

      {/* Container for Second Image and Achievements */}
      <div className="w-full relative flex flex-col md:flex-row min-h-screen" style={{ marginTop: 0 }}>
        {/* Second Image with Lenis Parallax */}
        <div className="w-full md:w-1/2 relative second-image-container">
          <img
            src={secondImage}
            alt="Profile"
            className="w-full h-auto object-cover second-image"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>

        {/* Achievements Timeline */}
        <div className="w-full md:w-1/2 achievements-container">
          <Achievements />
        </div>
      </div>
    </>
  );
};

export default Home;