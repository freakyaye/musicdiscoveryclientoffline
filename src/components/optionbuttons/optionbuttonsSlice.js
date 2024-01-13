import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    chosenOption: ''
}

const optionbuttonsSlice = createSlice({
    name: "optionbuttons",
    initialState,
    reducers: {
        changeOption: (state, action) => {
            state.chosenOption = action.payload
        },
    }
})

export const {changeOption} = optionbuttonsSlice.actions
export default optionbuttonsSlice.reducer