import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Research from "./Pages/Research";
import Courses from "./Pages/Courses";
import ProjectSupervisor from "./Pages/ProjectSupervisor";
import Navbar from "./Components/Navbar.jsx";
import React from "react";
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<ProjectSupervisor />} />
        <Route path="/research" element={<Research />} />
        <Route path="/courses/masters" element={<Courses />} /> 
        <Route path="/courses/bachelors" element={<Courses />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;