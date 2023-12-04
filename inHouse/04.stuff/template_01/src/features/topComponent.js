import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const topComponentSlice = createSlice({
    name: "topComponent",
    initialState: { value: initialStateValue },
    reducers: {
        searchMovieKeyword: (state, action) => {
            state.value = action.payload;
        },
        boxesMoviesInfo: (state, action) => {
            state.value = action.payload;
        },
        movieVal: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { searchMovieKeyword, boxesMoviesInfo, movieVal } = topComponentSlice.actions;
export default topComponentSlice.reducer;