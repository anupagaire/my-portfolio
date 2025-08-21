import React, { useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import AchievementManager from './AchievementManager';
 import './achievement.css';

   const AdminDashboard = () => {
     const navigate = useNavigate();

     useEffect(() => {
       if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
         navigate('/admin/login');
       }
     }, [navigate]);

     return (
       <div className="relative w-4/5 mx-auto py-10">
         <h2 className="text-center text-2xl font-bold mb-10">Admin Dashboard</h2>
         <AchievementManager />
       </div>
     );
   };

   export default AdminDashboard;