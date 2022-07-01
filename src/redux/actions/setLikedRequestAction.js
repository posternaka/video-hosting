import { SET_LIKED_REQUEST } from './actionTypes';
import { SET_DELETION_LIKED_REQUEST } from './actionTypes';

export const setLikedRequest = (value) => {
    return { 
        type: SET_LIKED_REQUEST,
        payload: value
    }
}

export const setDeletionLikedRequest = (id) => {
    return { 
        type: SET_DELETION_LIKED_REQUEST,
        payload: id
    }
}

