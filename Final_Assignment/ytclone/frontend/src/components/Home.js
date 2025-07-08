import axios from '../axiosConfig';
import { useEffect, useState } from 'react';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('videos/')
      .then(res => setVideos(res.data));
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <video width="320" controls>
            <source src={`http://127.0.0.1:8000${video.video_file}`} />
          </video>
        </div>
      ))}
    </div>
  );
}

export default Home;