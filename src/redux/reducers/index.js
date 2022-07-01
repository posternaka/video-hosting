import { combineReducers } from "redux";
import { getVideos } from './getVideosReducer';
import { setLikedRequest } from './setLikedRequestReducer'

export default combineReducers({
    data: getVideos,
    likedRequests: setLikedRequest,
})