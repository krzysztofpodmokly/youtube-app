import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = ({ title, description, image }) => {

    return (
        <div className="video-item item">
            <img
                className="ui image"
                src={image}
                alt={title}
            />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    )
}

export default VideoItem;