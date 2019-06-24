import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import videosReducer from './videosReducer';
import selectedVideoReducer from './selectedVideoReducer';

export default combineReducers({
    videos: videosReducer,
    form: formReducer,
    selectedVideo: selectedVideoReducer
});