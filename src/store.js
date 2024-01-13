import {configureStore} from "@reduxjs/toolkit";
import songcontainersliceReducer from './components/songcontainer/songcontainerSlice.js'
import playlistSliceReducer from "./components/playlist/playlistSlice";
import optionbuttonsSliceReducer from "./components/optionbuttons/optionbuttonsSlice";

const store = configureStore({
    reducer: {
        mytoptracks: songcontainersliceReducer,
        playlist: playlistSliceReducer,
        optionbuttons: optionbuttonsSliceReducer,
    }
})

export default store