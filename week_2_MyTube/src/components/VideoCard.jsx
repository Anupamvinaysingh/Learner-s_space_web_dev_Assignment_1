import React from "react";

const VideoCard = ({ video, onWatchLater, isSaved, onLike, isLiked }) => {
  const cardStyle = {
    backgroundcolor: "#e0f7fa",
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    width: "320px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "6px"
  };

  return (
    <div style={cardStyle}>
      <img src={video.thumbnail} alt={video.title} style={imgStyle} />
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
      <p>{video.views} • {video.time}</p>

      <button onClick={() => onLike(video.id)} style={{ marginRight: "10px" }}>
        {isLiked ? "❤️ Liked" : "♡ Like"}
      </button>

      <button onClick={() => onWatchLater(video.id)}>
        {isSaved ? "Remove from Watch Later" : "Add to Watch Later"}
      </button>
    </div>
  );
};

export default VideoCard;
