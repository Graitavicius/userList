import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    users: [{ id: "", name: "", startDate: "", endDate: "", budget: "" }],
  },
  reducers: {
    fetchTable(state, action) {
      state.users = action.payload.users;
      // state.users.id = action.payload.users.id;
      // state.users.name = action.payload.users.name;
      // state.users.startDate = action.payload.users.startDate;
      // state.users.endDate = action.payload.users.endDate;
      // state.users.budget = action.payload.users.budget;
    },
    fetchMoreUsers(state, action) {
      state.users = [...state.users, ...action.payload.users];
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice;
