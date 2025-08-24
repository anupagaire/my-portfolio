import React from "react";

const BackgroundSection = ({ mainImage, title, subtitle, height }) => {
  return (
    <div
      className="relative w-full"
      style={{ height: height, backgroundImage: `url(${mainImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-6"> {/* Left-aligned content with padding */}
        <div className="text-left text-white space-y-6"> 
          <div className="space-y-2">{title}</div> {/* Multi-line title with spacing */}
          <div>{subtitle}</div> {/* Render subtitle with its own flex layout */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;