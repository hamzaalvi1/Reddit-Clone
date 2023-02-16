import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  view: "login",
};

export const authModal = createSlice({
  name: "Auth Modal",
  initialState,
  reducers: {
    isModalOpen: (state, action) => {
      const { payload } = action;
      state.open = payload.open;
      state.view = payload.view;
    },
  },
});

export const { isModalOpen } = authModal.actions;

export default authModal.reducer;
