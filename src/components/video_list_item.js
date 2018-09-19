import React from 'react';

const VideoListItem = ({video, onVideoSelect})  => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick = {() => onVideoSelect(video) } className="video-card">
      <div className="video-list-media"> 
        <div className="image-container">
          <img  className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;