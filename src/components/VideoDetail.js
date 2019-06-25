import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = (props) => {

    if (!props.video) {
        return <div>Select a video</div>
    }

    return (
        <div>
            <h3>Details:</h3>
            <p></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedVideo: state.selectedVideo }
}

export default connect(mapStateToProps)(VideoDetail);