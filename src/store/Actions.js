import { configureStore } from "@reduxjs/toolkit";
import { Profile } from "./AuthorizationSlice";
export const store = configureStore({
  reducer: { todo: Profile },
});

export default store;
