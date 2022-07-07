import { GET_VIDEOS } from "../actions/actionTypes";

export const getVideos = (state = [], action) => {
    switch(action.type) {
        case GET_VIDEOS: {
            console.log(action.payload);
            return [action.payload.data];
        }

        default: {
            return state;
        }
    }
}