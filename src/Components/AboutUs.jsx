import React, { useState, useEffect, useRef } from "react";
import { User, MapPin, GraduationCap, Heart, Code, Lightbulb, Target, Coffee } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const interests = [
    { icon: Code, label: "Full Stack Development", color: "text-blue-400" },
    { icon: Lightbulb, label: "AI & Machine Learning", color: "text-purple-400" },
    { icon: Target, label: "Problem Solving", color: "text-green-400" },
    { icon: Heart, label: "Open Source", color: "text-pink-400" },
    { icon: GraduationCap, label: "Continuous Learning", color: "text-cyan-400" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "text-yellow-400" },
  ];

  const academicBackground = [
    {
      date: "2020-2024",
      title: "Bachelor of Computer Engineering",
      institution: "Khwopa Engineering College, Bhaktapur, Nepal",
    },
    {
      date: "2018-2020",
      title: "Higher Secondary Education (+2 Science)",
      institution: "Kathmandu Model College, Bagbazar, Nepal",
    },
    {
      date: "2018",
      title: "Secondary Education Examination (SEE)",
      institution: "Om Secondary School, Bhaktapur, Nepal",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-16" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <User className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Anupa Gaire, a Computer Engineering graduate from Bhaktapur, Nepal, passionate about creating user-friendly digital experiences through web development and graphic design.
          </p>
        </div>

        {/* 2x2 Grid for all cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* My Journey */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">My Journey</h3>
                    <p className="text-purple-300">Student & Developer</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Bhaktapur, Nepal 🇳🇵</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <span>B.E. in Computer Engineering, Khwopa Engineering College (2025)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Code className="w-5 h-5 text-green-400" />
                    <span>Web Developer & Graphic Designer</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/70 leading-relaxed">
                    I'm Anupa Gaire, a recent Computer Engineering graduate with a passion for blending technology and creativity. My journey began by exploring web development and graphic design, aiming to build impactful, user-friendly digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                My Story
              </h3>
              <div className="space-y-4 text-white/70">
                <p className="leading-relaxed">
                  Growing up in Bhaktapur, Nepal, I was drawn to technology's potential to solve real-world challenges. This led me to pursue a Bachelor's in Computer Engineering at Khwopa Engineering College, where I honed my skills in web development and graphic design.
                </p>
                <p className="leading-relaxed">
                  As a beginner, I'm passionate about creating engaging digital experiences by combining technical expertise with creative design. My projects reflect my commitment to learning and innovation.
                </p>
                <p className="leading-relaxed">
                  I aspire to contribute to the tech industry by building user-friendly, impactful products and exploring new technologies like AI and machine learning.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                Academic Background
              </h3>
              <div className="space-y-4">
                {academicBackground.map(({ date, title, institution }, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-white/80 font-medium">{date}: </span>
                      <span className="text-white/70">{title}, {institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Love */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-400" />
                What I Love
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map(({ icon, label, color }, i) => {
                  const IconComponent = icon;
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <IconComponent className={`w-5 h-5 ${color}`} />
                      <span className="text-white/80 text-sm font-medium">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-16 {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
