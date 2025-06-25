import 'bootstrap/dist/css/bootstrap.min.css';    // Used Bootstrap
import React, { useState, useEffect } from "react";   //Importing the functions from react
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";   //react-router-dom for opening new pages without reloding
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import Timer from "./components/Timer"

function App() {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    const savedWatchLater = JSON.parse(sessionStorage.getItem("watchLater")) || [];
    const savedLikes = JSON.parse(sessionStorage.getItem("likedVideos")) || [];
    setWatchLaterList(savedWatchLater);
    setLikedVideos(savedLikes);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  useEffect(() => {
    sessionStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  const handleWatchLater = (videoId) => {
    setWatchLaterList(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const handleLike = (videoId) => {
    setLikedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  
  return (
    <Router>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(255, 96, 96)" }}>
        <Link className="navbar-brand" to="/">MyTube</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch-later">
                Watch Later <span className="badge bg-secondary">{watchLaterList.length}</span>
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={() => {}}
            />
            <button className="btn btn-outline-success" type="submit" disabled>
              Search
            </button>
          </form>
        </div>
      </nav>
      <Timer />              {/* Live Timer */}
      <Routes>
        <Route path="/" element={
          <Home
            watchLaterList={watchLaterList}
            handleWatchLater={handleWatchLater}
            likedVideos={likedVideos}
            handleLike={handleLike}
          />
        } />
        <Route path="/watch-later" element={
          <WatchLater
            watchLaterList={watchLaterList}
            handleWatchLater={handleWatchLater}
            likedVideos={likedVideos}
            handleLike={handleLike}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;