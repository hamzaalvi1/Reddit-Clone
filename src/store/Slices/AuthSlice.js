import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const getMe = createAsyncThunk(
  "authentication/getMe",
  async ({ userPayload, toast }, { rejectWithValue }) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        "hamza@abc.com",
        "123456"
      );
      if (createUser.user) {
        toast({
          title: `Account created successfully`,
          status: "success",
          isClosable: true,
          position: "bottom-right",
        });
      }
      return createUser.user;
    } catch (err) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
      return rejectWithValue(err.message);
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

export default authenticationSlice.reducer;
