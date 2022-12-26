import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curPage: 0,
  maxPage: 3,
  throttle: false
  ,
};
const scrollReducer = createSlice({
  name: "scrollReducer",
  initialState,
  reducers: {
    onScroll: (state, actions) => {
      state.curPage = actions.payload;
    },
    setMaxPage: (state, actions) => {
      console.log(actions.payload)
      state.maxPage = actions.payload;
    },
    onThrottle: (state, actions) => {
      state.throttle = actions.payload;
    },
  },
});

export const scrollReducerAction = scrollReducer.actions;
export default scrollReducer.reducer;
