import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authModal from "./Slices/AuthModalSlice";

const rootReducer = combineReducers({ authModal });

export const store = configureStore({
  reducer: rootReducer,
});
