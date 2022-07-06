import { GET_VIDEOS } from './actionTypes';

export const axiosGetVideos = () => async (dispatch) => {
    try {

        const asyncData = require('../../db.json');

        dispatch(getVideos(asyncData))
    }
    catch {
        throw new Error('Oooops...')
    }
}

export const getVideos = (data) => {
    return {
        type: GET_VIDEOS,
        payload: data
    }
}