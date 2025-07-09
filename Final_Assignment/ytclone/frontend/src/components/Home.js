import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/videos/')
      .then(res => setVideos(res.data))
      .catch(err => console.error('Error fetching videos:', err));
  }, []);

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>🎥 All Videos</h2>
      {videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {videos.map(video => (
            <div key={video.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '220px' }}>
              <Link to={`/video/${video.id}`}>
                {video.thumbnail && (
                  <img
                    src={`http://127.0.0.1:8000${video.thumbnail}`}
                    alt={video.title}
                    width="200"
                    style={{ borderRadius: '4px' }}
                  />
                )}
                <h4>{video.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
