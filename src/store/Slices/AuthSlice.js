import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const getMe = createAsyncThunk(
  "authentication/getMe",
  async (userPayload, { rejectWithValue }) => {
    const [createUserWithEmailAndPassword, user, error] =
      useCreateUserWithEmailAndPassword(auth);
    try {
      await createUserWithEmailAndPassword(userPayload);
      return user;
    } catch (err) {
      return rejectWithValue(error);
    }
  }
);

const authenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.fulfilled]: (state, payload) => {
      state.loading = false;
      state.user = payload;
    },
    [getMe.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authenticationSlice.reducer
