import youtube from '../apis/youtube';
import { FETCH_VIDEOS, VIDEO_SELECTED } from './types';

// works only with axios v.0.18.0
export const fetchVideos = (term) => async dispatch => {
    const response = await youtube.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            q: term
        }
    });
    dispatch({ type: FETCH_VIDEOS, payload: response.data.items })
};

export const selectedVideo = (video) => dispatch => {
    dispatch({ type: VIDEO_SELECTED, payload: video })
}
