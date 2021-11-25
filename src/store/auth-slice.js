import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !state.isLoggedIn;
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = !state.isLoggedIn;
    }
  }
});

export const authAction = authSlice.actions;
export default authSlice;
