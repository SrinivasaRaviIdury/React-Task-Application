import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  intialState: {
    token: null,
    isLoggedIn: false
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = false;
    }
  }
});

export const authAction = authSlice.actions;
export default authSlice;
