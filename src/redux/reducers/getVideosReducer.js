import { GET_VIDEOS } from "../actions/actionTypes";

export const getVideos = (state = [], action) => {
    switch(action.type) {
        case GET_VIDEOS: {
            return [action.payload.data];
        }

        default: {
            return state;
        }
    }
}