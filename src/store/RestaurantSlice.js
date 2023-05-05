import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  profileDetails: null,
};

const GetProfile = createSlice({
  name: "GET_PROFILE",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

const GetOneProduct = createSlice({
  name: "GET_ONE_PRODUCT",
  initialState,
  reducers: {
    setOneProduct(state, action) {
      state.profileDetails = action.payload;
    },
  },
});

export const Profile = GetProfile.reducer;

export const ProfileOne = GetOneProduct.reducer;

export const { setProfile } = GetProfile.actions;
export const { setOneProduct } = GetOneProduct.actions;
