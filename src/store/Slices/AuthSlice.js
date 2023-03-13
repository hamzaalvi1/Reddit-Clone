import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { AuthConstants } from "@/config/constants";
import { isModalOpen } from "./AuthModalSlice";
const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

const googleProvider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
  "authentication/createUser",
  async (
    { values, toast, setSubmitting, resetForm },
    { rejectWithValue, dispatch }
  ) => {
    const { email, password } = values;
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (createUser.user) {
        toast({
          title: `Account created successfully`,
          status: "success",
          isClosable: true,
          position: "bottom-right",
          duration: 4000,
        });
        dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));
      }
      return createUser.user;
    } catch (err) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-right",
      });
      return rejectWithValue(err.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  }
);

export const getMe = createAsyncThunk(
  "authentication/getMe",
  async (
    { values, toast, setSubmitting, resetForm },
    { rejectWithValue, dispatch }
  ) => {
    const { email, password } = values;
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      if (loginUser.user) {
        toast({
          title: `Login successfully`,
          status: "success",
          isClosable: true,
          position: "bottom-right",
          duration: 4000,
        });
        dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: false }));
      }
      return loginUser.user;
    } catch (err) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-right",
      });
      return rejectWithValue(err.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  }
);
export const signInWithGoogle = createAsyncThunk(
  "authentication/googleAuth",
  async (
    { setOAuthLoading, toast },
    { fulfillWithValue, rejectWithValue, dispatch }
  ) => {
    setOAuthLoading({ google: true, apple: false });
    try {
      const response = await signInWithPopup(auth, googleProvider);

      if (response.user) {
        toast({
          title: `Account login successfully`,
          status: "success",
          isClosable: true,
          position: "bottom-right",
          duration: 4000,
        });
      }
      dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: false }));
      return fulfillWithValue(response.user);
      // const credential = GoogleAuthProvider.credentialFromResult(response);
      // const token = credential.accessToken;
      // const user = result.user;
    } catch (error) {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      toast({
        title: `${error.message}`,
        status: "error",
        isClosable: true,
        position: "bottom-right",
        duration: 4000,
      });
      return rejectWithValue(errorMessage);

      // ...
    } finally {
      setOAuthLoading({ google: false, apple: false });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "authentication/resetPassword",
  async ({ values, toast, setSubmitting, resetForm }, { dispatch }) => {
    const { email } = values;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast({
          title: `Please check your inbox`,
          status: "success",
          isClosable: true,
          duration: 8000,
          position: "bottom-right",
        });
        dispatch(isModalOpen({ view: AuthConstants.LOGIN, open: true }));
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "success",
          isClosable: true,
          duration: 8000,
          position: "bottom-right",
        });
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
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
      state.isAuthenticated = true;
    },
    [getMe.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticated = false;
    },
    [signInWithGoogle.pending]: (state) => {
      state.loading = true;
    },
    [signInWithGoogle.fulfilled]: (state, payload) => {
      state.loading = false;
      state.user = payload;
      state.isAuthenticated = true;
    },
    [signInWithGoogle.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticated = false;
    },
  },
});

export default authenticationSlice.reducer;
