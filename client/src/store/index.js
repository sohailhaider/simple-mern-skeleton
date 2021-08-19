import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";

const STATE_NAME = "reduxState";
const persistedState = localStorage.getItem(STATE_NAME)
  ? JSON.parse(localStorage.getItem(STATE_NAME))
  : {};
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem(STATE_NAME, JSON.stringify(store.getState()));
});
export default store;
