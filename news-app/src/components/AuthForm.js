import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({ mode }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = async () => {
    if (!username || !password || (mode === 'register' && !name)) {
      alert('All fields are required.');
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/${mode}`, {
        name,
        username,
        password,
      });

      alert(res.data);

      if (mode === 'register') {
        navigate('/login');
        window.location.reload();
      } else {
        localStorage.setItem('username', username);
        navigate('/home');
      }
    } catch (err) {
      alert(err.response?.data || 'Server error');
    }
  };
  
  return (
    <form className="auth-container" autoComplete="off">
      <h3>{mode === 'register' ? 'Register' : 'Login'}</h3>

    {/* Tagline */}
      <p className="tagline">Dive into the news that matters to you.</p>

      {mode === 'register' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="newname"
          autoComplete="off"
          onChange={e => setName(e.target.value)}
        />
      )}

      <input
        type="text"
        placeholder="Username"
        value={username}
        name="newusername"
        autoComplete="off"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        name="newpassword"
        autoComplete="new-password"
        onChange={e => setPassword(e.target.value)}
      />

      <button type="button" onClick={handleAuth}>
        {mode}
      </button>

      <div className="links">
        {mode === 'login' ? (
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        ) : (
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
