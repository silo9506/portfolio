import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import navReducer from "./navReducer";
import scrollReducer from "./scrollReducer";
const rootReducer = combineReducers({
  scrollReducer,
  navReducer,
  carouselReducer,
});

export default rootReducer;
