import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { table: tableSlice.reducer, ui: uiSlice.reducer },
});

export default store;
