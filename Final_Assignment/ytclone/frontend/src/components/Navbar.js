import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    background: '#202020',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff'
  }}>
    <h2 style={{ margin: 0 }}>YT Clone</h2>
    <div>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/upload" style={linkStyle}>Upload</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/register" style={linkStyle}>Register</Link>
    </div>
  </nav>
);

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px'
};

export default Navbar;
