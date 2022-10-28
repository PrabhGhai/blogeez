import { createSlice, configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, numblogs: 0 },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    numblogs(state, action) {
      const blogs = action.payload;
      state.numblogs = blogs;
    },
    addnumblogs(state) {
      state.numblogs += 1;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
