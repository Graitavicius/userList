import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    users: [],
  },
  reducers: {
    fetchTable(state, action) {
      state.users = action.payload.users;
    },
    fetchMoreUsers(state, action) {
      state.users = [...state.users, ...action.payload.users];
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice;
