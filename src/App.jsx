import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Research from "./Pages/Research";
import Courses from "./Pages/Courses";
import ProjectSupervise from "./Pages/ProjectSupervisor";
import Navbar from "./Components/Navbar.jsx";
import React from "react";
import ResearchDetail from './Pages/ResearchDetail';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<ProjectSupervise />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<ResearchDetail />} />
        <Route path="/courses/masters" element={<Courses />} /> {/* Add for dropdown */}
        <Route path="/courses/bachelors" element={<Courses />} /> {/* Add for dropdown */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;