import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { combineReducers } from "redux";
import homeSlice from "./components/homeSlice";
import { browserHistory } from "./history";

export const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
  home: homeSlice,
});