import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import Achievements from './Components/Achievements';
import './App.css';
import Home from "./Pages/Home";
import Research from "./Pages/Research" 
import Courses from "./Pages/Courses" 
import Projectsupervisor from "./Pages/Projectsupervisor" 
import Navbar from "./Components/Navbar.jsx";
import React from 'react';
import AdminLogin from './Components/AdminLogin.jsx';
import AdminDashboard from './Components/AdminDashboard.jsx';
   function App() {
     return (
       <Router>
              <Navbar />

         <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projectsupervisor" element={<Projectsupervisor />} />
        <Route path="/research" element={<Research />} />
           <Route path="/" element={<Achievements />} />
           <Route path="/admin/login" element={<AdminLogin />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
           <Route path="*" element={<Achievements />} /> {/* Fallback to portfolio */}
         </Routes>
       </Router>
     );
   }

   export default App;