import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    songList: []
}

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addSong: (state, action) => {
            // if (state.songList.length >= 99) {
                state.songList.push(action.payload)
            // } else {
            //     return
            //     }
            },
        removeSong: (state, action) => {
            const id = state.songList.findIndex(temp => temp.index === action.payload)
            const newState = state.songList.splice(id,  1)

        },
    }
})

export const {addSong, removeSong, returnSongs} = playlistSlice.actions

export default playlistSlice.reducer