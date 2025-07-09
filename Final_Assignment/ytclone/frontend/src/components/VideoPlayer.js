import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { useParams } from 'react-router-dom';

const authHeader = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
  };
};

const VideoPlayer = () => {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`videos/${videoId}/`)
      .then(res => setVideo(res.data))
      .catch(err => console.error(err));
  }, [videoId]);

  const handleLike = async () => {
    await axios.post(`videos/${videoId}/like/`, {}, { headers: authHeader() });
  };

  const handleWatchLater = async () => {
    await axios.post(`videos/${videoId}/watchlater/`, {}, { headers: authHeader() });
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>{video.title}</h2>
      <video controls width="600" src={`http://127.0.0.1:8000${video.video_file}`} />
      <p>{video.description}</p>
      <button onClick={handleLike}>👍 Like</button>
      <button onClick={handleWatchLater}>🕒 Watch Later</button>
    </div>
  );
};

export default VideoPlayer;
