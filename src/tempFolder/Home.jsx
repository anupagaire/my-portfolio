'use client';
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { default as Lenis } from "@studio-freight/lenis";
import { ChevronDown, Sparkles, Rocket, Code2, Brain, Zap } from "lucide-react";
import ProjectSlider from "../Components/ProjectSlider";
// import ResearchSlider from "../Components/ResearchSlider";
import Skills from "../Components/skills";
import InternshipExperience from "../Components/InternshipExperince";
import AboutSection from "../Components/AboutUs";
import { projects } from "../data/projectdata.js";
import { ResearchData } from "../data/researchdata.js";

import profileImage from "../assets/10.jpg"; 
import cvPdf from "../assets/cv.pdf"; // Ensure this path is correct

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const lenisRef = useRef(null);
  const heroRef = useRef();
  const navigate = useNavigate();

  const words = ["Engineer", "Mern Stack Developer", "Problem Solver"];

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: "vertical",
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenisRef.current.on("scroll", ({ scroll }) => {
      setScrollY(scroll);
    });

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Event handlers
  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  const handleSeeMoreClick = () => {
    navigate("/projects");
  };

  // const handleSeeMoreResearch = () => {
  //   navigate("/research");
  // };

  const handleViewCV = () => {
    window.open(cvPdf, '_blank'); 
  };

  // Floating elements component
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${10 + (i * 6)}%`,
            top: `${10 + (i * 4)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        >
          {i % 3 === 0 && <Code2 className="w-6 h-6 text-purple-400" />}
          {i % 3 === 1 && <Zap className="w-4 h-4 text-blue-400" />}
          {i % 3 === 2 && <Brain className="w-5 h-5 text-pink-400" />}
        </div>
      ))}

      {/* Glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl animate-pulse"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['rgb(147, 51, 234)', 'rgb(59, 130, 246)', 'rgb(236, 72, 153)', 'rgb(34, 197, 94)'][i % 4]
            }40, transparent)`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #11119bff 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)
          `
        }}
      >
        {/* Animated background grid */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 237, 237, 0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(246, 237, 237, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`
          }}
        />

        <FloatingElements />

        {/* Interactive cursor follower */}
        <div 
          className="fixed w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen opacity-60 blur-sm transition-all duration-200"
          style={{
            left: mousePosition.x * (window.innerWidth / 100) - 16,
            top: mousePosition.y * (window.innerHeight / 100) - 16,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left space-y-8 order-1 lg:order-1">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 animate-slide-in-left">
                  {/* Logo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4 sm:mb-0">
                    AG
                  </div>
                  <span className="text-purple-300 font-medium tracking-wider uppercase text-sm">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="space-y-2">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black animate-slide-in-left delay-200">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Hello
                    </span>
                    <span className="inline-block ml-2 sm:ml-4 text-2xl sm:text-3xl animate-wave">👋</span>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 animate-slide-in-left delay-400">
                    I am{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Anupa Gaire
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl text-white/70 animate-slide-in-left delay-600">
                    A passionate{" "}
                    <span className="inline-block min-w-[140px] sm:min-w-[180px] text-left">
                      <span 
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold animate-text-glow"
                        key={currentWord}
                      >
                        {words[currentWord]}
                      </span>
                    </span>
                  </div>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed animate-slide-in-left delay-800">
                  Exploring the fascinating world of{" "}
                  <span className="text-purple-300 font-semibold">Computer Engineering</span> and 
                  creating innovative solutions that make a difference.
                </p>
                {/* Location badge */}
                <div className="flex items-center gap-3 animate-slide-in-left delay-1000">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm border border-white/20">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs sm:text-sm font-medium">From Nepal</span>
                    <span className="text-base sm:text-lg">🇳🇵</span>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-in-left delay-1200">
                <button 
                  onClick={handleSeeMoreClick}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                    Explore projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </button>
                <button 
                  onClick={handleViewCV}
                  className="group relative overflow-hidden border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                    View CV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right delay-600 order-2 lg:order-2">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl animate-pulse scale-110" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse scale-125 delay-1000" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 group">
                  <img 
                    src={profileImage} 
                    alt="Anupa Gaire"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white/30" style={{ display: 'none' }}>
                    <div className="text-center space-y-4">
                      <div className="w-16 sm:w-20 md:w-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">AG</span>
                      </div>
                      <p className="text-xs sm:text-sm">Your Photo Here</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Floating tech icons around image */}
                <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '20s' }}>
                  {[
                    { icon: Code2, angle: 0, color: 'text-blue-400' },
                    { icon: Brain, angle: 60, color: 'text-purple-400' },
                    { icon: Zap, angle: 120, color: 'text-pink-400' },
                    { icon: Rocket, angle: 180, color: 'text-green-400' },
                    { icon: Sparkles, angle: 240, color: 'text-yellow-400' },
                    { icon: Code2, angle: 300, color: 'text-cyan-400' }
                  ].map(({ icon: Icon, angle, color }, i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `
                          translate(-50%, -50%) 
                          rotate(${angle}deg) 
                          translateX(${window.innerWidth > 1024 ? '240px' : window.innerWidth > 640 ? '180px' : '140px'}) 
                          rotate(-${angle}deg)
                        `,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      <Icon className={`w-6 h-6 ${color} animate-pulse`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      
      <div className="w-full py-10 bg-slate-800">
        <ProjectSlider
          projects={projects}
          onProjectClick={handleProjectClick}
          onSeeMoreClick={handleSeeMoreClick}
        />
      </div>
      <InternshipExperience />
      <div className="bg-slate-900">
        <Skills />
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wave {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(147, 51, 234, 0.5); }
          50% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1200 { animation-delay: 1200ms; }
      `}</style>
    </>
  );
};

export default Home;