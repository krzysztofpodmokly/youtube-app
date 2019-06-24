import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    onTermSubmit = (term) => {
        this.props.fetchVideos(term);
    }

    onTermSubmit = (term) => {

    }

    render() {
        console.log(this.props)
        return (
            <div className="ui container">
                <div className="ui container segment">
                    <SearchBar
                        // videos={() => this.props.fetchVideos('build')}
                        // onInputSubmit={this.onTermSubmit}
                    />
                </div>
                <VideoList
                    videos={this.props.videos}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps => ', state.form.userInput);
    // console.log('mapStateToProps => ', state.form.userInput.values);
    return { videos: state.videos, selectedVideo: state.videos[0], userInput: state.userInput };
}

export default connect(mapStateToProps, { fetchVideos })(App);