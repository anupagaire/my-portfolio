import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === 'prev' ? '-left-6' : '-right-6'
    } bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-none w-12 h-12 rounded-full cursor-pointer text-lg text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10`}
  >
    {direction === 'prev' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
  </button>
);

export default NavButton;