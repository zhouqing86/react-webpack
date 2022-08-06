import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prices: [],
    loading: false,
    count: 0,
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        updatePrices: (state, action) => {
            state.prices = action.payload;
        },
        increment: state => state.count = state.count + 1,
        decrement: state => state.count = state.count - 1,
    },
});

export const { updatePrices, increment,  decrement} = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;