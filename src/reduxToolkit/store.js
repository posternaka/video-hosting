import { configureStore } from "@reduxjs/toolkit";
import setLikeReducer from './toolkitReducer'

export default configureStore ({
    reducer: {
        likedRequests: setLikeReducer,
    }
})