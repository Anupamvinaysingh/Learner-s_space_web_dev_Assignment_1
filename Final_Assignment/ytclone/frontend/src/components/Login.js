// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
//     <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
//     <Link to="/upload" style={{ color: '#fff', marginRight: '15px' }}>Upload</Link>
//     <Link to="/dashboard" style={{ color: '#fff', marginRight: '15px' }}>Dashboard</Link>
//     <Link to="/login" style={{ color: '#fff', marginRight: '15px' }}>Login</Link>
//     <Link to="/register" style={{ color: '#fff' }}>Register</Link>
//   </nav>
// );

// export default Navbar;
import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('auth/login/', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.access);
        navigate('/');
      })
      .catch(err => console.error('Login failed:', err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '220px', padding: '20px' }}>
      <input type="text" placeholder="Username" value={credentials.username} onChange={e => setCredentials({ ...credentials, username: e.target.value })} required />
      <input type="password" placeholder="Password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
