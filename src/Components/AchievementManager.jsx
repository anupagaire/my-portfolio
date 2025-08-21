import React, { useState } from 'react';
   import { achievements as initialAchievements } from '../achievementdata.js'; // Use static data for now
   import './achievement.css';

   const AchievementManager = () => {
     const [achievements, setAchievements] = useState(initialAchievements);
     const [year, setYear] = useState('');
     const [title, setTitle] = useState('');
     const [editIndex, setEditIndex] = useState(null);

     const handleSubmit = (e) => {
       e.preventDefault();
       if (editIndex !== null) {
         // Update existing
         const updatedAchievements = [...achievements];
         updatedAchievements[editIndex] = { year, title };
         setAchievements(updatedAchievements);
       } else {
         // Add new
         setAchievements([...achievements, { year, title }]);
       }
       setYear('');
       setTitle('');
       setEditIndex(null);
     };

     const handleEdit = (index) => {
       setYear(achievements[index].year);
       setTitle(achievements[index].title);
       setEditIndex(index);
     };

     const handleDelete = (index) => {
       setAchievements(achievements.filter((_, i) => i !== index));
     };

     return (
       <div>
         <form onSubmit={handleSubmit} className="timeline-content" style={{ marginBottom: '20px' }}>
           <div style={{ marginBottom: '15px' }}>
             <label>Year</label>
             <input
               type="text"
               value={year}
               onChange={(e) => setYear(e.target.value)}
               style={{ width: '100%', padding: '8px', borderRadius: '6px' }}
               placeholder="e.g., 2019 - 2020"
             />
           </div>
           <div style={{ marginBottom: '15px' }}>
             <label>Title</label>
             <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               style={{ width: '100%', padding: '8px', borderRadius: '6px' }}
               placeholder="e.g., Achievement 1"
             />
           </div>
           <button
             type="submit"
             className="timeline-year"
             style={{ display: 'block', width: '100%', textAlign: 'center' }}
           >
             {editIndex !== null ? 'Update' : 'Add'} Achievement
           </button>
         </form>
         <div>
           {achievements.map((ach, index) => (
             <div key={index} className="timeline-content" style={{ marginBottom: '10px', padding: '10px' }}>
               <span>{ach.year}: {ach.title}</span>
               <div>
                 <button
                   onClick={() => handleEdit(index)}
                   className="timeline-year"
                   style={{ margin: '0 5px', padding: '5px 10px' }}
                 >
                   Edit
                 </button>
                 <button
                   onClick={() => handleDelete(index)}
                   className="timeline-year"
                   style={{ margin: '0 5px', padding: '5px 10px', background: '#d65c5c' }}
                 >
                   Delete
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default AchievementManager;