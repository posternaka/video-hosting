import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetVideos = createAsyncThunk(
    'likedRequests/fetchGetVideos',
    async function(requestVideo) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${requestVideo}&maxResults=2&type=video&key=AIzaSyDhVD6w4H7iP-d8c-n8XfNSzGzTcTu5hTU`);

        const data = await response.json();

        return data;
    }
)

const setLikeReducer = createSlice({
    name: 'likeAction',
    initialState: {
        likedRequests: [],
        status: null,
        error: null,
    },
    reducers: {
        setLikedRequest(state, action) {
            state.likedRequests.push({
              value: action.payload.value,  
            })
        },
        setDeletionLikedRequest(state, action) {
            state.likedRequests.filter((_, index) => index !== action.payload)
        }
    },
    extraReducers: {
        [fetchGetVideos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchGetVideos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchGetVideos.rejected]: (state, action) => {},
    }
})

export const { setLikedRequest, setDeletionLikedRequest } = setLikeReducer.actions;  

export default setLikeReducer.reducer;