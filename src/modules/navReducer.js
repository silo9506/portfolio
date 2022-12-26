import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};
const navReducer = createSlice({
  name: "navReducer",
  initialState,
  reducers: {
    onToggle: (state, actions) => {
      console.log("아");
      state.toggle = !state.toggle;
    },
    setMaxPage: (state, actions) => {
      console.log(actions.payload);
      state.maxPage = actions.payload;
    },
    onThrottle: (state, actions) => {
      state.throttle = actions.payload;
    },
  },
});

export const navReducerAction = navReducer.actions;
export default navReducer.reducer;
