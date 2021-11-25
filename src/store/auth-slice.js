import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
    userName: localStorage.getItem("username")
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !state.isLoggedIn;
      state.userName = action.payload.userName;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.userName);
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = !state.isLoggedIn;
      state.username = null;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
  }
});

export const authAction = authSlice.actions;
export default authSlice;
