import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside style={{
    width: '200px',
    background: '#f9f9f9',
    padding: '20px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    borderRight: '1px solid #ddd'
  }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><Link to="/">🏠 Home</Link></li>
      <li><Link to="/upload">📤 Upload Video</Link></li>
      <li><Link to="/dashboard">📺 My Videos</Link></li>
      <li><Link to="/watchlater">🕒 Watch Later</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
