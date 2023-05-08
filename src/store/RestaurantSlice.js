import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurant: null,
};

const GetRest = createSlice({
  name: "GET_RESTAURANT",
  initialState,
  reducers: {
    setRest(state, action) {
      state.restaurant = action.payload;
    },
  },
});

export const Restaurant = GetRest.reducer;

export const { setRest } = GetRest.actions;
