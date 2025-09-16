import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import ResearchCard from "./ResearchCard";
import NavButton from "./NavButton";
import SliderIndicators from "./SliderIndicators"; 
import { ResearchData } from '../data/researchData.js'; 

const ResearchSlider = ({ items = ResearchData, onItemClick, onSeeMoreClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);

  const totalItems = items.length;
  // Duplicate items for seamless looping
  const extendedItems = [...items, ...items, ...items]; // Triple the array for smooth looping
  const maxIndex = totalItems; // Middle section of extendedItems

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        if (nextIndex > maxIndex) {
          // When reaching the end of the middle section, jump to the start of the middle section
          setTimeout(() => {
            sliderRef.current.style.transition = 'none';
            setCurrentIndex(0);
            setTimeout(() => {
              sliderRef.current.style.transition = 'transform 300ms ease-out';
            }, 0);
          }, 300); // Match transition duration
          return nextIndex;
        }
        return nextIndex;
      });
    }, 2000); // Match ProjectSlider's 2-second interval

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Navigation functions
  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev <= 0 ? maxIndex : prev - 1;
      if (nextIndex === maxIndex) {
        setTimeout(() => {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(0);
          setTimeout(() => {
            sliderRef.current.style.transition = 'transform 300ms ease-out';
          }, 0);
        }, 300); // Match transition duration
      }
      return nextIndex;
    });
    setIsAutoPlaying(false);
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex > maxIndex) {
        setTimeout(() => {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(0);
          setTimeout(() => {
            sliderRef.current.style.transition = 'transform 300ms ease-out';
          }, 0);
        }, 300); // Match transition duration
        return nextIndex;
      }
      return nextIndex;
    });
    setIsAutoPlaying(false);
  }, [maxIndex]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Handle research card click
  const handleItemClick = (research) => {
    if (onItemClick) {
      onItemClick(research);
    } else {
      console.log('Navigate to research:', research.slug);
    }
  };

  // Handle see more button click
  const handleSeeMoreClick = () => {
    if (onSeeMoreClick) {
      onSeeMoreClick();
    } else {
      console.log('Navigate to research page');
    }
  };

  return (
    <div className="projects-section w-7xl mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Featured Research
        </h2>
        <p className="text-lg text-black mb-8">
          Discover my latest research contributions and publications
        </p>
      </div>

      {/* Slider Container */}
      <div 
        className="relative overflow-hidden rounded-3xl p-8 shadow-2xl"
        style={{ 
          background: 'rgba(14, 14, 14, 0.15)',
          backdropFilter: 'blur(10px)' 
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-300 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (320 + 24)}px)` // 320px card width + 24px gap
          }}
          ref={sliderRef}
        >
          {extendedItems.map((research, index) => (
            <ResearchCard
              key={`${research.id}-${index}`} // Unique key for duplicated items
              research={research}
              onClick={handleItemClick}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <NavButton
          direction="prev"
          onClick={goToPrev}
          disabled={false} // Always enabled for infinite loop
        />
        <NavButton
          direction="next"
          onClick={goToNext}
          disabled={false} // Always enabled for infinite loop
        />
      </div>

      {/* Slider Indicators */}
      <SliderIndicators
        total={totalItems}
        current={currentIndex % totalItems} // Map to original items
        onIndicatorClick={goToSlide}
      />

      {/* See More Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleSeeMoreClick}
          className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none py-4 px-10 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            View All Research
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResearchSlider;