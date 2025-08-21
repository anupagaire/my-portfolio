import React from "react";
import { achievements } from "../achievementdata.js";
import "./Achievement.css"; 

const Achievements = () => {
  return (
    <div className="relative w-4/5 mx-auto py-10" >
      <h2 className="text-center text-2xl font-bold mb-10">ACHIEVEMENT</h2>
      <div className="timeline">
        {achievements.map((ach, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-year">{ach.year}</div>
            <div className="timeline-content">{ach.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
