import React from 'react';

const SliderIndicators = ({ total, current, onIndicatorClick }) => (
  <div className="flex justify-center gap-2 mt-8">
    {Array.from({ length: total }, (_, index) => (
      <button
        key={index}
        onClick={() => onIndicatorClick(index)}
        className={`w-3 h-3 rounded-full transition-all duration-100 ${
          index === current 
            ? 'bg-white transform scale-125' 
            : 'bg-black/50 '
        }`}
      />
    ))}
  </div>
);

export default SliderIndicators;