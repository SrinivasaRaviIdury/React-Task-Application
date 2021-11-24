import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  intialState: {},
  reducers: {}
});

export const authAction = authSlice.actions;
export default authSlice;
