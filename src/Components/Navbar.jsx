import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <nav className="navbar bg-gray-800 text-white p-4">
      <div className="navbar-logo">
        <h2 className="text-2xl font-bold">D.P</h2>
      </div>
      <ul className="navbar-links flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li className="relative">
          <button
            onClick={toggleCoursesDropdown}
            className="hover:text-gray-300 focus:outline-none flex items-center"
          >
            Courses
            <span className="ml-1 text-sm">▼</span>
          </button>
          {isCoursesOpen && (
            <ul className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg">
              <li>
                <Link
                  to="/courses/masters"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsCoursesOpen(false)}
                >
                  Masters
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/bachelors"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsCoursesOpen(false)}
                >
                  Bachelors
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/projectSupervise" className="hover:text-gray-300">ProjectSupervise</Link></li>
        <li><Link to="/research" className="hover:text-gray-300">Research</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;