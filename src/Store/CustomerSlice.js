import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "Customer",
  initialState: {
    value: {},
  },
  reducers: {
    pushData: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { pushData } = CustomerSlice.actions;
export default CustomerSlice.reducer;
