import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./achievement.css"


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="relative w-4/5 mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-10">Admin Login</h2>
      <form onSubmit={handleLogin} className="timeline-content" style={{ margin: '0 auto', maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px' }}
            placeholder="Enter username"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px' }}
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="timeline-year"
          style={{ display: 'block', width: '100%', textAlign: 'center' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;