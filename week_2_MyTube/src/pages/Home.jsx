import React from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const Home = ({ watchLaterList, handleWatchLater, likedVideos, handleLike }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {videos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          isSaved={watchLaterList.includes(video.id)}
          onWatchLater={handleWatchLater}
          isLiked={likedVideos.includes(video.id)}
          onLike={handleLike}
        />
      ))}
    </div>
  );
};

export default Home;
