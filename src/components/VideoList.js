import React from "react";
import VideoItem from "./VideoItem";
import { connect } from 'react-redux';
import { selectedVideo } from '../actions';

// const VideoList = ({ videos }) => {
// const renderList = videos.map(video => {
//     return (
//       <VideoItem
//         key={video.id.videoId}
//         title={video.snippet.title}
//         description={video.snippet.description}
//         image={video.snippet.thumbnails.medium.url}
//       />
//     );
// })
// return (
//     <div className="ui relaxed divided list">{ renderList }</div>
// );
// };

class VideoList extends React.Component {
  renderList() {
    return this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          onClick={() => this.props.selectedVideo(video)}
        />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log('STATE IN VIDEO LIST', state);
  return state;
}

export default connect(mapStateToProps, { selectedVideo })(VideoList);
