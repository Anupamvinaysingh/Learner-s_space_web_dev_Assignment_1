import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('videos/')
      .then(res => {
        const myVideos = res.data.filter(v => v.user?.id === 1); // Replace with actual user ID logic
        setVideos(myVideos);
      })
      .catch(err => console.error('Dashboard error:', err));
  }, []);

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>📺 My Uploaded Videos</h2>
      {videos.length === 0 ? (
        <p>You have not uploaded any videos.</p>
      ) : (
        <ul>
          {videos.map(v => (
            <li key={v.id}>
              <Link to={`/video/${v.id}`}>{v.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
