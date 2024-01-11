import {configureStore} from "@reduxjs/toolkit";
import songcontainersliceReducer from './components/songcontainer/songcontainerSlice.js'
import playlistSliceReducer from "./components/playlist/playlistSlice";

const store = configureStore({
    reducer: {
        mytoptracks: songcontainersliceReducer,
        playlist: playlistSliceReducer,
    }
})

export default store