import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};
const navReducer = createSlice({
  name: "navReducer",
  initialState,
  reducers: {
    onToggle: (state, actions) => {
      state.toggle = !state.toggle;
    },
    setMaxPage: (state, actions) => {
      state.maxPage = actions.payload;
    },
    onThrottle: (state, actions) => {
      state.throttle = actions.payload;
    },
  },
});

export const navReducerAction = navReducer.actions;
export default navReducer.reducer;
