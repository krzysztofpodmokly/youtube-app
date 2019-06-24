import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import videosReducer from './videosReducer';

export default combineReducers({
    videos: videosReducer,
    form: formReducer
});