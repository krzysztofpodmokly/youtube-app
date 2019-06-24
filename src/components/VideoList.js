import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderList = videos.map(video => {
        return (
          <VideoItem
            key={video.id.videoId}
            title={video.snippet.title}
            description={video.snippet.description}
            image={video.snippet.thumbnails.medium.url}
          />
        );
    })
    return (
        <div className="ui relaxed divided list">{ renderList }</div>
    );
};

export default VideoList;