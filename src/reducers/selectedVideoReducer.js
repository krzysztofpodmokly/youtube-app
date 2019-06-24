import { VIDEO_SELECTED } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case VIDEO_SELECTED:
            return action.payload;
        default:
            return state;
    }
}