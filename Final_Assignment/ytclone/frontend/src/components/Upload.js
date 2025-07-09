import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video_file', videoFile);
    formData.append('thumbnail', thumbnail);
    formData.append('title', title);
    formData.append('description', description);

    try {
      await axios.post('videos/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/');
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>📤 Upload Video</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files[0])} required />
        <input type="file" accept="image/*" onChange={e => setThumbnail(e.target.files[0])} />
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
