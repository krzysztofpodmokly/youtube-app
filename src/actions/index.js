import youtube from '../apis/youtube';
import { FETCH_VIDEOS, VIDEO_SELECTED } from './types';

// works only with axios v.0.18.0
export const fetchVideos = (term) => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: term,
            maxResults: 5,
        }
    });
    dispatch({ type: FETCH_VIDEOS, payload: response.data.items })
};

export const selectedVideo = (id) => async dispatch => {
    const response = await youtube.get('/videos', {
        params: {
            id
        }
    })
    dispatch({ type: VIDEO_SELECTED, payload: response.items  })
}

