import { GET_VIDEOS } from './actionTypes';
import axios from 'axios';

export const axiosGetVideos = (requestVideo = '') => async (dispatch) => {
    try {
        const asyncData = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${requestVideo}&maxResults=2&type=video&key=AIzaSyDhVD6w4H7iP-d8c-n8XfNSzGzTcTu5hTU`);

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