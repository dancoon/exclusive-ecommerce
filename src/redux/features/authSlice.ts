import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isActivated: boolean;
  isLoading: boolean;
  user: {
    email: string;
    name: string;
  };
}

const initialState = {
  isAuthenticated: false,
  isActivated: false,
  isLoading: true,
  user: {
    email: "",
    name: "",
  },
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      // state.isAuthenticated = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setUser: (state, action) => {
      const { email, name } = action.payload;
      state.user.email = email;
      state.user.name = name;
    },
    setActivated: (state) => {
      state.isActivated = true;
    },
  },
});

export const { setAuth, logout, finishInitialLoad, setUser, setActivated } =
  authSlice.actions;
export default authSlice.reducer;
