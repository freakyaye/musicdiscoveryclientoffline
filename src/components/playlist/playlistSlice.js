import {createSlice, current} from "@reduxjs/toolkit";
import {accordionItem} from "@nextui-org/react";
import {renderIntoDocument} from "react-dom/test-utils";

const initialState = {
    songList: []
}

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.songList.push(action.payload)
            },
        removeSong: (state, action) => {
            const id = state.songList.findIndex(temp => temp.index === action.payload)
            const newState = state.songList.splice(id,  1)

        }
    }
})

export const {addSong, removeSong} = playlistSlice.actions

export default playlistSlice.reducer