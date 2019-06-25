import React from "react";
import VideoItem from "./VideoItem";
import { connect } from 'react-redux';
import { selectedVideo } from '../actions';

class VideoList extends React.Component {
  renderList() {
    return this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          // title={video.snippet.title}
          // description={video.snippet.description}
          // image={video.snippet.thumbnails.medium.url}
          onClick={() => this.props.selectedVideo(video.id.videoId)}
        />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, { selectedVideo })(VideoList);
