import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui container segment">
                    <SearchBar />
                </div>
                <VideoList
                    videos={this.props.videos}
                />
                <VideoDetail />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { videos: state.videos, userInput: state.userInput };
}

export default connect(mapStateToProps, { fetchVideos })(App);