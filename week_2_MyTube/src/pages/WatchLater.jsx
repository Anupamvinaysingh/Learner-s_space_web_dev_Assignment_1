import React from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const WatchLater = ({ watchLaterList, handleWatchLater, likedVideos, handleLike }) => {
  const savedVideos = videos.filter(v => watchLaterList.includes(v.id));

  return (
    <div>
      <h2>Watch Later</h2>
      {savedVideos.length === 0 ? (
        <p>No videos added yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {savedVideos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              isSaved={true}
              onWatchLater={handleWatchLater}
              isLiked={likedVideos.includes(video.id)}
              onLike={handleLike}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
