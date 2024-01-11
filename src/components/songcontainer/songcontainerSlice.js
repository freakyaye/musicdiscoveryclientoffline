import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    songList: []
}

const songcontainerSlice = createSlice({
    name: "toptracks",
    initialState,
    reducers: {
        addSongs: (state, action) => {
            state.songList.push(action.payload)
        }
    }
})

export const {addSongs} = songcontainerSlice.actions

export default songcontainerSlice.reducer