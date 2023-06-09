import { configureStore } from "@reduxjs/toolkit";
import { Profile } from "./AuthorizationSlice";
import { Restaurant } from "./RestaurantSlice";
export const store = configureStore({
  reducer: { todo: Profile, todo2: Restaurant },
});

export default store;
