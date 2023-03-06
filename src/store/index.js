import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authModal from "./Slices/AuthModalSlice";
import Authentication from "./Slices/AuthSlice";

const rootReducer = combineReducers({ authModal, Authentication });

export const store = configureStore({
  reducer: rootReducer,
});
