import { configureStore } from "@reduxjs/toolkit";
import { Profile } from "./AuthorizationSlice";
import { Restaurant } from "./RestaurantSlice";
export const store = configureStore({
  reducer: { todo: Restaurant },
});

export default store;
